import React from 'react';
import * as S from './ApodPageStyle';
import { Header } from '../../elements/Header';
import { ApodDetail } from '../../components/ApodDetail';

const ApodPage = ({ match }: any) => {
  return (
    <S.Container>
      <Header isSearchBar={false} isDatePicker={false} />
      <ApodDetail date={match.params.apod} />
    </S.Container>
  );
};

export default ApodPage;
