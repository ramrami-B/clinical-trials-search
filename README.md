# 🔎 한국임상정보 검색창
## 🫧 My Logo
<img src="https://my-web-contents-bucket.s3.ap-northeast-2.amazonaws.com/search_logo.svg" />

~~자세히 보면 원래의 한국임상정보 홈페이지의 로고와 미세하게 다릅니다🤣~~
<br />
<br />
## 🌱 About Assignment
- 원티드 프리온보딩 인턴십 3주차 기업과제
- [한국임상정보](https://clinicaltrialskorea.com/) 사이트의 검색창 부분을 클론 코딩 하였습니다.
- [팀 과제 결과물💃🏻🕺🏻](https://github.com/WantedTeam17/pre-onboarding-12th-3-17)
<br />

## ✍🏻 Features
### ✔️ 로컬 캐싱

> 💡 로컬 캐싱이란? 
> 
> 서버가 아닌 클라이언트(브라우저나 애플리케이션)에 데이터를 저장하여 동일한 요청이 들어왔을  때 한번의 처리가 가능하도록 하는 것(말 그대로 로컬에 캐싱하는 것)
#### 구현 방법 
- 브라우저의 localstorage에 검색 정보(key: 검색어, value: 검색 결과)를 저장함
   - `LocalCache` 클래스에서 로컬 스토리지(local storage)를 관리(get, save)
   - 클래스의 constructor로 현재 시간과 유효 시간을 가지고 있어 데이터 저장할 때 함께 저장, 데이터를 가져올 때 유효 기간이 지난 데이터는 삭제하도록 함(삭제 후 새로운 API 호출)

```typescript
// LocalCache.ts
class LocalCache {
  #expireTime;
  #now;

  constructor() {
    this.#now = new Date().getTime();
    this.#expireTime = EXPIRE_TIME;
  }

  get(key: string) {
    const value = localStorage.getItem(key);
    const item = value ? JSON.parse(value) : null;

    if (item && this.#now > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    return item ? item.value : null;
  }

  set(key: string, value: object) {
    const item = {
      value: value,
      expiry: this.#now + this.#expireTime,
    };

    localStorage.setItem(key, JSON.stringify(item));
  }
}

export const localCache = new LocalCache();

```

### ✔️ API 호출 최적화

#### 구현 방법
- Debounce를 통해 input 값이 바뀔 때마다 API를 호출하지 않고, 사용자가 일정 시간동안 검색어를 입력한 후에 API를 호출하도록 함
  - `useDebounce` 커스텀 훅으로 구현
  
```typescript
// useDebounce.ts
const useDebounce = (value: string, delay: number) => {
  const [debounceValue, setDebounceValue] = useState<string>(value);

   // value(검색어 입력값)가 바뀔 때마다 파라미터로 넘어온 delay 시간만큼 기다리기
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

   // 생략
};

export default useDebounce;

```

- Local Caching을 통해 일정 시간내에 동일한 API 호출은 하지 않도록 함

```typescript
// useDebounce.ts
const useDebounce = (value: string, delay: number) => {
  const [debounceValue, setDebounceValue] = useState<string>(value);
  const [dataList, setDataList] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

   // 생략

   // cache에 디바운싱이 적용된 검색어 정보가 있으면 불러오기
   // 없으면 API 호출
   useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      let tempDataList = localCache.get(debounceValue);

      if (!tempDataList && debounceValue) {
        tempDataList = await Axios.search(debounceValue);
        localCache.set(debounceValue, tempDataList);
      }

      setIsLoading(false);
      setDataList(tempDataList);
    };

    fetchData();
  }, [debounceValue]);

  return { dataList, isLoading };
```

#### API 최적화 적용🙆🏻‍♀️
<img src="https://my-web-contents-bucket.s3.ap-northeast-2.amazonaws.com/api-optimize.gif" />

#### API 최적화 적용🙅🏻‍♀️
<img src="https://my-web-contents-bucket.s3.ap-northeast-2.amazonaws.com/notopt.gif" />
 


#### ✔️ 키보드 접근성 구현
- `Up`, `Down` 키를 통해 검색 결과에서 위아래 이동 가능

- 원하는 검색 결과에서 `Enter` 키를 누르면 자동 입력
  - `processKeyboard` 함수에서 모든 키 이벤트 관리

```typescript
const processKeyboard = (
  target: string,
  focusIdx: number,
  setFocusIdx: any,
  setValue: any,
  terms: DataType[]
) => {
  if (target && target === "ArrowDown") {
    setFocusIdx(focusIdx + 1);
  }
  if (target && target === "ArrowUp") {
    setFocusIdx(focusIdx - 1);
  }
  if (target && target === "Enter") {
    focusIdx > 0 && terms && setValue(terms[focusIdx].sickNm);
    setFocusIdx(-1);
  }
};

export default processKeyboard;
```

<br />

## 🔗 Deploy Link
http://clinicaltrialskoreasearch.s3-website.ap-northeast-2.amazonaws.com/

<br />

## 🛫 Start the Project
```
git clone https://github.com/ramrami-B/clinicaltrialskoreasearch.git
cd clinicaltrialskoreasearch
npm install
npm rum start
```

⚠️ 애플리케이션을 시작하기 위해서 `node v18`이 필요합니다.

<br />

## ⚒️ Teck Stack
- core: `typescript`
- style: `styled-components`
- api: `axios`
- 배포 및 CI/CD: `aws s3` / `GitHub Actions`
- react-router-dom v6.xx
- node v18.xx

<br />

## 🗺️ UML (Sequence Diagram)
<img src="https://my-web-contents-bucket.s3.ap-northeast-2.amazonaws.com/sequence.drawio.png">

<br />

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
