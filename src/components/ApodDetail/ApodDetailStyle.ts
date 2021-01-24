import styled from 'styled-components';
import PALETTE from '../../styles/color-variables';

export const Container = styled.div`
  width: 1200px;
  margin: 20px auto;
  padding: 10px;
  background-color: ${PALETTE.WHITE};
  border-radius: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width:100%;
  position:relative;
`;

export const ApodTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin: 14px 0 24px 0;
`;

export const LinkToHDImg = styled.a`
  position: absolute;
  color:blue;
  right:54px;
  top:20px;
  font-weight:bold;
  font-size:20px;
`;

export const ApodImg = styled.img`
`;

export const ApodVideo = styled.iframe`
  width: 300px;
  height: 300px;
  border-radius: 5px;
`;

export const ApodDate = styled.div`
  font-size: 18px;
  color: grey;
  margin:8px;
`;

export const ApodExplanation = styled.p`
  width:100%;
  font-size: 22px;
  padding: 0 60px;
  margin: 10px 0;
  line-height: 30px;
  overflow-wrap: break-word;
`;
