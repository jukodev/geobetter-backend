import { Request, Response, Router } from 'express';
import { db } from '../db/db.js';
import { users } from '../db/schema.js';
import { and, eq, inArray } from 'drizzle-orm';

const userRouter = Router();

userRouter.get('/:id', async (req: Request, res: Response) => {
  let nick = req.params.id;
  if (!nick) {
    return res.status(400).json({ error: 'User ID is required' });
  }
  nick = decodeURIComponent(nick);
  console.log(`Fetching user with nick: ${nick}`);

  const user = await db
    .selectDistinct()
    .from(users)
    .where(eq(users.nick, nick));
  if (!user || user.length === 0) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.status(200).json(user[0]);
});

userRouter.put('/:id', async (req: Request, res: Response) => {
  let nick = req.params.id;
  if (!nick) {
    return res.status(400).json({ error: 'User ID is required' });
  }
  nick = decodeURIComponent(nick);
  let ids: string[] = req.body.ids;
  if (!ids || !Array.isArray(ids)) {
    return res.status(400).json({ error: 'Invalid or missing IDs' });
  }
  let count = await db.$count(users, eq(users.nick, nick));
  console.log(`Count of users with nick ${nick}: ${count}`);
  if (count > 1) {
    let user = await db
      .selectDistinct()
      .from(users)
      .where(and(eq(users.nick, nick), inArray(users.url, ids)));
    if (!user || user.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.status(200).json(user[0]);
  }
  const user = await db
    .selectDistinct()
    .from(users)
    .where(eq(users.nick, nick));
  if (!user || user.length === 0) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.status(200).json(user[0]);
});

userRouter.get('/', async (req: Request, res: Response) => {
  console.log('Fetching all users');
  res.status(200).json();
});

export default userRouter;
