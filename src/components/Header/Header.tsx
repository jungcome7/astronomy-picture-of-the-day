import React from 'react';
import { SearchBar } from '../../elements/SearchBar';
import { DatePicker } from '../../elements/DatePicker';
import * as S from './HeaderStyle';

const Header = () => {
  return (
    <S.Container>
      <S.Logo>Astronomy Pictures of the Day</S.Logo>
      <SearchBar />
      <DatePicker />
    </S.Container>
  );
};

export default Header;
