# 🔎 한국임상정보 검색창
## 🫧 My Logo
<img src="https://my-web-contents-bucket.s3.ap-northeast-2.amazonaws.com/search_logo.svg" />

~~자세히 보면 원래의 한국임상정보 홈페이지의 로고와 미세하게 다릅니다🤣~~

## 🌱 About Assignment
- 원티드 프리온보딩 인턴십 3주차 기업과제
- [한국임상정보](https://clinicaltrialskorea.com/) 사이트의 검색창 부분을 클론 코딩 하였습니다.

## ✍🏻 Features
#### 1. 로컬 캐싱

> 💡 로컬 캐싱이란? 
> 
> 서버가 아닌 클라이언트(브라우저나 애플리케이션)에 데이터를 저장하여 동일한 요청이 들어왔을  때 한번의 처리가 가능하도록 하는 것(말 그대로 로컬에 캐싱하는 것)
   
✔️ 브라우저의 localstorage에 검색 정보(key: 검색어, value: 검색 결과)를 저장함
- `LocalCache` 클래스에서 로컬 스토리지(local storage)를 관리(get, save, getAllItems)
- 클래스의 constructor로 현시각과 데이터 유효시각을 가지고 있어 데이터 저장할 때 함께 저장, 데이터를 가져올 때 유효 기간이 지난 데이터는 삭제하도록 함(삭제 후 새로운 API 호출) 


#### 2. API 호출 최적화

✔️ Debounce를 통해 input 값이 바뀔 때마다 API를 호출하지 않고, 사용자가 일정 시간동안 검색어를 입력한 후에 API를 호출하도록 함
  - `useDebounce` 커스텀 훅으로 구현 

✔️ Local Caching을 통해 일정 시간내에 동일한 API 호출은 하지 않도록 함


#### 3. 키보드 접근성 구현
✔️ `Up`, `Down` 키를 통해 검색 결과에서 위아래 이동 가능

✔️ 원하는 검색 결과에서 `Enter` 키를 누르면 자동 입력
  - `processKeyboard` 함수에서 모든 키 이벤트 관리

## 🔗 Deploy Link
http://clinicaltrialskoreasearch.s3-website.ap-northeast-2.amazonaws.com/

## 🛫 Start the Project

```
git clone https://github.com/ramrami-B/clinicaltrialskoreasearch.git
cd clinicaltrialskoreasearch
npm install
npm rum start
```

⚠️ 애플리케이션을 시작하기 위해서 `node v18`이 필요합니다.


## ⚒️ Teck Stack
- core: `typescript`
- style: `styled-components`
- api: `axios`
- 배포 및 CI/CD: `aws s3` / `GitHub Actions`
- react-router-dom v6.xx
- node v18.xx

## 🗺️ UML (Sequence Diagram)
<img src="https://my-web-contents-bucket.s3.ap-northeast-2.amazonaws.com/sequence.drawio.png">

## 🌲 Folder Structure
```
pubilc/
├── favico.ico
└── index.html
src/
├── api/
│   └── AxiosClient.ts
├── assets/
│   ├── image1.svg
│   ├── image2.svg
│   ├── image3.svg
│   └── logo.svg
├── components/
│   ├── relatedsearch/
│   │   ├── RecentSearches.tsx
│   │   ├── RelatedSearches.tsx
│   │   └── SearchItem.tsx
│   ├── Input.tsx
│   └── SearchBar.tsx
├── constants/
│   ├── @type/
│   │   └── termsType.ts
│   ├── colors.ts
│   ├── number.ts
│   └── url.ts
├── hooks/
│   ├── useDebounce.ts
│   └── useFocus.ts
├── layout/
│   ├── Header.tsx
│   └── PageLayout.tsx
├── pages/
│   └── SearchPage.tsx
└── utils/
    ├── LocalCache.ts
    └── processKeyboard.ts
package-lock.json
package.json
tsconfig.json
webpack.config.js
README.md
.prettierrc.cjs
.eslintrc.cjs
.gitignore
```