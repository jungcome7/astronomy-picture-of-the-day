import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux';
import { changeInput, removeInput } from '../redux/search';

const useSearch = () => {
  const dispatch = useDispatch();
  const searchInput = useSelector((state: RootState) => state.search.input);

  const onChange = useCallback(
    (e: any) => {
      dispatch(changeInput(e.target.value));
    },
    [dispatch],
  );

  const onRemove = useCallback(() => {
    dispatch(removeInput());
  }, [dispatch]);

  return { searchInput, onChange, onRemove };
};

export default useSearch;
