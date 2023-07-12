# 네이버 쇼핑인사이트 키워드 연령별 트렌드

![image](https://github.com/SAEMMM/TechLabs-AI_coding-test/assets/127721029/7cb63d2e-c761-4e72-a120-1f316fdf6357)


## 🛍 프로젝트 소개
**개인 프로젝트 👩‍💻 FE 신샘** <br />
네이버 쇼핑인사이트 api를 활용하여 쇼핑 카테고리의 연령별 트렌드를 확인할 수 있는 그래프


## 📆 개발 기간
2023년 7월 8일 ~ 7월 12일


## 🛠 기술 스택
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/rechart-000000?style=for-the-badge&logo=rechart&logoColor=white"> <img src="https://img.shields.io/badge/ant design-0170FE?style=for-the-badge&logo=ant design&logoColor=white"> <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/redux saga-999999?style=for-the-badge&logo=redux-saga&logoColor=white"> 


## ⚙ 빌드, 실행 방법
```
yarn build
yarn start
```


## 💻 기능 소개
#### 1️⃣ 데이터 없을 때(초기화면)
![image](https://github.com/SAEMMM/TechLabs-AI_coding-test/assets/127721029/54d13a08-5f37-49b7-aca2-d148b9f47b2c)

#### 2️⃣ 날짜 선택
![image](https://github.com/SAEMMM/TechLabs-AI_coding-test/assets/127721029/e60414ab-a598-453d-b197-a00da376b875)

#### 3️⃣ 카테고리 선택
![cat_id](https://github.com/SAEMMM/TechLabs-AI_coding-test/assets/127721029/2a7ce0ac-2d38-47d0-abc4-7920715733e4) <br />
네이버 쇼핑 -> 카테고리 선택 후 url의 catId

카테고리 종류가 많아서 예시로 <br />
남성(수트/셋업, 상의, 아우터) 3개 <br />
여성(원피스, 상의, 아우터) 3개 <br />
반려동물(강아지/고양이) 1개 = 총 7개의 카테고리 적용
![image](https://github.com/SAEMMM/TechLabs-AI_coding-test/assets/127721029/65d57877-5d9e-44b9-a995-3921ef2a928e)

#### 4️⃣ 필수 입력값 유효성 검사
![image](https://github.com/SAEMMM/TechLabs-AI_coding-test/assets/127721029/dc30cacb-0e6d-43f6-862d-50bc9190ea61)

![image](https://github.com/SAEMMM/TechLabs-AI_coding-test/assets/127721029/7aeb82bd-a90d-4429-b8af-9c67ade079e2)

#### 5️⃣ 새로고침 후 데이터 유지 (redux-persist)
localStorge에 저장
![image](https://github.com/SAEMMM/TechLabs-AI_coding-test/assets/127721029/0fd57a70-502f-4c8e-8fb4-7ec1fbdf1e89)


## ⛔ CORS 이슈
로컬(http)과 쇼핑인사이트 api(https)의 프로토콜이 맞지 않아 CORS 에러 발생
#### 해결 방법
✅ `src/setupProxy.js` 파일 생성 후, 아래 코드 입력
```ts
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/v1/datalab/shopping/category/keyword/age',
    createProxyMiddleware({
      target: process.env.REACT_APP_NAVER_SHOPPING_INSIGHT,
      changeOrigin: true,
    })
  );
};
```
