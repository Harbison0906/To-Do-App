import * as express from 'express';
import db from '../../db';
import { isLoggedIn } from '../../middleware/auth-middlewares';
import { ReqUser } from '../../utils/types';

const router = express.Router();


// Get all tasks for the user
// req.user.id represents whoever is logged in
router.get('/user_tasks/', isLoggedIn, async (req: ReqUser, res) => {
  const userid = req.user.id;

  try {
    const tasks = await db.tasks.getForUser(userid);
    res.json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'bad code', error });
  }
})

router.get('/:id', isLoggedIn, async (req: ReqUser, res) => {
  const userid = req.user.id;
  const id = Number(req.params.id)

  try {
    const [task] = await db.tasks.one(id, userid);
    res.json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'bad code', error });
  }
})


// Add a task
router.post('/', isLoggedIn, async (req: ReqUser, res) => {
  const userid = req.user.id;
  const task = req.body;
  try {
    const result = await db.tasks.insert(task.name, userid)
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'bad code', error });
  }
})

// Edit a task
router.put('/:id', isLoggedIn, async (req, res) => {
  const id = Number(req.params.id);
  const task = req.body;
  try {
    await db.tasks.update(id, task);
    res.json('Task updated');
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'bad code', error });
  }
})


// Delete task
router.delete('/:id', isLoggedIn, async (req: ReqUser, res) => {
  const id = Number(req.params.id);
  const userid = req.user.id;
  try {
    await db.tasks.destroy(id, userid);
    res.json('Task deleted!');
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'bad code', error });
  }
})

export default router;