import React from 'react';
import { SearchBar } from '../../elements/SearchBar';
import * as S from './HeaderStyle';

const Header = () => {
  return (
    <S.Container>
      <S.Logo>Astronomy Pictures of the Day</S.Logo>
      <SearchBar />
    </S.Container>
  );
};

export default Header;
