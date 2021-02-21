import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { json } from '../utils/api';

interface AddTaskState {
  name: string
}
interface AddTaskProps extends RouteComponentProps {}


export default class AddTask extends React.Component <AddTaskProps, AddTaskState> {
  constructor(props: AddTaskProps) {
    super(props)
    this.state = {
      name: ''
    };
  }

  addTask = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const details = {name: this.state.name};
    const results = await json('/api/tasks', 'POST', details);
    console.log(details);
    this.props.history.push('/tasks')
  }


  render() {
    return (
      <main className="container">
        <section className="row mt-5">
          <div className="col-12">
            <input className="form-control mt-5 shadow-sm" type="text" placeholder="What's your task?"></input>
            <button  type="button" className="btn btn-lrg btn-light mt-3 rounded-sm shadow-sm" onClick={this.addTask}>Add</button>
          </div>
        </section>
      </main>

    )
  }

}
