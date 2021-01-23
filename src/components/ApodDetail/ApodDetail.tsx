import React, { useEffect } from 'react';
import useApod from '../../hooks/useApod';
import { Apod } from '../../types';
import * as S from './ApodDetailStyle';

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
