import axios from 'axios';

const EURECA_AS = 'localhost:8080/';
const EURECA_BACKEND = 'localhost:8081/';

const api = axios.create({
  // baseURL: 'http://150.165.15.71:5000/',
  // baseURL: 'http://localhost:5000/',
  baseURL: EURECA_BACKEND,
});

export default api;
export {EURECA_AS};