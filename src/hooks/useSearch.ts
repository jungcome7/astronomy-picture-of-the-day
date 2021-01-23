import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux';
import { changeInput, removeInput } from '../redux/search';
import { DEFAULT_DEBOUNCE_TIME } from '../constants';

const useSearch = () => {
  const dispatch = useDispatch();
  const searchInput = useSelector((state: RootState) => state.search.input);

  const [debouncedValue, setDebouncedValue] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(changeInput(debouncedValue));
    }, DEFAULT_DEBOUNCE_TIME);

    return () => {
      clearTimeout(timer);
    };
  }, [debouncedValue]);

  const onChange = useCallback(
    (e: any) => {
      setDebouncedValue(e.target.value);
    },
    [dispatch],
  );

  const onRemove = useCallback(() => {
    setDebouncedValue('');
    dispatch(removeInput());
  }, [dispatch]);

  return { searchInput, onChange, onRemove };
};

export default useSearch;
