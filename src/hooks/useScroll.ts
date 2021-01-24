import { useEffect } from 'react';

const useScroll = (scrollYRatio: number, callback: () => void) => {
  useEffect(() => {
    const loadApodsController = () => {
      const clientHeight = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (clientHeight > documentHeight * scrollYRatio) {
        callback();
        window.removeEventListener('scroll', loadApodsController);
      }
    };

    window.addEventListener('scroll', loadApodsController);
    return () => {
      window.removeEventListener('scroll', loadApodsController);
    };
  }, [callback, scrollYRatio]);
};

export default useScroll;
