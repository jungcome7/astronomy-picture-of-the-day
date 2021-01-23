import React from 'react';
import * as S from './ApodDetailStyle';
import { Header } from '../../elements/Header';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

const ApodDetail = () => {
  const apodSelected = useSelector(
    (state: RootState) => state.apod.apodSelected,
  );
  console.log(apodSelected);
  return (
    <S.Container>
      <Header isSearchBar={false} isDatePicker={false} />
    </S.Container>
  );
};

export default ApodDetail;
