import React, { useEffect } from 'react';
import { Header } from '../../elements/Header';
import { CardList } from '../../components/CardList';
import * as S from './MainStyle';
import useApod from '../../hooks/useApod';

// function 키워드로 작성 (익명함수 x - 디버깅시 원인 찾기 어려움)
const Main = () => {
  const { apodSelected, removeSelectedApod } = useApod();

  useEffect(() => {
    if (apodSelected) {
      removeSelectedApod();
    }
  }, []);
  // des HOC/initializer 참고
  // 초기 데이터 fetching 여기서
  return (
    <S.Container>
      <Header />
      <CardList />
    </S.Container>
  );
};

export default Main;
