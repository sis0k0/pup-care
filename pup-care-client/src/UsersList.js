import React from "react";
import { Link, withRouter } from "react-router-dom";
import { isAdmin } from "./auth/authentication";
import { deleteUser, getAll } from "./users/users.service";

class UsersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }

    this.onDeleteUser = this.onDeleteUser.bind(this);
  }

  async componentDidMount() {
    const isAuthorized = isAdmin();
    if (!isAuthorized) {
      this.handleUnauthorized();
      return;
    }

    const users = await getAll();
    console.log(users);
    this.setState({users});
    await this.loadUsers();
  }

  componentDidUpdate() {
    const isAuthorized = isAdmin();
    if (!isAuthorized) {
      this.handleUnauthorized();
      return;
    }
  }

  handleUnauthorized() {
    this.props.history.push('/pets');
  }

  async onDeleteUser(userId) {
    await deleteUser(userId);
    await this.loadUsers();
  }

  async loadUsers() {
    const users = await getAll();
    this.setState({users});
  }

  render() {
    return (
      <div className="text-center list-container">
        <h2 className="text-center">Users</h2>
        <Link to="/user-add"><button className="btn btn-primary">Add User</button></Link>
        <div>
          {this.state.users.map(user =>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{user.username}</h5>
                <p className="card-text">Roles: {user.roles.join(', ')}</p>
              </div>
              <button className="btn btn-danger">Delete</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(UsersList);