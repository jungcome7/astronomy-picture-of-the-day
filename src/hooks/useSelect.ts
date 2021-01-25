import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  finishLoadApods,
  getApodByYear,
  removeApodList,
  setPage,
  setYear,
} from '../redux/apod';

// 훅으로 꼭 만들 필요가 있을까?
// 꼭 필요한 경우에 훅을 만들어서 쓰자
function useSelect() {
  const dispatch = useDispatch();

  const onSetYear = useCallback(
    (e) => {
      const year = Number(e.target.value);
      dispatch(removeApodList());
      dispatch(setPage(1));
      dispatch(finishLoadApods(false));
      dispatch(setYear(year));
      dispatch(getApodByYear(year));
    },
    [dispatch],
  );

  return { onSetYear };
}

export default useSelect;
