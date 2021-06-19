
#  📔 Book Search App 

<a href="http://book.jacobko.info/" target="_blank">Live Demo</a>



<img src = "https://github.com/jacobkosmart/12.-June.21_SearchBookApp_VueJS/blob/98fbbde52d92f7ccad9fe2040bd93526cfac6a76/src/assets/Animation1.gif" width ="100%" /> 
<img src = "https://github.com/jacobkosmart/12.-June.21_SearchBookApp_VueJS/blob/98fbbde52d92f7ccad9fe2040bd93526cfac6a76/src/assets/Animation2.gif" width ="100%" />


## 💻 1.프로젝트 소개  

### 📝 사용기술 및 언어    

- Vue.JS
- Vuex
- Vue Router
- SCSS
- BootStrap
- Netlify serverless
- Kakao Open API

### ⏰ 개발 기간  
2021-05-29 ~ 2021-06-12


## 🗒 2.프로젝트 내용

###  주요 기능


- 책 제목을 검색 하여 책 표지, 글쓴이, 출간일, 출판사, 정가, isbn, 자세한 도서정보 링크 페이지를 제공

- 검색은 한번에 최대 50개 도서 까지 가능, 검색 필터는 accuracy (정확도), latest (최신) 순서별로 검색 

- Fully responsive design (디바이스 해상도에 따라 반응형 디자인) 

- 자세한 도서정보 버튼 클릭 시, 외부의 다음 사이트의 북 검색 페이지로 자동 링크 



## 📌 3.주요 코드

### 1.App Structure 

- 이 프로젝트 vue.js v3.0 으로 개발 하였습니다. App structure 는 아래의 그림과 같습니다.


<img src = "https://github.com/jacobkosmart/12.-June.21_SearchBookApp_VueJS/blob/98fbbde52d92f7ccad9fe2040bd93526cfac6a76/src/assets/App%20Structure.jpg" width ="100%" /> 



### 2.Kakao API 비동기 연결 with axios

- `axios.get()` 을 통해서 kakao API 의 정보를 가져옴. Authorization 은 .env 에 api key 를 따로 저장해서 웹 상으로 노출되지 않음

```js
const { kakaoKey } = process.env

function _fetchBook(payload) { // api 정보 가져오는 _fetch 함수 작성
  const { title, type } = payload
  return new Promise((resolve, reject) => {
    axios.get(`https://dapi.kakao.com/v3/search/book?target=title&query=${title}&sort=${type}&size=50`, {
      headers: {
      Authorization: kakaoKey
      }
    })
    .then(res => {
      if (res.data.Error) {
        reject()
      }
      resolve(res)
    })
    .catch(err => {
      reject(err.message)
    })
  })
}
```

### 3. Vue Router 

- 특정 주소와 접근할 페이지 정보를 설정 함

- Hash mode 를 사용하여 모든 URL 을 HASH(#) 형태로, URL 이 변경될때 페이지가 다시 로드 되지 않음

```js
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import About from './About'
import Book from './Book'
import NotFound from './NotFound'


export default createRouter({
  // Hash, history
  // https://google.com/#/search  # 를 사용해서 sub page 를 연결해줌
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  // pages
  routes: [
    {
      path: '/', // 경로를 의미 home directory를 가리침
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/book/:id',
      component: Book
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})
```

### 4. Vuex (store)

- 상태관리 라이브러리로 App 의 모든 component 에 대한 중앙 집중식 저장소 역활을 하여 상태 관리를 함

- Vuex 는 어느 한 곳에 종속되지 않고 중앙에서 관리 되므로 모든 Component 가 읽기 / 쓰기 가 가능함

```js
// index.js in store

import { createStore } from 'vuex'
import book from './book.js'
import about from './about.js'

export default createStore({
  modules: {
    book,
    about
  }
})
```

### 5. Nelify functions (Serverless) 

- Structure

<img src = "https://github.com/jacobkosmart/12.-June.21_SearchBookApp_VueJS/blob/c7813705cce16315f26e3f055db54e5c47a3cb88/src/assets/network%20serverless.jpg" width ="100%" /> 


- 내부적으로 `AWS Lambda` 을 사용하여 serverless 를 사용

```bash
# in netlify.toml

# Netlify Dev
# https://cli.netlify.com/netlify-dev/#netlifytoml-dev-block

# 제품모드
[build]
  command = "npm run build"
  functions = "functions" # Netlify 서버리스 함수가 작선된 디렉토리를 지정합니다.
  publish = "dist" # 프로젝트 빌드 결과의 디렉토리를 지정합니다.


#  개발 모드
[dev]
  framework = "#custom" # 감지할 프로젝트 유형을 지정합니다. 앱 서버 및 `targetPort` 옵션을 실행하는 명령 옵션은
  command = "npm run dev:webpack" # 연결할 프로젝트의 개발 서버를 실행하는 명령 (스크립트)을 지정합니다.
  targetPort = 8079 # 연결할 프로젝트 개발 서버의 포트를 지정합니다.
  port = 8080 # 출력할 netlify 서버의 포트를 지정합니다.
  publish = "dist" # 프로젝트의 정정 콘텐츠 디렉토리를 지정합니다.
  autoLauch = "false" # Netlify 서버가 준비되면 자동으로 브라우저를 오픈할 것인지 지정합니다.
```




## 4. 느낀점

- SPA framwork 중 하나인 vue.js 를 사용하여 페이지 로드 없이 바로 

- 함수가 정리가 되지 않아 나중에 clean code 를 통해 js 파일 refactoring 필요성 있음

- HTML 코드를 주로 JS  에서 innerHTML 을 통해서 작성 하는 것에 대해서 익숙하지가 않아 API 에서 data를 가져 올 경우 많이 사용되기 때문에, 더 많은 연습이 필요 할 거 같음

- 개선 사항:

    - 브라우저 test 시, 아이폰, 아이패드 환경에서 구동이 잘 안되는것 확인됨 (왜 안되는지 추후 개선 예정)

    - 다음 random 이미지 return 시 runtime이 생각보다 오래 걸려서 코드 최적화를 통한 구동 속도 향상 필요


## Reference

- [kakao developers](https://developers.kakao.com/)

- [Vue.js 3.0](https://v3.vuejs.org/)

- [Vuex](https://next.vuex.vuejs.org/)

- [Vue router](https://next.router.vuejs.org/)

- [axios github](https://github.com/axios/axios)





































# Boot strap 설치 vue

npm i bootstrap@next

## Boot Strap btn primary 색 변경 - scss

https://getbootstrap.com/docs/5.0/customize/sass/#variable-defaults

- !defalut 플래그는 SCSS에서 제공하는 기능으로, 새롭게 지정되는 값이 있으면 기존 값을 무시하겠다는 의미를 가집니다. 즉, Bootstrap에서 지정한 '파란색'의 primary 색상을 외부에서 수정할 수 있다는 의미 입니다.

예시)

```scss
// Required
@import "../node_modules/bootstrap/scss/functions";

// Default variable overrides
$body-bg: #000;
$body-color: #111;

// Required
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";
```

- node_modules/bootstrap/scss/_variables.scss 에 가면 기본적으로 setting 되어 있는 color 들을 확인하고 수정 할 수 있습니다.

## Bootstrap 을 사용해서 Navgation 만들기

https://getbootstrap.com/docs/5.0/components/navs-tabs/#pills

router link  만들기

## google font 연결

- Roboto, Poppins
```html
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```



## axios 

- 실제 https 요청을 알릴 수 있는 package



# Vuex 개요

![image](https://user-images.githubusercontent.com/28912774/121275974-c0699b80-c908-11eb-9001-1f98c4848b96.png)


- 부모 component 에서 자식 component 로 데이터를  전달 할때는 : Props 을 사용해서 전달할 수 있습니다

- Provide / inhect 를 통해서 중간 단계를 거치지 않고 바로 하위 단계의 component 에 검색을 할 수 있습니다

- 그런데 위와 같은 방식으로 여러 component 를 거쳐서 데이터를 전송하는 방식이 비효율 적이라, 중앙집중식 상태관리 라이브러리 (Vuex) 를 사용해서 효율적으로 관리 할 수 있습니다 


- 즉, Data 를 중앙집중화 하는 장소를 하나 만들어서 (Store) 거기에 Data 를 저장 하고, 필요에 따라 그 데이터를 연결된 component 에 direct 로 연결해서 프로젝트 내부에 어떠한 곳이라도 한번에 데이터를 전달 할 수 있다는 장점이 있습니다.

https://next.vuex.vuejs.org/

https://vuex.vuejs.org/kr/ 문서 보고 핵심 컨셉 정리 해서 블로그 올리기..


- Store 의 Mutation 을 실행 할때는 .commit() 메소드를, Actions 를 실행 할때는 .dispatch() 메소드를 사용합니다.



## 중복된 isbn  삭제

- lodash 의 uniqBy 사용해서 중복되는 isbn 을 삭제 해줌


## white-space MDN 

- 검색한다음에 



	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

을 세트로 사용해야 텍스트가 넘칠때 ... 처리로 넘겨줌


backdrop-fillter MDN