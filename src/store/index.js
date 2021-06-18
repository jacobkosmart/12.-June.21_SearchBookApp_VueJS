import { createStore } from 'vuex'
import book from './book.js'
import about from './about.js'

export default createStore({
  modules: {
    book,
    about
  }
})