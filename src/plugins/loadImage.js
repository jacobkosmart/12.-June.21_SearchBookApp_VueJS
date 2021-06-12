// 자주 사용되는 기능들은 Plugin 으로 만들어서 언제든지 프로젝트에서 $loadImage 를 통해 사용 할 수 있음

export default {
  install(app) {
    app.config.globalProperties.$loadImage = src => {
      return new Promise(resolve => {
        const img = document.createElement('img')
        img.src = src
        img.addEventListener('load', () => {
          // load 가 끝나면 다음으로 넘어간다는 의미임
          resolve()
        })
      })
    }
  }
}