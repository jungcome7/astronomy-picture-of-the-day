import React, { useEffect } from 'react';
import useApod from '../../hooks/useApod';
import * as S from './ApodDetailStyle';

type ApodDetailProps = {
  date: string;
};

const ApodDetail = ({ date }: ApodDetailProps) => {
  const { getApodSelected, apodSelected } = useApod();

  useEffect(() => {
    getApodSelected(date);
  }, [getApodSelected, date]);

  if (apodSelected) {
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
  }
  return <S.Container />;
};

export default ApodDetail;
