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
import AddPet from "./pets/AddPet";
import AddJob from "./jobs/AddJob";
import Login from "./auth/Login";
import SignUp from "./auth/Signup";
import Navbar from "./Navbar";
import { getProfile, logOut } from "./auth/authentication";
import JobResult from "./jobs/JobResult";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { profile: {} };

    this.handleUserChanged = this.handleUserChanged.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  async componentDidMount() {
    await this.handleUserChanged();
  }

  async handleUserChanged() {
    const profile = await getProfile();
    this.setState({ profile });
  }

  async handleLogOut() {
    logOut();
    this.setState({ profile: {} });
  }

  render() {
    return (
      <Router>
        <Navbar onLogOut={this.handleLogOut} profile={this.state.profile} />
        <div className="container">
          <div>
            <Switch>
              <Route exact path="/">
                <PetsList profile={this.state.profile} />
              </Route>
              <Route path="/pets">
                <PetsList profile={this.state.profile} />
              </Route>
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
              <Route path="/pet-add" component={AddPet}>
              </Route>
              <Route path="/job-add" component={AddJob}>
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
