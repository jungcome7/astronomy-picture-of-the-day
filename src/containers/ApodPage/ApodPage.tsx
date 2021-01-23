import React from 'react';
import * as S from './ApodPageStyle';
import { Header } from '../../elements/Header';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { ApodDetail } from '../../components/ApodDetail';

const ApodPage = () => {
  const apodSelected = useSelector(
    (state: RootState) => state.apod.apodSelected,
  );

  return (
    <S.Container>
      <Header isSearchBar={false} isDatePicker={false} />
      {apodSelected && <ApodDetail apodSelected={apodSelected} />}
    </S.Container>
  );
};

export default ApodPage;
