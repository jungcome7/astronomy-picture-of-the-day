import React, { useEffect } from 'react';
import * as S from './ApodPageStyle';
import { Header } from '../../elements/Header';
import { ApodDetail } from '../../components/ApodDetail';
import useApod from '../../hooks/useApod';

const ApodPage = ({ match }: any) => {
  const { getApodSelected, apodSelected } = useApod();

  // useEffect(() => {
  //   getApodSelected(match.params.date);
  // }, []);

  return (
    <S.Container>
      <Header isSearchBar={false} isDatePicker={false} />
      {apodSelected && <ApodDetail apodSelected={apodSelected} />}
    </S.Container>
  );
};

export default ApodPage;
