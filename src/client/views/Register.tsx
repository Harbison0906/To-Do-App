import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { json, SetAccessToken } from '../utils/api'

interface RegisterState {
  name: string,
  email: string,
  password: string
}
interface RegisterProps extends RouteComponentProps { }


export default class Register extends React.Component<RegisterProps, RegisterState> {
  constructor(props: RegisterProps) {
    super(props)
    this.state = {
      name: 'user',
      email: 'user@test.com',
      password: 'password123'
    };
  }

  handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      let result = await json('/auth/register', 'POST', { name: this.state.name, email: this.state.email, password: this.state.password });
      if (result) {
        SetAccessToken(result.token, { userid: result.userid, role: result.role });
        console.log(result);
        this.props.history.push('/new_task');
      }
    } catch (error) {
      throw error;
    }
  }


  render() {
    return (
      <main className="container">
        <section className="row mt-5 justify-content-center">
          <div className="col-12">
            <h1 className="text-center">Sign Up Here!</h1>
          </div>
          <div className="d-flex flex-column mt-5">
            <form>
                <div className="form-group col-md-7 m-3">
                <label>Name</label>
                  <input
                    placeholder="Name"
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                  />
                </div>
                <div className="form-group col-md-7 m-3">
                <label>Email</label>
                  <input
                    placeholder="Email"
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                </div>
                <div className="form-group col-md-7 m-3">
                <label>Password</label>
                  <input
                    placeholder="Password"
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                </div>
            </form>
            <button  type="button" className="btn btn-lrg btn-light" onClick={this.handleRegister}>Sign Up</button>
          </div>
        </section>
      </main>

    )
  }

}
