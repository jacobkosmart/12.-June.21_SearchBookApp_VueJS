import axios from 'axios'
import _uniqBy from 'lodash/uniqBy'

const _defaultMessage = 'Search for the book title'

export default {
  // module!
  namespaced: true,
  // data!
  state: () => ({
    books: [],
    message: _defaultMessage,
    loading: false,
    theBook: {},
    date: {},
    isbn: []
  }),
  // computed!
  getters: { // 새로운 데이터를 만들때 사용하는 방식

  },
  // methods!
  mutations: { // 데이터들을 변경 할 수 있음 mutations 안에서만 data 를 변경할 수 있음!!
    updateState(state, payload) {
      // ['movies', 'message', 'loading']
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    },
    resetBooks(state) {
      state.books = []
      state.message = _defaultMessage
      state.loading = false
      
    }
  },
  actions: { // 기본적으로 비동기로 처리가 됨
    async searchBooks({ state, commit }, payload) {
      if (state.loading)  return // 시용자가 동시에 여러번 실행을 방지하기 위해  loading 이 true 가 되면 searchBooks 를 빠져나가게 함
      commit('updateState', { // 메세지 초기화
        message: '',
        loading: true
      })

      try {
        const res = await _fetchBook({
        ...payload,
        page: 1
      })
      console.log(res)
      // const rawIsbn = res.data.documents.isbn
      // const fisrtIsbn = rawIsbn.split(" ")
      // console.log(fisrtIsbn)
      const { documents, meta } = res.data
      const isbn = []
      for (let i = 0; i < documents.length; i++)
        isbn.push(documents[i].isbn)
      console.log(isbn)

      commit('updateState', {
        books: _uniqBy(documents, 'isbn'),
        isbn
      })
      console.log(meta.pageable_count) // 페이지 가능한 숫자
      console.log(typeof meta.pageable_count) // 타입은 number 임
      
      const total = meta.pageable_count
      const pageLength = Math.ceil(total / 10) // 한번에 가져 올 수 있는 page 숫자를 10개로 올림처리
      
      // 페이지 수가 1큰 경우 추가 요청.
      if (pageLength > 1) {
        for (let page = 2; page <= pageLength; page++) {
          if (page > (payload.number / 10)) break
          const res = await _fetchBook({
            ...payload,
            page
          })
          const { documents } = res.data
          commit('updateState', {
            books: [...state.books, ..._uniqBy(documents, 'isbn')]
          })
        }
      }
      } catch (message) {
        commit('updateState', {
          books: [],
          message
        })
      } finally {
        commit('updateState', {
          loading: false
        })
      }
    },
    async searchBookByID({ state, commit }, payload) {
      if (state.loading) return

      commit('updateState', {
        theBook: {},
        loading: true
      })
      try {
        const res = await _fetchBookByID (payload)
        console.log(res.data.documents[0])
        // console.log(res.data.documents[0].datetime)
        const rawDate = new Date(res.data.documents[0].datetime)
        const date = rawDate.getFullYear() + '년 ' + (rawDate.getMonth() + 1) + '월 ' + rawDate.getDate() + '일';
        // console.log(date)
        commit('updateState', {
          theBook: res.data.documents[0],
          date
        })
      } catch (error) {
        commit('updateState', {
          theBook: {}
        })
      } finally {
        commit('updateState', {
          loading: false
        })
      }
    }
  }
}

function _fetchBook(payload) { // api 정보 가져오는 _fetch 함수 작성
  const { title, type } = payload
  return new Promise((resolve, reject) => {
    axios.get(`https://dapi.kakao.com/v3/search/book?target=title&query=${title}&sort=${type}&size=50`, {
      headers: {
      Authorization: "KakaoAK 76173c3153cac16dba5ad5d2bf9af6cc"
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

function _fetchBookByID(payload) { // api 정보 가져오는 _fetch 함수 작성
  const { id } = payload
  return new Promise((resolve, reject) => {
    axios.get(`https://dapi.kakao.com/v3/search/book?target=isbn&query=${id}`, {
      headers: {
      Authorization: "KakaoAK 76173c3153cac16dba5ad5d2bf9af6cc"
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









//  ----- 백업

// function searchbookByID(payload) { // api 정보 가져오는 _fetch 함수 작성
//   const { id } = payload
//   return new Promise((resolve, reject) => {
//     axios.get(`https://dapi.kakao.com/v3/search/book?target=isbn&query=${id}`, {
//       headers: {
//       Authorization: "KakaoAK 76173c3153cac16dba5ad5d2bf9af6cc"
//       }
//     })
//     .then(res => {
//       if (res.data.Error) {
//         reject()
//       }
//       resolve(res)
//     })
//     .catch(err => {
//       reject(err.message)
//     })
//   })
// }


