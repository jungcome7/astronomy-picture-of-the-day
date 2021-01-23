import React from 'react';
import * as S from './CardListStyle';
import { Card } from '../../elements/Card';
import useApodList from '../../hooks/useApodList';

const CardList = () => {
  const { apodList } = useApodList();
  return (
    <S.Layout>
      <S.Container>
        {apodList?.map((apod, idx) => (
          <Card key={idx} apod={apod} />
        ))}
      </S.Container>
    </S.Layout>
  );
};

export default CardList;
