import React, { Component } from "react";
import { getCurrentUserId } from '../auth/authentication';
import { addPet } from './pets.service';

export default class AddPet extends Component {
    constructor(props) {
        super(props);

        const currentUser = getCurrentUserId();
        this.state = {
            name: '',
            breed: '',
            age: 0,
            image: '',
            species: 'dog',
            owner: currentUser
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        addPet(this.state).then(() => {
            this.props.history.push('/pets');
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
                        <h3>Add Pet</h3>

                        <div className="form-group">
                            <label>Name</label>
                            <input onChange={event => this.handleChange(event, 'name')} type="text" className="form-control" placeholder="Enter name" />
                        </div>

                        <div className="form-group">
                            <label>Breed</label>
                            <input onChange={event => this.handleChange(event, 'breed')} type="text" className="form-control" placeholder="Enter breed" />
                        </div>

                        <div className="form-group">
                            <label>Age</label>
                            <input onChange={event => this.handleChange(event, 'age')} type="number" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label>Species: 
                                    <select className="form-control" value={this.state.species} onChange={event => this.handleChange(event, 'species')}>
                                    <option className="form-control" value="cat">Cat</option>
                                    <option className="form-control" value="dog">Dog</option>
                                </select>
                            </label>
                        </div>

                        <div className="form-group">
                            <label>Image</label>
                            <input onChange={event => this.handleChange(event, 'image')} type="text" className="form-control" placeholder="Enter Image URL" />
                            {this.state.image && <img width="100%" height="100%" src={this.state.image} />}
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}