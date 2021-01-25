import React from 'react';
import * as S from './ApodPageStyle';
import { Header } from '../../elements/Header';
import { ApodDetail } from '../../components/ApodDetail';

const ApodPage = ({ match }: any) => {
  // useSelector로 겟한다음 ApodDetail에 프롭스로 넘기고 받아서 렌더링만 하는 거
  // 리덕스 연결
  // api call 액션을 여기서 디스패치 
  return (
    <S.Container>
      <Header isSearchBar={false} isDatePicker={false} />
      <ApodDetail date={match.params.apod} />
    </S.Container>
  );
};

export default ApodPage;
