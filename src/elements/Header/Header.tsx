import React from 'react';
import { SearchBar } from '../../components/SearchBar';
import { DatePicker } from '../DatePicker';
import * as S from './HeaderStyle';
import { Link } from 'react-router-dom';

type HeaderProps = {
  isLogo?: boolean;
  isSearchBar?: boolean;
  isDatePicker?: boolean;
};

const Header = ({
  isLogo = true,
  isSearchBar = true,
  isDatePicker = true,
}: HeaderProps) => {
  return (
    <S.Container>
      {isLogo && (
        <Link to="/">
          <S.Logo>Astronomy Pictures of the Day</S.Logo>
        </Link>
      )}
      {isSearchBar && <SearchBar />}
      {isDatePicker && <DatePicker />}
    </S.Container>
  );
};

export default Header;
