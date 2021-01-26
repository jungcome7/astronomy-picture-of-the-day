import React from 'react';
import * as S from './ApodDetailStyle';
import { IconSize } from '@channel.io/design-system';
import { Apod } from '../../types/Apod';
interface ApodDetailProps {
  apodDetail?: Apod;
}

// 상위 컴포넌트에서 데이터를 모두 프롭받아 렌더링만 하면 재사용성 높아짐 (렌더링 로직에만 집중할 수 있음)

function ApodDetail({ apodDetail }: ApodDetailProps) {
  //guard
  if(!apodDetail) { return null }

  // useMomo 같은 훅을 만들었다고 치면 위의 조건에 따라 훅이 생성되지 않을 수도 있다. 권장 사항이 아니라서 린트가 에러를 뱉음
  // function ApodDetail({ ... }) {
  //   // hook
  //   const foo = useMemo(...)
  
  //   // guard
  //   if (!apod) { return (<Loading />) }
  
  //   return (
  //     <Wrapper>
  //       ...
  //     </Wrapper>
  //   )
  // }

  //고쳐보기
  if (apodDetail) {
    const {
      title,
      copyright,
      date,
      explanation,
      hdurl,
      media_type,
      url,
    } = apodDetail;

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
