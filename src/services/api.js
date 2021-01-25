import axios from 'axios';

// Starting points
const EURECA_AS = 'http://localhost:8080/';
const EURECA_BACKEND = 'http://localhost:8081/';

// Default for tests
const api = axios.create({
  // baseURL: 'http://150.165.15.71:5000/',
  // baseURL: 'http://localhost:5000/',
  baseURL: EURECA_BACKEND,
});

// for Eureca Backend
const api_EB = axios.create({
  baseURL: EURECA_BACKEND,
  headers:{
    'Content-type': 'application/json',
  }
});

// for Eureca Authentication Service
const api_EAS = axios.create({
  baseURL: EURECA_AS,
  headers:{
    'Content-type': 'application/json',
  }
});

export default api;
export { api_EB, api_EAS };