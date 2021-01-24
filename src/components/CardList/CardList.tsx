import React from 'react';
import * as S from './CardListStyle';
import { Card } from '../Card';
import useApodList from '../../hooks/useApod';
import useSearch from '../../hooks/useSearch';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

const CardList = () => {
  const { apodList } = useApodList();
  const { searchInput } = useSearch();
  const loading = useSelector((state: RootState) => state.loading);

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
