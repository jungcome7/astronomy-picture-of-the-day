# astronomy-picture-of-the-day

### 설명
 NASA에서 공개하는 매일의 우주 사진 (사진과 제목을 연, 월, 일 별로 보여줌)
 
<br>
 
### 목표 (중요도 순)
1. 단방향 데이터 흐름과 리덕스 미들웨어 이해
2. redux, redux-saga, reselect 사용
3. redux-saga로 HTTP Request + 적절한 성공/실패 처리 
4. selector로 cache 적용
5. 검색(사진 이름), 필터(년, 월, 일) 기능 구현
6. redux-saga 테스트
<br>

7. desk 구조 참고하여 구조 짜보기
8. desk coding convention 참고하여 코딩 스타일 맞춰보기
9. desk commit history 참고하여 commit message 써보기
10. formik
11. 사진 추가/수정/삭제
12. 무한 스크롤
13. debounce, throttle
14. UI/UX
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
  ├  elements # redux 연결 x
  ├  components # redux 연결
  ├  containers  # (optional) routing  
  ├  constants 
  ├  redux # action, actionType, api, reducer, saga, saga-test, selector
  ├  hooks # custom hook
  ├  utils # 유틸 함수와 테스트
```
<br>
 
### API
- Nasa Open APIs - APOD
- Source : https://api.nasa.gov/
- API KEY : O5zaBK5eqI3ub8SmVdlb4JdGcewih1y5MiQzt2pD
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

[폴더 구조 및 내용 설명](https://www.notion.so/channelio/8d1eea36937b4f32a95e3c40789fddfe)  
[desk - Redux](https://www.notion.so/channelio/Redux-ddf9204aca9f4ae7b24bfad04888f8a4)  
![image](https://user-images.githubusercontent.com/34447105/105371388-ecc99780-5c47-11eb-8f73-f712ad34e1d7.png)
