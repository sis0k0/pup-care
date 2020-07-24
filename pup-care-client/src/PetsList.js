import React from "react";
import axios from 'axios';
import { baseUrl } from "./constants";
import { Link, withRouter } from "react-router-dom";

class PetList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }

  async componentDidMount() {
    const currentId = this.props?.profile?._id;
    console.log(this.props);
    if (!currentId) {
      this.props.history.push('/login');
      return;
    }

    await this.loadPets();
  }

  async componentDidUpdate(prevProps) {
    const currentId = this.props?.profile?._id;
    if (currentId === prevProps?.profile?._id) {
      return;
    }

    await this.loadPets();
 }

  async loadPets() {
    const userId = this.props?.profile?._id;

    if (!userId) {
      return <h3>No pets to show!</h3>;
    }

    const response = await axios.get(`${baseUrl}/pets/user/${userId}`);
    const pets = response.data || [];
    this.setState({ pets });
  }

  render() {
    return (
      <>
        {
          this.state?.pets?.length ?
          <div className="list-container">
              <h2 className="text-center">Your pets</h2>
              {this.state.pets.map(pet => 
                <div className="card">
                  <img className="card-img-top" src={pet.image} alt="Pet photo" />
                  <div className="card-body">
                    <h5 className="card-title">{pet.name}</h5>
                    <p className="card-text">Age: {pet.age}</p>
                    <p className="card-text">Breed: {pet.breed}</p>
                    <Link to={'/pet/'+pet._id}>Details</Link>
                  </div>
                </div>
              )}
          </div> :
          <h2>You don't have any pets!</h2>
        }
      </>
    )
  }
}

export default withRouter(PetList);