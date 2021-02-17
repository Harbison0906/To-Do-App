import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { json } from '../utils/api';
import { ITask } from '../utils/interfaces';
import AddTask from '../components/addTask';

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
            <h1 className="text-center">Tasks View</h1>
            <AddTask />
            <>
              {this.state.tasks.map(task => {
                return (
                  <div className="card m-2" key={task.id}>
                    <Link className="Link" to={`/tasks/${task.id}`}>
                      <div className="card-body">
                        {task.name}
                      </div>
                    </Link>
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
