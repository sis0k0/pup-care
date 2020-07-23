import React from "react";
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

export default function BasicExample() {
  return (
    <Router>
      <Navbar />
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
              <Login />
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
