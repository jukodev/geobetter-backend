import { Request, Response, Express } from 'express';

import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { fetchAndIngestLeaderboard } from './tools/csvParser.js';
import userRouter from './routes/users.js';
import nodeCron from 'node-cron';
import 'dotenv/config';

const app: Express = express();
app.use(
  cors({
    origin: ['*']
  })
);
app.use(logger('dev'));
app.use(
  helmet({
    crossOriginResourcePolicy: false
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req: Request, res: Response) => {
  res.send('GeoBetter API');
});

app.use('/users', userRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json('Not Found');
});

app.listen(process.env.PORT ?? 4000, async () => {
  console.log(`express server is running on port ${process.env.PORT ?? 4000}`);
  await fetchAndIngestLeaderboard();
});

nodeCron.schedule('0 6 * * *', async () => {
  try {
    console.log('Starting CSV sync at', new Date().toISOString());
    await fetchAndIngestLeaderboard();
    console.log('CSV sync completed at', new Date().toISOString());
  } catch (err) {
    console.error('CSV sync failed:', err);
  }
});
