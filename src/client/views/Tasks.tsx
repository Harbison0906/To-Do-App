import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { json, User } from '../utils/api';
import { ITask } from '../utils/interfaces';
import { useState, useEffect } from 'react';


interface TasksProps extends RouteComponentProps<{ taskid: string }> { }

const Tasks: React.FC<TasksProps> = (props) => {

  const [tasks, setTasks] = useState<ITask[]>([]);

  const checkAuth = async () => {
    if(!User || User.userid === null || User.role !== 'admin') {
      props.history.push('/');
      alert("Oops! Looks like you need to login or register");
    }
  }

  const getTasks = async () => {
    const tasks = await json('/api/tasks/user_tasks', 'GET');
    setTasks(tasks);
    console.log(tasks);
  }

  useEffect(() => { getTasks() }, [])
  useEffect(() => { checkAuth() }, [])

  // deleteTask = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   const result = json(`/api/tasks/${this.props.match.params.taskid}`, 'DELETE')
  //     .then(details => {
  //       console.log(result);
  //       this.props.history.push('/tasks')
  //     })
  // }

  return (
    <main className="container">
      <section className="row mt-5">
        <div className="col-12">
          <h3 id="get-after-it" className="mb-5 text-center">Get after it.</h3>
          <>
            {tasks.map(task => {
              return (
                <div className="mt-2" key={task.id}>
                  <a className="task" href={`/tasks/${task.id}`}>
                    <span id="task-bullet">&#9642;</span>  {task.name}
                  </a>
                  <hr className="task-separator"></hr>
                </div>
              )
            })}
          </>
        </div>
      </section>
    </main>
  )
}

export default Tasks;

