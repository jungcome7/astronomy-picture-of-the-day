import React, { useCallback } from 'react';
import { SearchBar } from '../../elements/SearchBar';
import { DatePicker } from '../../elements/DatePicker';
import * as S from './HeaderStyle';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  finishLoadApods,
  getApodByYear,
  removeApodList,
  setPage,
  setYear,
} from '../../redux/apod';

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
      dispatch(removeApodList());
      dispatch(setPage(1));
      dispatch(finishLoadApods(false));
      dispatch(setYear(year));
      dispatch(getApodByYear(year));
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