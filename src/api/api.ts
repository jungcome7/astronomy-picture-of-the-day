import axios from 'axios';
import { APODS_PER_API_CALL } from '../constants';

const URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'O5zaBK5eqI3ub8SmVdlb4JdGcewih1y5MiQzt2pD';
const URLWithAPIKey = `${URL}?api_key=${API_KEY}`;

const api = axios.create({
  baseURL: URLWithAPIKey,
  headers: { 'Content-Type': 'application/json' },
});

type Period = {
  startDate: string;
  endDate: string;
};

export const getApodByPeriod = ({ startDate, endDate }: Period) => {
  return api.get('', {
    params: { start_date: startDate, end_date: endDate },
  });
};
export const getApodByDate = (date: string) => {
  return api.get('', {
    params: { date },
  });
};

export const getApodByYear = (year: number) => {
  let call = 1;
  let month = 1;
  let date = 1;
  const initialDate = `${year}-${month}-${date}`;

  return api.get('', {
    params: { start_date: initialDate, end_date: },
  });
};

export default api;
