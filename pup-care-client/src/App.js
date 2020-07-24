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
import Pet from "./Pet";
import Login from "./Login";
import SignUp from "./Signup";
import Navbar from "./Navbar";
import { getProfile } from "./auth/authentication";

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
            </Switch>
            </div>
        </div>
      </Router>
    );
  }
}
