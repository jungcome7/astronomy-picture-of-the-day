import { useEffect } from 'react';
import { SCROLL_Y_RATIO } from '../constants';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';

const useScroll = (callback: () => void) => {
  const finishLoad = useSelector((state: RootState) => state.apod.finishLoad);
  const scrollLoading = useSelector(
    (state: RootState) => state.loading['apod/GET_APOD_BY_PERIOD'],
  );

  useEffect(() => {
    const loadApodsController = () => {
      const clientHeight = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (clientHeight > documentHeight * SCROLL_Y_RATIO) {
        window.removeEventListener('scroll', loadApodsController);
        callback();
      }
    };

    window.addEventListener('scroll', loadApodsController);

    if (finishLoad) {
      window.removeEventListener('scroll', loadApodsController);
      return;
    }

    if (scrollLoading) {
      window.removeEventListener('scroll', loadApodsController);
      return;
    }

    return () => {
      window.removeEventListener('scroll', loadApodsController);
    };
  }, [callback, SCROLL_Y_RATIO, finishLoad]);
};

export default useScroll;
