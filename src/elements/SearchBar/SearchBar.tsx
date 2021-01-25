import React from 'react';
import * as S from './SearchBarStyle';
import { IconSize } from '@channel.io/design-system';

interface SearchBarProps {
  onChange?: (e: any) => void;
  onRemove?: () => void;
  searchInput?: string;
}

function SearchBar({ onChange, onRemove, searchInput }: SearchBarProps) {
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
}

export default SearchBar;
