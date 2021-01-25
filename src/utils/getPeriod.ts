import { APODS_PER_API_CALL } from '../constants';

export type Period = {
  startDate: string;
  endDate: string;
};

export function (year: number, page: number): Period {
  const oneDayDateTime = 1000 * 60 * 60 * 24;
  const Interval = oneDayDateTime * APODS_PER_API_CALL;

  const startDateTime =
    new Date(`${year}-01-01`).getTime() + Interval * (page - 1);
  const endDateTime = startDateTime + Interval - oneDayDateTime;

  const startDate = new Date(startDateTime).toISOString().split('T')[0];
  const endDate = new Date(endDateTime).toISOString().split('T')[0];

  return { startDate, endDate };
};
