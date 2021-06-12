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