import React, { useCallback } from 'react';
import * as S from './CardStyle';
import { Apod } from '../../types/Apod';
import { useHistory } from 'react-router-dom';

type CardProps = {
  key: string;
  apod: Apod;
};

function Card({ apod }: CardProps) {
  const { title, url, date, media_type } = apod;
  const history = useHistory();

  const goToApodDetail = useCallback(() => {
    history.push(`/apod/${date}`);
  }, [apod]);

  return (
    <S.Container onClick={goToApodDetail}>
      {media_type === 'video' ? (
        <S.ApodThumbnailVideo src={url} />
      ) : (
        <S.ApodThumbnailImg src={url} />
      )}
      <S.ApodTitle>{title}</S.ApodTitle>
      <S.ApodDate>{date}</S.ApodDate>
    </S.Container>
  );
}

export default Card;
