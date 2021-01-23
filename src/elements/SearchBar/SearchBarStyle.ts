import styled from 'styled-components';
import PALETTE from '../../styles/color-variables';

export const Container = styled.div`
  width: 400px;
  background-color: ${PALETTE.GRAY[0]};
  padding: 10px 15px;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SearchInputForm = styled.input`
  font-size: 16px;
`;
