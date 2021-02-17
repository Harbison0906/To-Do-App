import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { ITask } from '../utils/interfaces';
import { json } from '../utils/api';

interface DetailsState {
  task: ITask
}
interface DetailsProps extends RouteComponentProps<{ taskid: string }> { }


export default class Details extends React.Component<DetailsProps, DetailsState> {
  constructor(props: DetailsProps) {
    super(props)
    this.state = {
      task: null
    };
  }

  async componentDidMount() {
    const task = await json(`/api/tasks/${this.props.match.params.taskid}`, 'GET');
    this.setState({ task });
  }


  render() {
    return (
      <main className="container">
        <section className="row mt-5 justify-content-center">
          <div className="card m-2">
            <div className="card-body">
              <h4>{this.state.task?.name}</h4>
            </div>
          </div>
        </section>
      </main>

    )
  }

}
