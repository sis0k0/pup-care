import React, { Component } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UsersList from "./UsersList";
import PetsList from "./PetsList";
import Login from "./Login";
import SignUp from "./Signup";
import Navbar from "./Navbar";
import { getProfile } from "./auth/authentication";
import { Redirect } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {}
    };

    this.handleUserChanged = this.handleUserChanged.bind(this);
  }

  async handleUserChanged(username) {
    const profile = await getProfile(username);
    this.setState({ profile });
  }

  render() {
    return (
      <Router>
        <Navbar profile={this.state.profile} />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route path="/pets">
                <PetsList />
              </Route>
              <Route path="/users">
                <UsersList />
              </Route>
              <Route path="/login">
                <Login onUserChange={this.handleUserChanged} />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
