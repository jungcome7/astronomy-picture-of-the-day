import React from 'react';
import * as S from './CardListStyle';
import { Card } from '../Card';
import useApodList from '../../hooks/useApodList';
import useSearch from '../../hooks/useSearch';

const CardList = () => {
  const { apodList } = useApodList();
  const { searchInput } = useSearch();

  const filteredApodList = searchInput.length
    ? apodList.filter((apod) =>
        apod.title.toLowerCase().includes(searchInput.toLowerCase()),
      )
    : apodList;

  return (
    <S.Layout>
      <S.Container>
        {apodList &&
          filteredApodList.map((apod) => <Card key={apod.date} apod={apod} />)}
      </S.Container>
    </S.Layout>
  );
};

export default CardList;
