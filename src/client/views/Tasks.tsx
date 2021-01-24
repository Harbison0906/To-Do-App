import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface TasksState {}
interface TasksProps extends RouteComponentProps {}


export default class Tasks extends React.Component <TasksProps, TasksState> {
  constructor(props: TasksProps) {
    super(props)
    this.state = {};
  }

  async componentDidMount() {
    // const books = await json();
    // this.setState({});
  }


  render() {
    return (
      <main className="container">
        <section className="row mt-5">
          <div className="col-12">
            <h1 className="text-center">Tasks View</h1>
          </div>
        </section>
      </main>

    )
  }

}
