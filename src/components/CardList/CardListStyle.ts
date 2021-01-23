import styled from 'styled-components';

export const Layout = styled.div`
  width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  max-width: 1100px;
  margin: 20px;
`;
