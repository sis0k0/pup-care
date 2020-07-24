import React, { Component } from "react";
import { loadJobDetails } from './jobs/jobs.service';
import { Link } from "react-router-dom";

export default class Job extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        const params = this.props?.match?.params;
        if (!params) {
            return;
        }
        const { id } = params;
        if (!id) {
            return;
        }

        const job = await loadJobDetails(id);
        this.setState({ job });
    }

    render() {
        const job = this.state?.job || this.props?.job;

        return (
            job ? <div className="card">
                <div className="card-body">
                    { this.props.hideDetails && <h3 class="card-title">Job details</h3> }
                    <p className="card-title">Requested date: {new Date(job.date).toDateString()}</p>
                    <p className="card-text">Approved: {job.approved ? 'Yes': 'No'}</p>
                    { !this.props.hideDetails && this.props.job && <Link to={'/job/'+job._id}>Details</Link> }
                </div>
            </div> : <div><h3>Job not found!</h3></div>
        )
    }
}