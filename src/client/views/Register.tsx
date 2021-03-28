import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { json, SetAccessToken } from '../utils/api'
import { useState } from 'react';

interface RegisterState {
  email: string,
  password: string,
  name: string
}
interface RegisterProps extends RouteComponentProps { }


const Register: React.FC<RegisterProps> = props => {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleRegister = async (e?: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      let result = await json('/auth/register', 'POST');
      if (result) {
        SetAccessToken(result.token, { userid: result.userid, role: result.role });
        console.log(result);
        props.history.push('/new_task');
      }
    } catch (error) {
      throw error;
    }
  }

  return (
    <main className="container">
      <section className="row mt-5 justify-content-center">
        <div className="col-12">
          <h1 className="text-center">Sign Up Here!</h1>
        </div>
        <div className="input-group input-group-sm registerInput">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            aria-describedby="inputGroup-sizing-sm"
            value={name || ' '}
            onChange={e => setName(e.target.value)}>
          </input>
        </div>
        <div className="input-group input-group-sm registerInput">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            aria-describedby="inputGroup-sizing-sm"
            value={email || ' '}
            onChange={e => setEmail(e.target.value)}>
          </input>
        </div>
        <div className="input-group input-group-sm registerInput">
          <input
            type="text"
            className="form-control"
            placeholder="Password"
            aria-describedby="inputGroup-sizing-sm"
            value={password || ' '}
            onChange={e => setPassword(e.target.value)}>
          </input>
        </div>
        <button type="button" className="btn btn-lrg btn-light mt-3 rounded-sm shadow-sm" onClick={handleRegister}>Sign Up</button>
        {/* <div className="d-flex flex-column mt-">
            <form>
              <div className="form-group col-md-7 m-3">
                <label>Name</label>
                <input
                  className="form-control mt-1 shadow-sm"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={e => this.setState({ name: e.target.value })}
                />
              </div>
              <div className="form-group col-md-7 m-3">
                <label>Email</label>
                <input
                  className="form-control mt-1 shadow-sm"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </div>
              <div className="form-group col-md-7 m-3">
                <label>Password</label>
                <input
                  className="form-control mt-1 shadow-sm"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value })}
                />
              </div>
            </form>
            <button type="button" className="btn btn-lrg btn-light" onClick={this.handleRegister}>Sign Up</button>
          </div> */}
      </section>
    </main>
  )
}

export default Register