import { Request, Response, Router } from 'express';
import { db } from '../db/db.js';
import { users } from '../db/schema.js';
import { eq } from 'drizzle-orm';

const userRouter = Router();

userRouter.get('/:id', async (req: Request, res: Response) => {
  let nick = req.params.id;
  if (!nick) {
    return res.status(400).json({ error: 'User ID is required' });
  }
  nick = decodeURIComponent(nick);

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
