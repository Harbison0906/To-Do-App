import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface ProfileState {}
interface ProfileProps extends RouteComponentProps {}


export default class Profile extends React.Component <ProfileProps, ProfileState> {
  constructor(props: ProfileProps) {
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
            <h1 className="text-center">Profile View</h1>
          </div>
        </section>
      </main>

    )
  }

}
