import axios from 'axios';

const URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'O5zaBK5eqI3ub8SmVdlb4JdGcewih1y5MiQzt2pD';
const URLWithAPIKey = `${URL}?api_key=${API_KEY}`;

const api = axios.create({
  baseURL: URLWithAPIKey,
  headers: { 'Content-Type': 'application/json' },
});

export default api;
