import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UsersList from "./UsersList";
import PetsList from "./PetsList";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/pets">Pets</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
        <hr />

        <Switch>
          <Route path="/pets">
            <PetsList />
          </Route>
          <Route path="/users">
            <UsersList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
