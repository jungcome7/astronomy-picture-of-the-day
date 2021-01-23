import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';

const useApodList = () => {
  const dispatch = useDispatch();
  const apodList = useSelector((state: RootState) => state.apod.apodList);

  return { apodList };
};

export default useApodList;
