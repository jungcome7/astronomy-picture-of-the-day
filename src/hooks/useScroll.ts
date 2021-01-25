import { useEffect } from 'react';
import { SCROLL_Y_RATIO } from '../constants';

function useScroll(callback: () => void, isLoading?: boolean) {
  // 데이터와 뷰에 관련된 로직이 섞여 있음
  // 컨텍스트를 잘 분리하자.
  // 인피니트 scroll역할만 하는 유틸이었어야 함

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

    if (isLoading) {
      window.removeEventListener('scroll', loadApodsController);
      return;
    }

    return () => {
      window.removeEventListener('scroll', loadApodsController);
    };
  }, [callback]);
}

export default useScroll;
