import styled from 'styled-components';
import PALETTE from '../../styles/color-variables';

export const Container = styled.div`
  padding: 15px;
  background-color: ${PALETTE.WHITE};
`;
export const ApodThumbnail = styled.img`
  width: 300px;
  height: 300px;
`;
export const ApodTitle = styled.div`
  font-size: 18px;
  margin: 5px 0;
`;

export const ApodDate = styled.div`
  font-size: 14px;
  color: grey;
  margin: 2px 0;
`;
