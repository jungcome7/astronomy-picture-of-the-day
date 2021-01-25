import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { Header } from '../../components/Header';
import { CardList } from '../../components/CardList';
import * as S from './MainStyle';
import useApod from '../../hooks/useApod';
import { useDispatch, useSelector } from 'react-redux';
import { THIS_YEAR } from '../../constants';
import {
  finishLoadApods,
  getApodByYear,
  removeApodList,
  setPage,
  setYear,
} from '../../redux/apod';
import useScroll from '../../hooks/useScroll';
import { RootState } from '../../redux';

// function 키워드로 작성 (익명함수 x - 디버깅시 원인 찾기 어려움)
function Main() {
  const loading = useSelector(
    (state: RootState) => state.loading['apod/GET_APOD_BY_PERIOD'],
  );
  const { loadApods, apodList } = useApod();
  const [searchInput, setSearchInput] = useState<string>('');
  const dispatch = useDispatch();

  useScroll(loadApods, loading);

  useEffect(() => {
    if (!apodList.length) {
      dispatch(getApodByYear(THIS_YEAR));
    }
  }, []);

  // desk HOC/initializer 참고
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
        onSetYear={onSetYear}
        searchInput={searchInput}
      />
      <CardList filteredApodList={filteredApodList} />
    </S.Container>
  );
}

export default Main;
