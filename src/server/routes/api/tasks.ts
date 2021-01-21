import * as express from 'express';
import db from '../../db';
import { isLoggedIn } from '../../middleware/auth-middlewares';
import { ReqUser } from '../../utils/types';

const router = express.Router();


// Get all tasks for the user
router.get('/', async (req, res) => {
  const id = Number(req.params.id)
  try {
    if (id) {
      const [task] = await db.tasks.one(id);
      res.json(task);
    } else {
      const tasks = await db.tasks.all(id)
      res.json(tasks);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'bad code', error });
  }
})

// Add a task
router.put('/', isLoggedIn, async (req: ReqUser, res) => {
  const task = req.body;
  try {
    const result = await db.tasks.insert(task)
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
    await db.tasks.update(task, id);
    res.json('Task updated');
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'bad code', error });
  }
})


// Delete task
router.delete('/:id', isLoggedIn, async (req: ReqUser, res) => {
  const id = Number(req.params.id);
  try {
    await db.tasks.destroy(id);
    res.json('Task deleted!');
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'bad code', error });
  }
})

export default router;