import styled from 'styled-components';
import PALETTE from '../../styles/color-variables';
import { Icon as CIcon } from '@channel.io/design-system';

export const Container = styled.div`
  width: 400px;
  background-color: ${PALETTE.GRAY[0]};
  padding: 10px 15px;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchInputForm = styled.input`
  font-size: 16px;
  width: 100%;
`;

export const Icon = styled(CIcon)`
  cursor: pointer;
  color: ${PALETTE.GRAY[4]};
`;
