import React from "react";
import { isLoggedIn, isCarer } from '../auth/authentication';
import { loadOwnerJobs } from '../jobs/jobs.service';
import { Link, withRouter } from "react-router-dom";
import Job from './Job';

class JobList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: []
    };
  }

  async componentDidMount() {
    const loggedIn = isLoggedIn();
    if (!loggedIn) {
      this.handleUnauthorized();
      return;
    }

    await this.loadJobs();
  }

  async componentDidUpdate(prevProps) {
    const currentId = this.props?.profile?._id;
    if (!currentId) {
      this.handleUnauthorized();
    }
    if (currentId === prevProps?.profile?._id) {
      return;
    }

    await this.loadJobs();
  }

  handleUnauthorized() {
    this.props.history.push('/login');
  }

  async loadJobs() {
    const userId = this.props?.profile?._id;

    if (!userId) {
      return <h3>No jobs to show!</h3>;
    }

    const jobs = await loadOwnerJobs(userId);
    this.setState({ jobs });
  }

  render() {
    const showApply = isCarer();

    return (
      <div className="text-center list-container">
        <h2 className="text-center">Your jobs</h2>
        <Link to="/job-add"><button className="btn btn-primary">Add Job</button></Link>
        {
          this.state?.jobs?.length ?
            <div>
              {this.state.jobs.map(job =>
                <Job showApply={showApply} job={job} />
              )}
            </div> :
            <p className="text-center">You don't have any jobs!</p>
        }
      </div>
    )
  }
}

export default withRouter(JobList);