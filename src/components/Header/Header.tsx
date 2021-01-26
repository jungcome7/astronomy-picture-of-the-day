import React, { useCallback } from 'react';
import { SearchBar } from '../../elements/SearchBar';
import { DatePicker } from '../../elements/DatePicker';
import * as S from './HeaderStyle';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { requestGetApodByYear } from '../../redux/apod';

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
  const dispatch = useDispatch();

  const onSetYear = useCallback(
    (e) => {
      const year = Number(e.target.value);
      dispatch(requestGetApodByYear(year));
    },
    [dispatch],
  );

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
      {isDatePicker && <DatePicker onSetYear={onSetYear} />}
    </S.Container>
  );
}

export default Header;
