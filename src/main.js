import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import store from './Store/index.js'
import loadImage from './plugins/loadImage.js'

createApp(App)
  .use(router) // $route, $router 로 사용되는것
  .use(store) // $store 로 사용되는것
  .use(loadImage) // $loadImage 로 사용됨 -> 플러그인으로 만들어서 전체 프로젝트에 사용할 수 있음
  .mount('#app')