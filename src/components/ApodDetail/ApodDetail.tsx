import React from 'react';
import * as S from './ApodDetailStyle';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { Apod } from '../../types';

type ApodDetailProps = {
  apodSelected: Apod;
};

const ApodDetail = ({ apodSelected }: ApodDetailProps) => {
  const {
    title,
    copyright,
    date,
    explanantion,
    hdurl,
    media_type,
    service_version,
    url,
  } = apodSelected;

  return (
    <S.Container>
      <S.ApodTitle>{title}</S.ApodTitle>
      {media_type === 'video' ? (
        <S.ApodThumbnailVideo src={url} />
      ) : (
        <S.ApodThumbnailImg src={url} />
      )}
      <S.ApodDate>{date}</S.ApodDate>
    </S.Container>
  );
};

export default ApodDetail;
