import React, { useEffect } from 'react';
import { Header } from '../../elements/Header';
import { CardList } from '../../components/CardList';
import * as S from './MainStyle';
import useApod from '../../hooks/useApod';

const Main = () => {
  const { apodSelected, removeSelectedApod } = useApod();

  useEffect(() => {
    if (apodSelected) {
      removeSelectedApod();
    }
  }, []);

  return (
    <S.Container>
      <Header />
      <CardList />
    </S.Container>
  );
};

export default Main;
