import React, { Component } from "react";
import { Link } from "react-router-dom";
import { isAdmin, isOwner, isCarer } from "./auth/authentication";

export default class Navbar extends Component {
    render() {
        const admin = isAdmin();
        const owner = isOwner();
        const carer = isCarer();

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">PupCare</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {this.props?.profile?.username
                            ? (
                                <>
                                    { owner && <li className="nav-item active">
                                        <Link className="nav-link" to="/pets">Pets</Link>
                                    </li>
                                    }
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/jobs">Jobs</Link>
                                    </li>
                                    { admin && <li className="nav-item">
                                        <Link className="nav-link" to="/users">Users</Link>
                                    </li>
                                    }
                                </>
                            )
                            : (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/signup">Sign Up</Link>
                                    </li>
                                </>
                            )
                        }
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                            {this.props?.profile?.username &&
                                <>
                                    <span>{this.props?.profile?.username} ({this.props?.profile?.roles.join(', ')})</span>
                                    <span className="nav-item" onClick={this.props.onLogOut}>
                                        <a href="#" className="nav-link">Log out</a>
                                    </span>
                                </>
                            }
                    </form>
                </div>
            </nav>
        );
    }
}