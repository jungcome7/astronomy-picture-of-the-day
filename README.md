# astronomy-picture-of-the-day
- 디테일 페이지 레이아웃
- 로딩 아이콘
- date range picker
- 무한 스크롤
- server api
- mysql db

### 설명
매일의 우주 사진
 
<br>
 
### 목표 (중요도 순)
1. 단방향 데이터 흐름과 리덕스 미들웨어 이해
2. redux, redux-saga, reselect 사용
3. redux-saga로 HTTP Request + 적절한 성공/실패 처리 
4. selector로 cache 적용
5. 검색(사진 이름), 필터(년, 월, 일) 기능 구현
6. redux-saga 테스트
<br>

7. formik
8. 사진 북마킹
9. 무한 스크롤
10. debounce, throttle
11. UI/UX
12. backend apis
13. db
14. 배포

<br>
 
### 주요 라이브러리
- react, redux, redux-saga, reselect, immutable, formik, styled-components, redux-saga-test-plan 
<br>
 
### 구조
```
├  root
 ├  public  
 ├  src  
  ├  api # API 기본 세팅만
  ├  components # redux 연결
  ├  constants 
  ├  containers  # routing(page)
  ├  elements # redux 연결 x
  ├  hooks # custom hook
  ├  redux # action, actionType, api, reducer, saga, saga-test, selector
  ├  routes # react-router (트리 구조로 계층화)
  ├  server # express server with mysql
  ├  styles # 글로벌 스타일 및 컬러 변수
  ├  types # 주요 타입 정의
  ├  utils # 유틸 함수와 테스트
```
<br>
 
### API
- Nasa Open APIs - APOD
- Source : https://api.nasa.gov/
- HTTP Requests : GET https://api.nasa.gov/planetary/apod
- Example Query : https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
<br>
 
### 질문거리들
- 목표의 중요도 평가
- 시도해보면 좋을만한 것들
- (추가 예정)
<br>
 
### 참고
- 주요 라우팅(routes)과 연결 → container
- redux 로직과 연결 되어야만 하는 컴포넌트 → component
- redux 로직 연결 없이 (단독으로) prop을 받아서 렌더링만 → element

![image](https://user-images.githubusercontent.com/34447105/105371388-ecc99780-5c47-11eb-8f73-f712ad34e1d7.png)
