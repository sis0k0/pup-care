import React, { Component } from "react";
import { addUser } from './users.service';

export default class AddUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            roles: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        addUser(this.state).then(() => {
            this.props.history.push('/users');
        }).catch((e) => alert(e.message));
    }

    handleChange(event, label) {
        this.setState({ [label]: event.target.value });
    }

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Add User</h3>

                        <div className="form-group">
                            <label>Username</label>
                            <input onChange={event => this.handleChange(event, 'username')} type="text" className="form-control" placeholder="Enter username" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input onChange={event => this.handleChange(event, 'password')} type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                            <label>Role: 
                                    <select className="form-control" value={this.state.roles} onChange={event => this.handleChange(event, 'roles')}>
                                    <option className="form-control" value="admin">Admin</option>
                                    <option className="form-control" value="owner">Owner</option>
                                    <option className="form-control" value="carer">Carer</option>
                                </select>
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}