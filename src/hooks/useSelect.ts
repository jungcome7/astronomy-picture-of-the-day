import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getApodByYear, removeApodList, setYear } from '../redux/apod';

const useSelect = () => {
  const dispatch = useDispatch();

  const onSetYear = useCallback(
    (e) => {
      const year = Number(e.target.value);
      dispatch(removeApodList());
      dispatch(setYear(year));
      dispatch(getApodByYear(year));
    },
    [dispatch],
  );

  return { onSetYear };
};

export default useSelect;
