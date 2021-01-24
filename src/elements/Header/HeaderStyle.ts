import styled from 'styled-components';
import PALETTE from '../../styles/color-variables';

export const Container = styled.div`
  background-color: ${PALETTE.WHITE};
  height: 60px;
  min-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width:100%;
  z-index: 3;
`;

export const Logo = styled.div`
  margin: 20px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
`;
