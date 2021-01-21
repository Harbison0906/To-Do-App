import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface HomeState {}
interface HomeProps extends RouteComponentProps {}


export default class Home extends React.Component <HomeProps, HomeState> {
  constructor(props: HomeProps) {
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
            <h1 className="text-center">Home View</h1>
          </div>
        </section>
      </main>

    )
  }

}
