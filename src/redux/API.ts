import api from '../api/api';

// start date, end date, date
// 검색 -> english only / query

export const getByPeriod = ({ startDate, endDate }: any) => {
  return api.get('', {
    params: { start_date: startDate, end_date: endDate },
  });
};
