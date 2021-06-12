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