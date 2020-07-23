import React from "react";
import axios from 'axios';
import { baseUrl } from "./constants";

export default class UserList extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get(`${baseUrl}/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  render() {
    return (
      <ul>
        { this.state.users.map(user => <li>{user.username}</li>)}
      </ul>
    )
  }
}
