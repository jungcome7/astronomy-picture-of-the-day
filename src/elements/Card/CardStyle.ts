import styled from 'styled-components';
import PALETTE from '../../styles/color-variables';

export const Container = styled.div`
  width: 330px;
  padding: 15px;
  background-color: ${PALETTE.WHITE};
  cursor: pointer;
  border-radius: 5px;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.03);
  }
`;
export const ApodThumbnailImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 5px;
`;

export const ApodThumbnailVideo = styled.iframe`
  width: 300px;
  height: 300px;
  border-radius: 5px;
`;

export const ApodTitle = styled.div`
  font-size: 18px;
  margin: 5px 3px;
`;

export const ApodDate = styled.div`
  font-size: 14px;
  color: grey;
  margin: 2px 3px;
`;
