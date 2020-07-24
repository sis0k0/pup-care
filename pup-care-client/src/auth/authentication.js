import axios from 'axios';
import { baseUrl } from '../constants';

const userStorageKey = 'currentUser';

export function logIn(loginData) {
    return axios.post(`${baseUrl}/auth/login`, loginData)
        .then(function (response) {
            const token = response?.data?.access_token;
            localStorage.setItem(userStorageKey, token);
            return response;
        })
}

export function logOut() {
    localStorage.removeItem(userStorageKey);
}

export async function getProfile(username) {
    const token = localStorage.getItem(userStorageKey);
    const headers = { Authorization: `Bearer ${token}` };
    const response = await axios.get(`${baseUrl}/profile/${username}`, headers);
    return response.data;
}
