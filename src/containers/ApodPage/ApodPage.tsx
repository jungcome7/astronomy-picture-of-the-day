import React from 'react';
import * as S from './ApodPageStyle';
import { Header } from '../../elements/Header';
import { ApodDetail } from '../../components/ApodDetail';

const ApodPage = () => {


  return (
    <S.Container>
      <Header isSearchBar={false} isDatePicker={false} />
      {apodSelected && <ApodDetail apodSelected={apodSelected} />}
    </S.Container>
  );
};

export default ApodPage;
