import { APODS_PER_API_CALL } from '../constants';

type Period = {
  startDate: string;
  endDate: string;
};

export const getPeriod = (year: number, page: number): Period => {
  const Interval = 1000 * 60 * 60 * 24 * APODS_PER_API_CALL;
  const startDateTime =
    new Date(`${year}-01-01`).getTime() + Interval * (page - 1);
  const endDateTime = startDateTime + Interval;

  const startDate = new Date(startDateTime).toISOString().split('T')[0];
  const endDate = new Date(endDateTime).toISOString().split('T')[0];

  return { startDate, endDate };
};
