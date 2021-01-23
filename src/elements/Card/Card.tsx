import React from 'react';
import * as S from './CardStyle';

const Card = () => {
  return (
    <S.Container>
      <S.ApodThumbnail />
      <S.ApodTitle>the magentic galaxy</S.ApodTitle>
      <S.ApodDate> 2020-03-11</S.ApodDate>
    </S.Container>
  );
};

export default Card;
