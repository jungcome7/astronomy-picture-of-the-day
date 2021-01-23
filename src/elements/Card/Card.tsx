import React from 'react';
import * as S from './CardStyle';
import { Apod } from '../../types';

type CardProps = {
  key: string;
  apod: Apod;
};

const Card = ({ apod }: CardProps) => {
  const { title, url, date, media_type } = apod;

  return (
    <S.Container>
      {media_type === 'video' ? (
        <S.ApodThumbnailVideo src={url} />
      ) : (
        <S.ApodThumbnailImg src={url} />
      )}
      <S.ApodTitle>{title}</S.ApodTitle>
      <S.ApodDate>{date}</S.ApodDate>
    </S.Container>
  );
};

export default Card;
