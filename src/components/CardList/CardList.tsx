import React from 'react';
import * as S from './CardListStyle';
import { Card } from '../../elements/Card';

const CardList = () => {
  return (
    <S.Container>
      <Card />
      <Card />
      <Card />
      <Card />
    </S.Container>
  );
};

export default CardList;
