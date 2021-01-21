import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface RegisterState {}
interface RegisterProps extends RouteComponentProps {}


export default class Register extends React.Component <RegisterProps, RegisterState> {
  constructor(props: RegisterProps) {
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
            <h1 className="text-center">Register View</h1>
          </div>
        </section>
      </main>

    )
  }

}
