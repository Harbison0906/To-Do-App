import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { json } from '../utils/api';
import { ITask } from '../utils/interfaces';

interface TasksState {
  tasks: ITask[]
}
interface TasksProps extends RouteComponentProps { }


export default class Tasks extends React.Component<TasksProps, TasksState> {
  constructor(props: TasksProps) {
    super(props)
    this.state = {
      tasks: []
    };
  }

  async componentDidMount() {
    const tasks = await json('/api/tasks/user_tasks', 'GET');
    this.setState({ tasks });
    console.log(tasks);
  }


  render() {
    return (
      <main className="container">
        <section className="row mt-5">
          <div className="col-12">
            <h3 className="mb-5 text-center">Get after it...</h3>
            <>
              {this.state.tasks.map(task => {
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

}
