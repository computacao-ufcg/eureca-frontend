import axios from 'axios';

const api = axios.create({
  baseURL: 'http://150.165.15.71:5000/',
  // baseURL: 'http://localhost:5000/',
});

export default api;