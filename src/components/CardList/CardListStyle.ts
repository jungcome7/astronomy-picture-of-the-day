import styled, { css } from 'styled-components';
import { Icon as CIcon } from '@channel.io/design-system';
import PALETTE from '../../styles/color-variables';

export const Layout = styled.div`
  width: 1100px;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  max-width: 1100px;
  margin: 20px;
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

export const IconWrapper = styled.div`
  width: 1100px;
  height: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(CIcon)`
  position: absolute;
  color: ${PALETTE.GRAY[5]};
  top: 20vh;
  ${loadingAnimation};
`;
