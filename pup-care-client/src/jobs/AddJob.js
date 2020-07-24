import React, { Component } from "react";
import { getCurrentUserId } from '../auth/authentication';
import { addJob } from './jobs.service';
import { loadOwnerPets } from "../pets/pets.service";

export default class AddJob extends Component {
    constructor(props) {
        super(props);

        const currentUser = getCurrentUserId();
        this.state = {
            date: new Date(),
            owner: currentUser,
            pet: '',
            availPets: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        const pets = await loadOwnerPets(this.state.owner);
        this.setState({ availPets: pets, pet: pets[0]._id });
    }

    handleSubmit(event) {
        console.dir(this.state);
        event.preventDefault();
        addJob(this.state).then(() => {
            this.props.history.push(`/pet/${this.state.pet}`);
        }).catch((e) => alert(e.message));
    }

    handleChange(event, label) {
        console.log(event, label)
        this.setState({ [label]: event.target.value });
    }

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Add Job</h3>

                        <div className="form-group">
                            <label>Pet: 
                                    <select className="form-control" value={this.state.pet} onChange={event => this.handleChange(event, 'pet')}>
                                    {
                                        this.state.availPets.map(pet =>
                                            <option className="form-control" value={pet._id}>{pet.name}</option>
                                        )
                                    }
                                </select>
                            </label>
                        </div>

                        <div className="form-group">
                            <label>Date</label>
                            <input onChange={event => this.handleChange(event, 'date')} type="date" className="form-control" />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}