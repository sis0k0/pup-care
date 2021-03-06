import React from "react";
import { isLoggedIn } from '../auth/authentication';
import { loadOwnerPets } from '../pets/pets.service';
import { Link, withRouter } from "react-router-dom";

class PetList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }

  async componentDidMount() {
    const loggedIn = isLoggedIn();
    if (!loggedIn) {
      this.handleUnauthenticated();
      return;
    }

    await this.loadPets();
  }

  async componentDidUpdate(prevProps) {
    const currentId = this.props?.profile?._id;
    if (!currentId) {
      this.handleUnauthenticated();
    }
    if (currentId === prevProps?.profile?._id) {
      return;
    }

    await this.loadPets();
  }

  handleUnauthenticated() {
    this.props.history.push('/login');
  }

  async loadPets() {
    const userId = this.props?.profile?._id;

    if (!userId) {
      return <h3>No pets to show!</h3>;
    }

    const pets = await loadOwnerPets(userId);
    this.setState({ pets });
  }

  render() {
    return (
      <div className="text-center list-container">
        <h2 className="text-center">Your pets</h2>
        <Link to="/pet-add"><button className="btn btn-primary">Add Pet</button></Link>
        {
          this.state?.pets?.length ?
            <div>
              {this.state.pets.map(pet =>
                <div className="card">
                  <img className="card-img-top" src={pet.image} />
                  <div className="card-body">
                    <h5 className="card-title">{pet.name}</h5>
                    <p className="card-text">Age: {pet.age}</p>
                    <p className="card-text">Breed: {pet.breed}</p>
                    <Link to={'/pet/' + pet._id}>Details</Link>
                  </div>
                </div>
              )}
            </div> :
            <p className="text-center">You don't have any pets!</p>
        }
      </div>
    )
  }
}

export default withRouter(PetList);