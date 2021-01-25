import styled from 'styled-components';
import PALETTE from '../../styles/color-variables';

export const Container = styled.div`
  margin: 20px;
`;

export const Select = styled.select`
  cursor: pointer;
  width: 100px;
  height: 30px;
  border: 1px solid ${PALETTE.GRAY[3]};
  border-radius: 5px;
  color: ${PALETTE.GRAY[5]};
`;

export const Option = styled.option``;
