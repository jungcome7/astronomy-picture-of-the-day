import React, { useEffect } from 'react';
import useApod from '../../hooks/useApod';
import * as S from './ApodDetailStyle';
import { IconSize } from '@channel.io/design-system';

type ApodDetailProps = {
  date: string;
};

// 상위 컴포넌트에서 데이터를 모두 프롭받아 렌더링만 하면 재사용성 높아짐 (렌더링 로직에만 집중할 수 있음)

function ApodDetail({ date }: ApodDetailProps) {
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
      url,
    } = apodSelected;

    return (
      <S.Container>
        <S.Wrapper>
          <S.ApodDate>{date}</S.ApodDate>
          <S.ApodTitle>{title}</S.ApodTitle>
          {hdurl && (
            <S.LinkToHDImg href={hdurl} target="_blank">
              HD
              <S.Icon name="in" size={IconSize.S} />
            </S.LinkToHDImg>
          )}
          {media_type === 'video' ? (
            <S.ApodVideo src={url} />
          ) : (
            <S.ApodImg src={url} />
          )}
          {copyright && <S.ApodCopyright>©{copyright}</S.ApodCopyright>}
          <S.ApodExplanation>{explanation}</S.ApodExplanation>
        </S.Wrapper>
      </S.Container>
    );
  }
  return (
    <S.Container>
      <S.Wrapper>
        <S.LoadingIcon name="rotate" size={IconSize.L} />
      </S.Wrapper>
    </S.Container>
  );
}

export default ApodDetail;
