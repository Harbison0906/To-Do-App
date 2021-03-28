import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { ITask } from '../utils/interfaces';
import { json, User } from '../utils/api';
import { useState, useEffect } from 'react';

interface AdminState {
  task: string
}
interface AdminProps extends RouteComponentProps<{ taskid: string }> { }

const Admin: React.FC<AdminProps> = props => {

  const [task, setTask] = useState<ITask>();

  const checkAuth = async () => {
    if (!User || User.userid === null || User.role !== 'admin') {
      props.history.push('/');
      alert("Oops! Looks like you need to login or register");
    }
  }

  const getDetails = async () => {
    const task = await json<ITask>(`/api/tasks/${props.match.params.taskid}`, 'GET');
    setTask(task);
  }

  const editTask = async (e?: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await json(`/api/tasks/${props.match.params.taskid}`, 'PUT', task)
    console.log(task)
    props.history.push('/tasks');
  }

  const deleteTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    const result = json(`/api/tasks/${props.match.params.taskid}`, 'DELETE')
      .then(details => {
        console.log(result);
        props.history.push('/tasks')
      })
  }

  useEffect(() => { getDetails() }, [])
  useEffect(() => { checkAuth() }, [])

  return (
    <main className="container">
      <section className="row mt-5 justify-content-center">
        <input
          className="form-control mt-5 shadow-sm"
          value={task?.name || ' '} type="text"
          placeholder={task?.name}
          onChange={e => setTask({ id: task.id, name: e.target.value, userid: task.userid })}
        />
        <button type="button" className="btn btn-sm btn-light mt-3 rounded-sm shadow-sm" onClick={deleteTask}>Delete</button>
        <button type="button" className="btn btn-sm btn-light mt-3 rounded-sm shadow-sm" onClick={editTask}>Save Changes</button>
      </section>
    </main>
  )
}

export default Admin;