import React, { useCallback } from 'react';
import * as S from './CardStyle';
import { Apod } from '../../types';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useApod from '../../hooks/useApod';

type CardProps = {
  key: string;
  apod: Apod;
};

const Card = ({ apod }: CardProps) => {
  const { title, url, date, media_type } = apod;
  const history = useHistory();
  const dispatch = useDispatch();
  const { getApodSelected, apodSelected } = useApod();

  const goToApodDetail = useCallback(() => {
    history.push(`/apod/${date}`);
    getApodSelected(date);
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
};

export default Card;
