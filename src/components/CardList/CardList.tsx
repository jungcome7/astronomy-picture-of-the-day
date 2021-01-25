import React from 'react';
import * as S from './CardListStyle';
import { Card } from '../../elements/Card';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { IconSize } from '@channel.io/design-system';
import useApod from '../../hooks/useApod';
import _ from 'lodash';
import { Apod } from '../../types';

interface CardListProps {
  filteredApodList: Apod[];
}

function CardList({ filteredApodList }: CardListProps) {
  const { loadApods, apodList } = useApod();


  const initialLoading = useSelector(
    (state: RootState) => state.loading['apod/GET_APOD_BY_YEAR'],
  );

  const scrollLoading = useSelector(
    (state: RootState) => state.loading['apod/GET_APOD_BY_PERIOD'],
  );

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
}

export default CardList;
