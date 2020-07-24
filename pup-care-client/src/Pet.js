import React, { Component } from "react";
import { loadPetDetails } from "./pets/pets.service";

export default class Pet extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        const { match: { params } } = this.props;
        const { id } = params;

        const pet = await loadPetDetails(id);
        this.setState({ pet });
    }

    render() {
        const pet = this.state?.pet;

        return pet ? (
        <div className="list-container">
            <div className="card">
                <img className="card-img-top img-thumbnail" src={pet.image} alt="Pet photo" />
                <div className="card-body">
                    <h5 className="card-title">{pet.name}</h5>
                    <p className="card-text">Age: {pet.age}</p>
                    <p className="card-text">Breed: {pet.breed}</p>
                </div>
            </div>
        </div>
        ) : <div><h2>Pet not found!</h2></div>;
    }
}