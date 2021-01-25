import React from 'react';
import { SearchBar } from '../SearchBar';
import { DatePicker } from '../DatePicker';
import * as S from './HeaderStyle';
import { Link } from 'react-router-dom';

export interface HeaderProps {
  onChange?: (e: any) => void;
  onRemove?: () => void;
  searchInput?: string;
  isLogo?: boolean;
  isSearchBar?: boolean;
  isDatePicker?: boolean;
}

function Header({
  onChange,
  onRemove,
  searchInput,
  isLogo = true,
  isSearchBar = true,
  isDatePicker = true,
}: HeaderProps) {
  return (
    <S.Container>
      {isLogo && (
        <Link to="/">
          <S.Logo>Astronomy Pictures of the Day</S.Logo>
        </Link>
      )}
      {isSearchBar && (
        <SearchBar
          onChange={onChange}
          onRemove={onRemove}
          searchInput={searchInput}
        />
      )}
      {isDatePicker && <DatePicker />}
    </S.Container>
  );
}

export default Header;
