import React from 'react';
import * as S from './CardStyle';
import { Apod } from '../../types';

type CardProps = {
  key: number;
  apod: Apod;
};

const Card = ({ apod }: CardProps) => {
  console.log(apod);
  const { title, url, date } = apod;
  return (
    <S.Container>
      <S.ApodThumbnail src={url} />
      <S.ApodTitle>{title}</S.ApodTitle>
      <S.ApodDate>{date}</S.ApodDate>
    </S.Container>
  );
};

export default Card;
