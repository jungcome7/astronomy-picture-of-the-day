import React from 'react';
import { Header } from '../../components/Header';
import { CardList } from '../../components/CardList';
import * as S from './MainStyle';

const Main = () => {
  return (
    <S.Container>
      <Header />
      <CardList />
    </S.Container>
  );
};

export default Main;
