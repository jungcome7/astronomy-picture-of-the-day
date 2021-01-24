import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux';
import {
  getApodByDate,
  getApodByPeriod,
  initializeSelectedApod,
  setPage,
} from '../redux/apod';
import { getPeriod } from '../utils/timeParser';
import useScroll from './useScroll';

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
      // dispatch(initializeSelectedApod());
      dispatch(getApodByDate(date));
    },
    [dispatch],
  );

  const removeSelectedApod = useCallback(() => {
    dispatch(initializeSelectedApod());
  }, [dispatch]);

  const loadApods = useCallback(() => {
    dispatch(setPage(page + 1));
    dispatch(getApodByPeriod(getPeriod(year, page + 1)));
  }, [dispatch]);

  return { apodList, apodSelected, getApodSelected, removeSelectedApod };
};

export default useApod;
