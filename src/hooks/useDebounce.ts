import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeSearchInput } from '../modules/searchInput';

const useDebounce = (delay = 300) => {
  const dispatch = useDispatch();
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(changeSearchInput(debouncedValue));
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [debouncedValue]);

  return { debouncedValue, setDebouncedValue };
};

export default useDebounce;
