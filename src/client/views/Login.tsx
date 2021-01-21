import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface LoginState {}
interface LoginProps extends RouteComponentProps {}


export default class Login extends React.Component <LoginProps, LoginState> {
  constructor(props: LoginProps) {
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
            <h1 className="text-center">Login View</h1>
          </div>
        </section>
      </main>

    )
  }

}
