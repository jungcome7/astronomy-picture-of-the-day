import React, { useCallback } from 'react';
import { SearchBar } from '../SearchBar';
import { DatePicker } from '../DatePicker';
import * as S from './HeaderStyle';
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();

  const goToMain = useCallback(() => {
    history.push('/');
  }, []);

  return (
    <S.Container>
      {isLogo && (
        <S.Logo onClick={goToMain}>Astronomy Pictures of the Day</S.Logo>
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
