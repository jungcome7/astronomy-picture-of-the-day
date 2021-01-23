import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux';
import { getApod } from '../redux/apod';

const useApodList = () => {
  const apodList = useSelector((state: RootState) => state.apod.apodList);
  const dispatch = useDispatch();

  const getApodByDate = useCallback((date) => {
    dispatch(getApod(date));
  },);

  return { apodList };
};

export default useApodList;
