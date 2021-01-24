import styled, { css } from 'styled-components';
import PALETTE from '../../styles/color-variables';
import { Icon as CIcon } from '@channel.io/design-system';

export const Container = styled.div`
  width: 1200px;
  margin: 20px auto;
  padding: 10px;
  background-color: ${PALETTE.WHITE};
  border-radius: 10px;
  min-height: 600px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: relative;
`;


export const ApodTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin: 6px 0 24px 0;
`;

export const ApodDate = styled.div`
  font-size: 18px;
  color: ${PALETTE.GRAY[4]};
  margin: 12px 0 2px 0;
`;

export const LinkToHDImg = styled.a`
  position: absolute;
  right: 54px;
  top: 20px;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${PALETTE.GRAY[5]};
  &:hover {
    color: ${PALETTE.BLACK};
  }
`;

export const Icon = styled(CIcon)``;

export const ApodImg = styled.img``;

export const ApodVideo = styled.iframe`
  width: 1000px;
  height: 600px;
`;

export const ApodCopyright = styled.div`
  color: ${PALETTE.GRAY[4]};
  margin: 8px;
`;

export const ApodExplanation = styled.p`
  width: 100%;
  font-size: 22px;
  padding: 0 60px;
  margin: 10px 0;
  line-height: 34px;
  overflow-wrap: break-word;
`;

const loadingAnimation = css`
  animation: rotateAnimation 1s linear infinite;
  @keyframes rotateAnimation {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;

export const LoadingIcon = styled(CIcon)`
  position: absolute;
  color: ${PALETTE.GRAY[5]};
  top: 30vh;
  ${loadingAnimation};
`;
