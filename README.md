# astronomy-picture-of-the-day

1. **리덕스 스토어에 꼭 필요한 상태만 저장** -> 스토어에서 관리할 필요가 있는 상태인지 잘 생각해보고  코드를 짭시다.

   1-1. searchInput 같은 데이터를 굳이 리덕스 스토어에 저장할 필요 없자나?😎

   1-2. year, page, finishLoad 등등의 상태도 다시 생각해보자😡

   1-3. 전반적으로 data와 view 로직이 컴포넌트 내에 섞여 있음. data에 접근하는 컴포넌트와 view를 담당하는 컴포넌트를 명확하게 구분하자.😎

2. **액션의 단위를 키워서 특정 동작에 필요한 하나의 액션을 만들자.** (액션의 단위가 너무 작아서 하나의 동작에 여러 액션을 디스패치함 / 작은 단위에서 필요한 액션이 아니라면 굳이 안 만들어도 될듯? )
3. **커스텀 훅 남발** ->  컴포넌트 내에서 리덕스 불러와서 쓰자. (꼭 필요한 경우에 훅을 쓰자.)😎
4. **훅을 사용하는 이유** -> 필요한 내용만 실행하기 위해(functional 컴포넌트의 라이프사이클 메서드 모사 - 라이프사이클 메서드의 역할을 잘 생각해보자)😎
5. 리턴할 때 **useMemo** 사용! 훅의 핵심은 memoization😎
6. **lodash**의 debounce를 사용하여 debounce 구현하자😡
7. apodSelected 같은 상태는 필요시 apodList에서 가져오면 된다. (**key를 url path로 넘기는 날짜로 한다**) -> 굳이 스토어에 저장할 필요 없게 된다.😎
8. typesafe-actions를 쓰지 않고 해봅시다. **reducer는 switch문**으로 작성.😡
9. useScroll -> **infinite-scroll 역할만 하는 유틸**을 만들자. 😎

10. **Api call을 커스텀 훅 안에서 하는 건 좋지 않다** -> 훅 안에서 api call을 할 것이라고 예측하기 어렵기 때문 -> useApod에 있는 api call은 차라리 ApodPage에서 해주자.

11. **컴포넌트는 function 키워드**로 작성하자 ( 익명함수는 디버깅 시 원인을 찾기 어렵다 ) 😎

12. -

    12-1. 초기 데이터 fetching 할 때, App이나 Index보다는 Main 컴포넌트에서 하는 게 낫다😎

    12-2. ApodPage도 마찬가지. 여기서 리덕스와 연결하여 데이터를 받아오자. Api call 액션도 여기서 하자. 하위 컴포넌트(ApodDetail)는 props만 받아서 view를 그리는 역할만 하도록 수정!😎

13. **store에 직접 접근(store.dispatch())하지 맙시다.**😎

14. 컴포넌트와 컨테이너 모두 리덕스에 연결할 수 있다 필요시에
15. oo는 xx에게 종속되기때문에 컴포넌트이ㅎ 
16. 컴포넌트 - 어딘가에 종속되어 있음 -> 거의 프롭을 받아서 사용함 -> 필요에 따라서 리덕스 연결 할 수 있다
17. 엘리먼트 - 어디에나 쓰일 수 있음
18. **프롭 두 번 이상 넘겨주는 거 수정하기**
19. 컨텍스트 API 


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
