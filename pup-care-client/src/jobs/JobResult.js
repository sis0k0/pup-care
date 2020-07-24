import React, { Component } from "react";
import { loadJobDetails, loadJobResults } from './jobs.service';
import Job from './Job';

export default class JobResult extends Component {
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
        const jobResults = await loadJobResults(id);
        this.setState({ job, jobResults });
    }

    render() {
        const job = this.state?.job;

        return (
            job ? 
            <div className="text-center">
                <Job job={job} hideDetails />
                {this.state.jobResults.length ? <div class="list-container">
                    <h3>Results</h3>
                    {
                        this.state.jobResults.map(result => (
                        <div>
                            <p>Started: {new Date(result?.startDate).toUTCString()}</p>
                            <p>Ended: {new Date(result?.endDate).toUTCString()}</p>
                            <p>Total time: {(new Date(result?.endDate) - new Date(result?.startDate))/(3600*1000)} hours</p>
                            <hr />
                        </div>
                        ))
                    } 
                </div>
                :<></>}
            </div>
            : <div><h3>Job not found!</h3></div>
        )
    }
}