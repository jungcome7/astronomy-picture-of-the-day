import api from '../../api/api';

interface Period {
  startDate: string;
  endDate: string;
}

export function getApodByPeriod({ startDate, endDate }: Period) {
  return api.get('', {
    params: { start_date: startDate, end_date: endDate },
  });
}

export function getApodByYear(year: number) {
  return api.get('', {
    params: { start_date: `${year}-01-01`, end_date: `${year}-01-09` },
  });
}
