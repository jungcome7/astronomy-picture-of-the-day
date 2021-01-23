import React from 'react';
import * as S from './CardListStyle';
import { Card } from '../../elements/Card';
import useApodList from '../../hooks/useApodList';
import useSearch from '../../hooks/useSearch';

const CardList = () => {
  const { apodList } = useApodList();
  const { searchInput } = useSearch();
  console.log(searchInput);
  return (
    <S.Layout>
      <S.Container>
        {apodList?.map((apod) => (
          <Card key={apod.title} apod={apod} />
        ))}
      </S.Container>
    </S.Layout>
  );
};

export default CardList;
