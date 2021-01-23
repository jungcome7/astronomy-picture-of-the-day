import React from 'react';
import * as S from './ApodPageStyle';
import { Header } from '../../elements/Header';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

const ApodDetail = () => {
  const apodSelected = useSelector(
    (state: RootState) => state.apod.apodSelected,
  );
  console.log(apodSelected);

  // if (apodSelected) {
  //   const {
  //     title,
  //     copyright,
  //     date,
  //     explanantion,
  //     media_type,
  //     url,
  //     hdurl,
  //   } = apodSelected;

  return (
    <S.Container>
      <Header isSearchBar={false} isDatePicker={false} />
      {apodSelected && <ApodDetail />}
    </S.Container>
  );
};

export default ApodDetail;
