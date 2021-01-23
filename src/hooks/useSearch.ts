import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux';
import { changeInput, removeInput } from '../redux/search';
import { DEFAULT_DEBOUNCE_TIME } from '../constants';

const useSearch = () => {
  const dispatch = useDispatch();
  const searchInput = useSelector((state: RootState) => state.search.input);

  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(changeInput(inputValue));
    }, DEFAULT_DEBOUNCE_TIME);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  const onChange = useCallback(
    (e: any) => {
      setInputValue(e.target.value);
    },
    [dispatch],
  );

  const onRemove = useCallback(() => {
    setInputValue('');
    dispatch(removeInput());
  }, [dispatch]);

  return { inputValue, searchInput, onChange, onRemove };
};

export default useSearch;
