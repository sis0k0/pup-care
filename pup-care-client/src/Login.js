import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logIn, isLoggedIn } from './auth/authentication';
import { withRouter } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        logIn(this.state).then(() => {
            this.props.onUserChange(this.state.username);
            this.props.history.push('/pets');
        }).catch((e) => alert(e.message));
    }

    handleChange(event, label) {
        this.setState({ [label]: event.target.value });
    }

    componentDidMount() {
        const loggedIn = isLoggedIn(); 
        if (loggedIn) {
            this.props.history.push('/pets');
        }
    }

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Login</h3>

                        <div className="form-group">
                            <label>Username</label>
                            <input onChange={event => this.handleChange(event, 'username')} type="text" className="form-control" placeholder="Enter username" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input onChange={event => this.handleChange(event, 'password')} type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        <p className="forgot-password text-right">
                            Not registered? <Link to="/signup">Sign up</Link>
                        </p>

                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);