import axios from 'axios';
import { baseUrl } from '../constants';

const userTokenKey = 'token';
const usernameKey = 'username';
const idKey = 'id';

export function isLoggedIn() {
    return !!localStorage.getItem(userTokenKey);
}

export function getCurrentUserId() {
    return localStorage.getItem(idKey);
}

export function logIn(loginData) {
    return axios.post(`${baseUrl}/auth/login`, loginData)
        .then(function (response) {
            const token = response?.data?.access_token;
            const id = response?.data?._id;
            localStorage.setItem(userTokenKey, token);
            localStorage.setItem(usernameKey, loginData?.username);
            localStorage.setItem(idKey, id);
            return response;
        })
}

export function logOut() {
    localStorage.removeItem(userTokenKey);
    localStorage.removeItem(idKey);
    localStorage.removeItem(usernameKey);
}

export async function getProfile() {
    const username = localStorage.getItem(usernameKey);
    const token = localStorage.getItem(userTokenKey);

    const headers = { Authorization: `Bearer ${token}` };
    const response = await axios.get(`${baseUrl}/profile/${username}`, headers);
    const profile = response?.data;

    return profile;
}
