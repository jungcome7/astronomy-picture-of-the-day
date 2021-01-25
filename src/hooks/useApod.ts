import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux';
import {
  getApodByDate,
  getApodByPeriod,
} from '../redux/apod';
import { getPeriod } from '../utils/getPeriod';

function useApod() {
  const apodList = useSelector((state: RootState) => state.apod.apodList);
  const page = useSelector((state: RootState) => state.apod.page);
  const year = useSelector((state: RootState) => state.apod.year);
  const dispatch = useDispatch();

  // api call을 훅 안에서 하는 건 별로 좋지 않음 ( -> ApodPage)

  const getApodSelected = useCallback(
    (date) => {
      dispatch(getApodByDate(date));
    },
    [dispatch],
  );

  const loadApods = useCallback(() => {
    // eslint-disable-next-line prefer-const
    let { startDate, endDate } = getPeriod(year, page + 1);

    const now = new Date();

    if (
      year === now.getFullYear() &&
      new Date(endDate).getDate() >= now.getDate()
    ) {
      endDate = new Date().toISOString().split('T')[0];
    }

    dispatch(getApodByPeriod({ startDate, endDate }));
  }, [dispatch, year, page]);

  return {
    apodList,
    getApodSelected,
    loadApods,
  };
}

export default useApod;
