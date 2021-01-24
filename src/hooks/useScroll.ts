import { useEffect } from 'react';
import { SCROLL_Y_RATIO } from '../constants';

const useScroll = (callback: () => void) => {
  useEffect(() => {
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
  }, [callback, SCROLL_Y_RATIO]);
};

export default useScroll;
