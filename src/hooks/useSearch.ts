// import { useCallback, useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../redux';
// import { changeInput, removeInput } from '../redux/search';
// import { DEFAULT_DEBOUNCE_TIME } from '../constants';

// function useSearch() {
//   const dispatch = useDispatch();
//   // searchInput 등등 굳이 리덕스 스토어에 저장할 필요 없자나?
//   // 스토어에 어떤 데이터를 관리할 지 잘 결정해야함.
//   // redux 스토어 : 꼭 필요한 데이터만 -> 구독하는 모든 컴포넌트에 영향
//   const searchInput = useSelector((state: RootState) => state.search.input);

//   const [inputValue, setInputValue] = useState<string>('');

//   // 반만 훅
//   // 훅을 사용하는 이유 : 1.functional 컴포넌트에서 라이프사이클을 모사함.
//   // 2.재사용. 3.필요한 내용만 실행하기 위해
//   // 리턴할 때 useMemo 사용! 훅의 핵심은 memoization

//   // lodash debounce 이용!
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       dispatch(changeInput(inputValue));
//     }, DEFAULT_DEBOUNCE_TIME);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [inputValue]);

//   const onChange = useCallback(
//     (e: any) => {
//       setInputValue(e.target.value);
//     },
//     [dispatch],
//   );

//   const onRemove = useCallback(() => {
//     setInputValue('');
//     dispatch(removeInput());
//   }, [dispatch]);

//   return { inputValue, searchInput, onChange, onRemove };
// }

// export default useSearch;
