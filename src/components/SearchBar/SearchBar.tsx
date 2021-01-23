import React from 'react';
import * as S from './SearchBarStyle';
import useSearch from '../../hooks/useSearch';
import { IconSize } from '@channel.io/design-system';

const SearchBar = () => {
  const { inputValue, searchInput, onChange, onRemove } = useSearch();
  return (
    <S.Container>
      <S.SearchInputForm
        placeholder="Search"
        value={inputValue}
        onChange={onChange}
      />
      {searchInput && (
        <S.Icon name="cancel" size={IconSize.S} onClick={onRemove} />
      )}
    </S.Container>
  );
};

export default SearchBar;
