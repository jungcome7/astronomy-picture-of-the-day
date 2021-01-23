import React from 'react';
import * as S from './SearchBarStyle';
import useSearch from '../../hooks/useSearch';
import { IconSize } from '@channel.io/design-system';
import PALETTE from '../../styles/color-variables';

const SearchBar = () => {
  const { searchInput, onChange, onRemove } = useSearch();

  return (
    <S.Container>
      <S.SearchInputForm
        placeholder="Search"
        value={searchInput}
        onChange={onChange}
      />
      {searchInput && (
        <S.Icon name="cancel" size={IconSize.S} onClick={onRemove} />
      )}
    </S.Container>
  );
};

export default SearchBar;
