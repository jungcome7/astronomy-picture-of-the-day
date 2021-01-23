import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeInput } from '../redux/search';
import { DEFAULT_DEBOUNCE_TIME } from '../constants';

const useDebounce = (delay = DEFAULT_DEBOUNCE_TIME) => {
  const dispatch = useDispatch();
  const [debouncedValue, setDebouncedValue] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(changeInput(debouncedValue));
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [debouncedValue]);

  return { setDebouncedValue };
};

export default useDebounce;
