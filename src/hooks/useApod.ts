import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux';
import { getApodByDate, initializeSelectedApod } from '../redux/apod';

const useApod = () => {
  const apodList = useSelector((state: RootState) => state.apod.apodList);
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

  return { apodList, apodSelected, getApodSelected, removeSelectedApod };
};

export default useApod;
