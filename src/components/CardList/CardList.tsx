import React from 'react';
import * as S from './CardListStyle';
import { Card } from '../Card';
import useApodList from '../../hooks/useApod';
import useSearch from '../../hooks/useSearch';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { IconSize } from '@channel.io/design-system';
import useScroll from '../../hooks/useScroll';
import useApod from '../../hooks/useApod';

const CardList = () => {
  const { apodList } = useApodList();
  const { searchInput } = useSearch();
  const { loadApods } = useApod();

  useScroll(loadApods);

  const initialLoading = useSelector(
    (state: RootState) => state.loading['apod/GET_APOD_BY_YEAR'],
  );

  const scrollLoading = useSelector(
    (state: RootState) => state.loading['apod/GET_APOD_BY_PERIOD'],
  );

  const filteredApodList = searchInput.length
    ? apodList.filter((apod) =>
        apod.title.toLowerCase().includes(searchInput.toLowerCase()),
      )
    : apodList;
  return (
    <>
      <S.Layout>
        {initialLoading && <S.Icon name="rotate" size={IconSize.L} />}
        <S.Container>
          {apodList &&
            filteredApodList.map((apod) => (
              <Card key={apod.date} apod={apod} />
            ))}
        </S.Container>
        {scrollLoading && (
          <S.IconWrapper>
            <S.Icon name="rotate" size={IconSize.L} />
          </S.IconWrapper>
        )}
      </S.Layout>
    </>
  );
};

export default CardList;
