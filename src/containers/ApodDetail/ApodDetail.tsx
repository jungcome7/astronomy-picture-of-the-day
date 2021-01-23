import React from 'react';
import * as S from './ApodDetailStyle';
import { Header } from '../../elements/Header';

const ApodDetail = () => {
  return (
    <S.Container>
      <Header isSearchBar={false} isDatePicker={false} />
      ApodDetail
    </S.Container>
  );
};

export default ApodDetail;