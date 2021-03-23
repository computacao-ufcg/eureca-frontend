import axios from 'axios';

// Starting points
const EURECA_AS = 'http://localhost:8090/';
const EURECA_BACKEND = 'http://localhost:8081/';
const ALUMNI_AS = 'http://localhost:8082';

// Default for tests
const api = axios.create({
  // baseURL: 'http://150.165.15.71:5000/',
  // baseURL: 'http://localhost:5000/',
  baseURL: EURECA_BACKEND,
});

// for Eureca Backend
const api_EB = axios.create({
  baseURL: EURECA_BACKEND,
  headers: {
    'Content-type': 'application/json',
  }
});

// for Eureca Authentication Service
const api_EAS = axios.create({
  baseURL: EURECA_AS,
  headers: {
    'Content-type': 'application/json',
  }
});

// For Alumnus Service API
const api_AS = axios.create({
  baseURL: ALUMNI_AS,
  headers: {
    'Content-type': 'application/json',
  }
});

export default api;
export { api_EB, api_EAS, api_AS };