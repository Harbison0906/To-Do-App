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
    const tasks = await json('/api/tasks', 'GET');
    this.setState({ tasks });
  }


  render() {
    return (
      <main className="container">
        <section className="row mt-5">
          <div className="col-12">
            <h1 className="text-center">Tasks View</h1>
            <>
              {this.state.tasks.map(task => {
                return (
                  <ul className="list-group">
                    <li className="list-group-item">{task.name}</li>
                  </ul>
                )
              })}
            </>
          </div>
        </section>
      </main>

    )
  }

}
