import * as express from 'express';
import * as passport from 'passport';
import tasksRouter from './tasks';
import userRouter from './users';

const router = express.Router();

router.use((req, res, next) => {
  passport.authenticate('bearer', {session: false}, (err, user, info) => {
    if(user) req.user = user;
    return next();
  })(req, res, next);
})

router.use('/tasks', tasksRouter);
router.use('/users', userRouter);


export default router;