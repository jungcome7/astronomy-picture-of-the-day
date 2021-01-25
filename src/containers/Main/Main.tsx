import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { Header } from '../../components/Header';
import { CardList } from '../../components/CardList';
import * as S from './MainStyle';
import useApod from '../../hooks/useApod';
import { useDispatch } from 'react-redux';
import { THIS_YEAR } from '../../constants';
import { getApodByYear } from '../../redux/apod';

// function 키워드로 작성 (익명함수 x - 디버깅시 원인 찾기 어려움)
function Main() {
  const { apodSelected, removeSelectedApod, loadApods, apodList } = useApod();
  const [searchInput, setSearchInput] = useState<string>('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (apodSelected) {
      removeSelectedApod();
    }

    dispatch(getApodByYear(THIS_YEAR));
  }, []);

  // des HOC/initializer 참고
  // 초기 데이터 fetching 여기서

  const onChange = useCallback(
    (e: any) => {
      setSearchInput(e.target.value);
    },
    [setSearchInput],
  );

  const onRemove = useCallback(() => {
    setSearchInput('');
  }, [setSearchInput]);

  const filteredApodList = useMemo(
    () =>
      searchInput.length
        ? apodList.filter((apod) =>
            apod.title.toLowerCase().includes(searchInput.toLowerCase()),
          )
        : apodList,
    [apodList, searchInput],
  );

  return (
    <S.Container>
      <Header
        onChange={onChange}
        onRemove={onRemove}
        searchInput={searchInput}
      />
      <CardList filteredApodList={filteredApodList} />
    </S.Container>
  );
}

export default Main;
