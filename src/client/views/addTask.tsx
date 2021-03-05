import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { json, User } from '../utils/api';
import { useState, useEffect } from 'react';

interface AddTaskState {
  name: string
}
interface AddTaskProps extends RouteComponentProps { }


const addTask: React.FC<AddTaskProps> = props => {

  const [name, setName] = useState('');

  const checkAuth = async () => {
    if (!User || User.userid === null || User.role !== 'admin') {
      props.history.push('/');
      alert("Oops! Looks like you need to login or register");
    }
  }


  const createTask = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const details = { name: name };
    const results = await json('/api/tasks', 'POST', details);
    console.log(details);
    props.history.push('/tasks')
  }

  useEffect(() => { checkAuth() }, [])


  return (
    <main className="container">
      <section className="row mt-5">
        <div className="col-12">
          <input
            className="form-control mt-5 shadow-sm"
            value={name} type="text"
            placeholder="What's your task?"
            onChange={e => setName(e.target.value)}
          />
          <button type="button" className="btn btn-lrg btn-light mt-3 rounded-sm shadow-sm" onClick={createTask}>Add</button>
        </div>
      </section>
    </main>

  )


}

export default addTask;
