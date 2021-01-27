import * as express from 'express';
import * as passport from 'passport';
import tasksRouter from './tasks';

const router = express.Router();

router.use((req, res, next) => {
  passport.authenticate('bearer', {session: false}, (err, user, info) => {
    if(user) req.user = user;
    return next();
  })(req, res, next);
})

router.use('/tasks', tasksRouter);


export default router;