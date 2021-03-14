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

  const [task, setTask] = useState<ITask>({});

  const checkAuth = async () => {
    if (!User || User.userid === null || User.role !== 'admin') {
      props.history.push('/');
      alert("Oops! Looks like you need to login or register");
    }
  }

  const getDetails = async () => {
    const task = await json(`/api/tasks/${props.match.params.taskid}`, 'GET');
    setTask(task);
  }

  const editTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const details = {task}
    json(`/api/books/${props.match.params.taskid}`, 'PUT', details)
    console.log(details)
    props.history.push(`/details/${props.match.params.taskid}`);
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
  useEffect(() => { editTask() }, [])

  return (
    <main className="container">
      <section className="row mt-5 justify-content-center">
        {/* <div className="mt-2" key={task.id}>
          <p className="task">
            {task.name}
          </p>
          <button type="button" className="btn btn-sm btn-light mt-3 rounded-sm shadow-sm" onClick={deleteTask}>Done</button>
          <hr className="task-separator"></hr>
        </div> */}
        <input
            className="form-control mt-5 shadow-sm"
            value={task.name} type="text"
            placeholder={task.name}
          onChange={e => setTask(task: e.target.value)}
          />
          <button type="button" className="btn btn-sm btn-light mt-3 rounded-sm shadow-sm" onClick={deleteTask}>Add</button>
      </section>
    </main>
  )
}

export default Admin;