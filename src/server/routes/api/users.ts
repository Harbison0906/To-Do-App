import * as express from 'express';
import db from '../../db';
import { isLoggedIn } from '../../middleware/auth-middlewares';
import { ReqUser } from '../../utils/types';

const router = express.Router();


router.get('/profile', isLoggedIn, async (req: ReqUser, res) => {
  const user = req.user.id;
  try {
    const profile = await db.users.one(user);
    res.json(profile);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'bad code', error});
  }
})


export default router;
