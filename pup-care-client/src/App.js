import React, { Component } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UsersList from "./UsersList";
import PetsList from "./pets/PetsList";
import Pet from "./pets/Pet";
import Login from "./auth/Login";
import SignUp from "./auth/Signup";
import Navbar from "./Navbar";
import { getProfile } from "./auth/authentication";
import JobResult from "./jobs/JobResult";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { profile: {} };

    this.handleUserChanged = this.handleUserChanged.bind(this);
  }

  async componentDidMount() {
    await this.handleUserChanged();
  }

  async handleUserChanged() {
    const profile = await getProfile();
    this.setState({ profile });
  }

  render() {
    return (
      <Router>
        <Navbar profile={this.state.profile} />
        <div className="container">
          <div>
            <Switch>
              <Route exact path="/">
                <PetsList profile={this.state.profile} />
              </Route>
              <Route path="/pets">
                <PetsList profile={this.state.profile} />
              </Route>
              {/* <Route path="/jobs">
                <JobsList profile={this.state.profile} />
              </Route> */}
              <Route path="/users">
                <UsersList profile={this.state.profile} />
              </Route>
              <Route path="/login">
                <Login onUserChange={this.handleUserChanged} />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/pet/:id" component={Pet}>
              </Route>
              <Route path="/job/:id" component={JobResult}>
              </Route>
            </Switch>
            </div>
        </div>
      </Router>
    );
  }
}
