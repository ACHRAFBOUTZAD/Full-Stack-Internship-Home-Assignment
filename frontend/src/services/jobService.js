import axios from 'axios';

const API_URL = 'http://localhost:8484/api/jobs'; 
export const getJobs = () => {
  return axios.get(API_URL);
};

export const getJobById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const createJob = (job) => {
  return axios.post(API_URL, job);
};

export const updateJob = (id, job) => {
  return axios.put(`${API_URL}/${id}`, job);
};

export const deleteJob = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
