import React, { useMemo } from 'react';
import * as S from './ApodPageStyle';
import { Header } from '../../components/Header';
import { ApodDetail } from '../../components/ApodDetail';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { Apod } from '../../types/apod';

function ApodPage({ match }: any) {
  // useSelector로 겟한다음 ApodDetail에 프롭스로 넘기고 받아서 렌더링만 하는 거
  // 리덕스 연결
  // api call 액션을 여기서 디스패치

  const apodList = useSelector((state: RootState) => state.apod.apodList);

  // lint deps 체크 설정 켜기
  const apodDetail = useMemo(() => apodList.find((apod: Apod) => apod.date === match.params.apod), [apodList, match]);
  return (
    <S.Container>
      <Header isSearchBar={false} isDatePicker={false} />
      <ApodDetail apodDetail={apodDetail} />
    </S.Container>
  );
}

export default ApodPage;
