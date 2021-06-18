
#  📔 Book Search App 


[Demo](http://book.jacobko.info/)


<img src = "https://github.com/jacobkosmart/12.-June.21_SearchBookApp_VueJS/blob/98fbbde52d92f7ccad9fe2040bd93526cfac6a76/src/assets/Animation1.gif" width ="600" /> 
<img src = "https://github.com/jacobkosmart/12.-June.21_SearchBookApp_VueJS/blob/98fbbde52d92f7ccad9fe2040bd93526cfac6a76/src/assets/Animation2.gif" width ="600" />


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

<img src = "https://github.com/jacobkosmart/12.-June.21_SearchBookApp_VueJS/blob/98fbbde52d92f7ccad9fe2040bd93526cfac6a76/src/assets/App%20Structure.jpg" width ="100%" /> 


## 📌 3.주요 코드

### 1. App Structure 

- 이 프로젝트 vue.js v3.0 으로 개발 하였습니다. App structure 는 아래의 그림과 같습니다.



- 비동기 (async, await 을 통해서 getRandomMeal, getMealById, getMEalBySerch) 를 retun 함

```js
async function getRandomMeal() {
  const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const respData = await resp.json();
  const randomMeal = respData.meals[0];

  console.log(randomMeal)

  addMeal(randomMeal, true);
}

async function getMealById(id) {
  const resp = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);

  const respData = await resp.json();

  const meal = respData.meals[0];

  return meal
}

async function getMealBySearch(term) {
  const resp = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term);

  const respData = await resp.json();
  const meals = respData.meals;

  return meals;
}
```

### 2. favorite Meals

- like  버튼을 누르면 favorite 창에 메뉴 추가 하기

```js
function addMealFav(mealData) {

  const favMeal = document.createElement("li");

  favMeal.innerHTML = `
    <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
    <span>${mealData.strMeal}</span>
    <button class= "clear"><i class="fas fa-window-close"></i></button>
  `;

  const btn = favMeal.querySelector('.clear');

  btn.addEventListener('click', () => {
    removeMealLS(mealData.idMeal);

    fetchFavMeals();
  });

  favMeal.addEventListener('click', () => {
    showMealInfo(mealData);
  });

```

### 3. recipe information modal 

- modal 창으로 youtube, ingredients, details 등을 API 로 부터 가져와서 해당 정보를 return

- JS 정규식을 통해서 해당 youtube URL 에서 해당되는 ID 부분만 `match()`를 사용하여 return

```js

function showMealInfo(mealData) {
  // clean it up

  mealInfoEl.innerHTML = '';

  // update the Meal info
  const mealEl = document.createElement('div');

  const ingredients = [];

  // get ingredients and measures
  for(let i=1; i<=20; i++) {
    if(mealData['strIngredient' + i]) {
      ingredients.push(`${mealData['strIngredient' + i]} - ${mealData['strMeasure' + i]}`)
    } else {
      break;
    }
  }

  // JS regular expressions (get ID)
  const youtubeEl = mealData.strYoutube
  const selectURL = youtubeEl.match(/(?<=\=).{1,}/g)

  mealEl.innerHTML = `
    <h1>${mealData.strMeal}</h1>
    <iframe class="video-wrap" width="100%" height="315" src="https://www.youtube.com/embed/${selectURL}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h3>Ingredients: </h3>
    <ul>
      ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
    </ul>
    <p>${mealData.strInstructions}</p>
    <img src="${mealData.strMealThumb}" alt="">
  `

  mealInfoEl.appendChild(mealEl);

  // show the popup
  mealPopup.classList.remove('hidden')
}
```


## 4. 느낀점

- 비동기 관련 외부 API와 연결 관련해서 Json 이라던지, 비동기 관련 학습량 과 에러 코드가 부분이 많아서 어려움을 느낌

- 함수가 정리가 되지 않아 나중에 clean code 를 통해 js 파일 refactoring 필요성 있음

- HTML 코드를 주로 JS  에서 innerHTML 을 통해서 작성 하는 것에 대해서 익숙하지가 않아 API 에서 data를 가져 올 경우 많이 사용되기 때문에, 더 많은 연습이 필요 할 거 같음

- 개선 사항:

    - 브라우저 test 시, 아이폰, 아이패드 환경에서 구동이 잘 안되는것 확인됨 (왜 안되는지 추후 개선 예정)

    - 다음 random 이미지 return 시 runtime이 생각보다 오래 걸려서 코드 최적화를 통한 구동 속도 향상 필요


## Reference

- [Florin Pop](https://www.youtube.com/watch?v=dtKciwk_si4&t=4697s)

- [Design Daily](https://www.uidesigndaily.com/posts/sketch-recipe-app-food-mobile-day-615)

- [Gradient Background colors](https://www.eggradients.com/)

- [The Meal API](https://www.themealdb.com/api.php)

- [font-awesome](https://cdnjs.com/libraries/font-awesome)







































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