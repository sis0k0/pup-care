import React, { Component } from "react";
import { loadPetDetails } from "./pets.service";
import { loadPetJobs } from "../jobs/jobs.service";
import Job from "../jobs/Job";

export default class Pet extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        const { match: { params } } = this.props;
        const { id } = params;

        const pet = await loadPetDetails(id);
        const jobs = await loadPetJobs(id);
        this.setState({ pet, jobs });
    }

    render() {
        const pet = this.state?.pet;

        return pet ? (
        <div className="list-container">
            <div className="card">
                <img className="card-img-top img-thumbnail" src={pet.image} />
                <div className="card-body">
                    <h5 className="card-title">{pet.name}</h5>
                    <p className="card-text">Age: {pet.age}</p>
                    <p className="card-text">Breed: {pet.breed}</p>
                </div>
            </div>

            <h3>Jobs</h3>
            {this.state.jobs.map(job => <Job job={job} />)}
        </div>
        ) : <div><h2>Pet not found!</h2></div>;
    }
}