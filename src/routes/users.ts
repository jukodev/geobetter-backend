import { Request, Response, Router } from 'express';
import { db } from '../db/db.js';
import { users } from '../db/schema.js';
import { eq } from 'drizzle-orm';

const userRouter = Router();

userRouter.get('/:id', async (req: Request, res: Response) => {
  const nick = req.params.id;
  if (!nick) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  const user = await db
    .selectDistinct()
    .from(users)
    .where(eq(users.nick, nick));
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  console.log(user);

  // Logic to fetch user by ID
  res.status(200).json(user);
});

userRouter.get('/', async (req: Request, res: Response) => {
  console.log('Fetching all users');
  res.status(200).json();
});

export default userRouter;
