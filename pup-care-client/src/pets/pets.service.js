import axios from 'axios';
import { baseUrl } from '../constants';

export async function loadPetDetails(id) {
    const response = await axios.get(`${baseUrl}/pets/${id}`);
    const pet = response?.data;

    return pet;
}

export function addPet(data) {
    return axios.post(`${baseUrl}/pets`, data);
}
