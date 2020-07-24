import axios from 'axios';
import { baseUrl } from '../constants';

const userTokenKey = 'token';
const usernameKey = 'username';

export function logIn(loginData) {
    return axios.post(`${baseUrl}/auth/login`, loginData)
        .then(function (response) {
            const token = response?.data?.access_token;
            localStorage.setItem(userTokenKey, token);
            localStorage.setItem(usernameKey, loginData?.username);
            return response;
        })
}

export function logOut() {
    localStorage.removeItem(userTokenKey);
}

export async function getProfile() {
    const username = localStorage.getItem(usernameKey);
    const token = localStorage.getItem(userTokenKey);

    const headers = { Authorization: `Bearer ${token}` };
    const response = await axios.get(`${baseUrl}/profile/${username}`, headers);
    const profile = response?.data;

    return profile;
}
