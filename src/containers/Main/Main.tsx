import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { Header } from '../../components/Header';
import { CardList } from '../../components/CardList';
import * as S from './MainStyle';
import { useDispatch, useSelector } from 'react-redux';
import { THIS_YEAR } from '../../constants';
import { requestGetApodByYear, requestGetApodByPeriod } from '../../redux/apod';
import useScroll from '../../hooks/useScroll';
import { RootState } from '../../redux';
import { getPeriod } from '../../utils/getPeriod';

// function 키워드로 작성 (익명함수 x - 디버깅시 원인 찾기 어려움)
function Main() {
  const apodList = useSelector((state: RootState) => state.apod.apodList);
  const page = useSelector((state: RootState) => state.apod.page);
  const year = useSelector((state: RootState) => state.apod.year);

  const loading = useSelector(
    (state: RootState) => state.loading['apod/GET_APOD_BY_PERIOD'],
  );

  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState<string>('');

  const loadApods = useCallback(() => {
    // eslint-disable-next-line prefer-const
    let { startDate, endDate } = getPeriod(year, page + 1);
    const now = new Date();
    if (
      year === now.getFullYear() &&
      new Date(endDate).getDate() >= now.getDate()
    ) {
      endDate = new Date().toISOString().split('T')[0];
    }
    dispatch(requestGetApodByPeriod({ startDate, endDate }));
  }, [dispatch, year, page]);

  useScroll(loadApods, loading);

  // desk HOC/initializer 참고
  // 초기 데이터 fetching 여기서

  useEffect(() => {
    if (!apodList.length) {
      dispatch(requestGetApodByYear(THIS_YEAR));
    }
  }, []);

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
