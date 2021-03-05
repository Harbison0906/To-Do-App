import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { ITask } from '../utils/interfaces';
import { json, User } from '../utils/api';
import { useState, useEffect } from 'react';

interface DetailsState {
  task: ITask
}
interface DetailsProps extends RouteComponentProps<{ taskid: string }> { }

const Details: React.FC<DetailsProps> = props => {

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

  useEffect(() => { getDetails() }, [])
  useEffect(() => { checkAuth() }, [])

  return (
    <main className="container">
      <section className="row mt-5 justify-content-center">
        <div className="mt-2" key={task.id}>
          <p className="task">
            {task.name}
          </p>
          <hr className="task-separator"></hr>
        </div>
      </section>
    </main>
  )
}

export default Details;