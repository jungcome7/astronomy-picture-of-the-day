import { useEffect } from 'react';
import { SCROLL_Y_RATIO } from '../constants';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';

const useScroll = (callback: () => void) => {
  const finishLoad = useSelector((state: RootState) => state.apod.finishLoad);

  useEffect(() => {
    if (finishLoad) {
      return;
    }
    const loadApodsController = () => {
      const clientHeight = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (clientHeight > documentHeight * SCROLL_Y_RATIO) {
        callback();
        window.removeEventListener('scroll', loadApodsController);
      }
    };

    window.addEventListener('scroll', loadApodsController);
    return () => {
      window.removeEventListener('scroll', loadApodsController);
    };
  }, [callback, SCROLL_Y_RATIO, finishLoad]);
};

export default useScroll;
