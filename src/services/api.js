import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5500/',
});

const url = 'http://localhost:5500/'

export {api, url};