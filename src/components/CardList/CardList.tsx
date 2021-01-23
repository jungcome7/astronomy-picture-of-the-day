import React from 'react';
import * as S from './CardListStyle';
import { Card } from '../../elements/Card';
import useApodList from '../../hooks/useApodList';

const CardList = () => {
  const { apodList } = useApodList();
  return (
    <S.Container>
      {apodList?.map((apod, idx) => (
        <Card key={idx} apod={apod} />
      ))}
    </S.Container>
  );
};

export default CardList;