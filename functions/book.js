const axios = require('axios')
const { kakaoKey } = process.env

exports.handler = async function (event) {
  console.log(event)
  const payload = JSON.parse(event.body)
  const { title, type } = payload
  
  try {
    const { data } = await axios.get(`https://dapi.kakao.com/v3/search/book?target=title&query=${title}&sort=${type}&size=50`, {
      headers: {
        Authorization: kakaoKey
      }
    })
    if (data.Error) {
      return {
        statusCode: 400, // 잘못된 요청된 처리를 할때 error code 를 400으로 하는
        body: data.Error
      }
    }
    return {
      statusCode: 200, // 정상으로 반응하는 code 200 임
      body: JSON.stringify(data)
    }
  } catch (error) {
    return {
      statusCode: error.response.status,
      body: error.message
    }
  }
}
