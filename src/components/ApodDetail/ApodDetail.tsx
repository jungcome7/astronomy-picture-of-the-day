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
      explanation,
      hdurl,
      media_type,
      service_version,
      url,
    } = apodSelected;

    return (
      <S.Container>
        <S.Wrapper>
          <S.ApodTitle>{title}</S.ApodTitle>
          <S.LinkToHDImg href={hdurl} target="_blank">
            HD Image
          </S.LinkToHDImg>
          {media_type === 'video' ? (
            <S.ApodVideo src={url} />
          ) : (
            <S.ApodImg src={url} />
          )}
          <S.ApodDate>{date}</S.ApodDate>
          <S.ApodExplanation>{explanation}</S.ApodExplanation>
        </S.Wrapper>
      </S.Container>
    );
  }
  return <S.Container />;
};

export default ApodDetail;
