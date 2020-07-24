import axios from 'axios';
import { baseUrl } from '../constants';

export function deleteUser(id) {
    return axios.delete(`${baseUrl}/users/${id}`);
}

export async function getAll() {
    const response = await axios.get(`${baseUrl}/users`);
    return response?.data;
}


export async function addUser(data) {
    return axios.post(`${baseUrl}/users`, data);
}
