import axios from 'axios';
import csvParser from 'csv-parser';
import { db } from '../db/db.js';
import { users } from '../db/schema.js';
import { isNotNull } from 'drizzle-orm';

const SQLITE_MAX_VARS = 999;

export async function fetchAndIngestLeaderboard(): Promise<void> {
  console.log(`Downloading CSV from ${process.env.CSV_URL}`);
  const res = await axios.get(process.env.CSV_URL ?? '', {
    responseType: 'stream'
  });
  if (res.status !== 200)
    throw new Error(`CSV fetch failed: HTTP ${res.status}`);

  const rows: Record<string, any>[] = [];
  let columnCount = 0;

  await new Promise<void>((resolve, reject) => {
    res.data
      .pipe(csvParser())
      .on('data', (raw: Record<string, string>) => {
        if (raw.id === 'id') return;
        const allEmpty = Object.values(raw).every((v) => v.trim() === '');
        if (allEmpty) return;

        if (columnCount === 0) columnCount = Object.keys(raw).length;

        const parsed: Record<string, any> = {};
        for (const [k, v] of Object.entries(raw)) {
          const n = Number(v);
          if (v !== '' && !isNaN(n) && isFinite(n)) {
            parsed[k] = n;
          } else if (v === '') {
            parsed[k] = null;
          } else {
            parsed[k] = v;
          }
        }

        rows.push(parsed);
      })
      .on('end', () => resolve())
      .on('error', (err: unknown) => reject(err));
  });

  console.log(`Parsed ${rows.length} rows with ${columnCount} columns each`);

  const batchSize = Math.floor(SQLITE_MAX_VARS / columnCount) || 1;

  await db.delete(users).where(isNotNull(users.id));

  for (let i = 0; i < rows.length; i += batchSize) {
    const batch = rows.slice(i, i + batchSize) as any[];
    await db.insert(users).values(batch).onConflictDoNothing();
  }

  console.log(`Imported ${rows.length} rows`);
}
