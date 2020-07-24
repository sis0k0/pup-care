import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { register, isLoggedIn } from './authentication';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.signUp = this.signUp.bind(this);
    }

    componentDidMount() {
        const loggedIn = isLoggedIn(); 
        if (loggedIn) {
            this.props.history.push('/pets');
        }
    }

    signUp(event) {
        event.preventDefault();
        if(!this.validate()) {
            return;
        }

        register(this.state).then(() => {
            alert('Successfully created user! Please log in!');
            this.props.history.push('/login');
        }).catch((e) => this.setState({ error: e.message }));
    }

    handleChange(event, label) {
        this.setState({ [label]: event.target.value });
    }

    validate() {
        if (this.state.password !== this.state.confirmPassword) {
            this.setState({ error: 'The two passwords do not match!' });
            return false;
        } else {
            return true;
        }
    }

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={this.signUp}>
                        <h3>Registration</h3>
                        { this.state.error && <span className="text-danger">{this.state.error}</span> }

                        <div className="form-group">
                            <label>Username</label>
                            <input onChange={event => this.handleChange(event, 'username')} type="text" className="form-control" placeholder="Enter username" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input onChange={event => this.handleChange(event, 'password')} type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input onChange={event => this.handleChange(event, 'confirmPassword')} type="password" className="form-control" placeholder="Confirm password" />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        <p className="forgot-password text-right">
                            Already registered? <Link to="/login">Log in</Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(SignUp);