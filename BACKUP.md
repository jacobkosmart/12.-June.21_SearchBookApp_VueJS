
/*
function _fetchMovie(payload) { // api 정보 가져오는 _fetch 함수 작성
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

function _fetchMovieByID(payload) { // api 정보 가져오는 _fetch 함수 작성
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

*/







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


