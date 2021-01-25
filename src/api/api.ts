import axios from 'axios';

const URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'O5zaBK5eqI3ub8SmVdlb4JdGcewih1y5MiQzt2pD';
const URLWithAPIKey = `${URL}?api_key=${API_KEY}`;

const api = axios.create({
  baseURL: URLWithAPIKey,
  headers: { 'Content-Type': 'application/json' },
});

interface Period {
  startDate: string;
  endDate: string;
}

export function getApodByPeriod({ startDate, endDate }: Period) {
  console.log(startDate, endDate);
  return api.get('', {
    params: { start_date: startDate, end_date: endDate },
  });
}
export function getApodByDate(date: string) {
  return api.get('', {
    params: { date },
  });
}

export function getApodByYear(year: number) {
  return api.get('', {
    params: { start_date: `${year}-01-01`, end_date: `${year}-01-09` },
  });
}

export default api;
