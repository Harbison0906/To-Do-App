import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { ITask } from '../utils/interfaces';
import { json } from '../utils/api';
import { useState, useEffect } from 'react';

interface DetailsState {
  task: ITask
}
interface DetailsProps extends RouteComponentProps<{ taskid: string }> { }

const Details: React.FC<DetailsProps> = props => {

  const [task, setTask] = useState<ITask>({});

  const getDetails = async () => {
    const task = await json(`/api/tasks/${props.match.params.taskid}`, 'GET');
    setTask(task);
  }

  useEffect(() => { getDetails() }, [])

  return (
    <main className="container">
      <section className="row mt-5 justify-content-center">
        <div className="card m-2">
          <div className="card-body">
            <h4>{task?.name}</h4>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Details;