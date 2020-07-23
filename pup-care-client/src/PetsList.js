import React from "react";
import axios from 'axios';
import { baseUrl } from "./constants";

export default class PetList extends React.Component {
  state = {
    pets: []
  }

  componentDidMount() {
    axios.get(`${baseUrl}/pets`)
      .then(res => {
        const pets = res.data;
        this.setState({ pets });
      })
  }

  render() {
    return (
      <ul>
        { this.state.pets.map(pet => <li>{pet.name}</li>)}
      </ul>
    )
  }
}
