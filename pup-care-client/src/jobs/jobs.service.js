import axios from 'axios';
import { baseUrl } from '../constants';

export async function loadJobDetails(id) {
    const response = await axios.get(`${baseUrl}/job/${id}`);
    const job = response?.data;

    return job;
}

export async function loadPetJobs(petId) {
    const response = await axios.get(`${baseUrl}/job/pet/${petId}`);
    const jobs = response?.data;

    return jobs;
}

export async function loadJobResults(id) {
    const response = await axios.get(`${baseUrl}/jobResult/job/${id}`);
    const jobResults = response?.data;

    return jobResults;
}

export async function addJob(data) {
    return axios.post(`${baseUrl}/job`, data);
}
