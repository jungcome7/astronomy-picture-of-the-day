import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux';
import {
  finishLoadApods,
  getApodByDate,
  getApodByPeriod,
  initializeSelectedApod,
  setPage,
} from '../redux/apod';
import { getPeriod } from '../utils/getPeriod';

const useApod = () => {
  const apodList = useSelector((state: RootState) => state.apod.apodList);
  const page = useSelector((state: RootState) => state.apod.page);
  const year = useSelector((state: RootState) => state.apod.year);
  const apodSelected = useSelector(
    (state: RootState) => state.apod.apodSelected,
  );
  const dispatch = useDispatch();

  const getApodSelected = useCallback(
    (date) => {
      dispatch(getApodByDate(date));
    },
    [dispatch],
  );

  const removeSelectedApod = useCallback(() => {
    dispatch(initializeSelectedApod());
  }, [dispatch]);

  const loadApods = useCallback(() => {
    dispatch(setPage(page + 1));

    // eslint-disable-next-line prefer-const
    let { startDate, endDate } = getPeriod(year, page + 1);

    if (new Date(endDate).getDate() >= new Date().getDate()) {
      console.log('걸림');
      endDate = new Date().toISOString().split('T')[0];
      console.log('새로운 날짜:', endDate);
      dispatch(finishLoadApods());
    }

    dispatch(getApodByPeriod({ startDate, endDate }));
  }, [dispatch, page, year]);

  return {
    apodList,
    apodSelected,
    getApodSelected,
    removeSelectedApod,
    loadApods,
  };
};

export default useApod;
