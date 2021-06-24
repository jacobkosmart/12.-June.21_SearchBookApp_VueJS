module.exports = {
  // 파일 확장자를 지정하지 않은 경우, Jest 가 검색할 확장자 목록입니다.
  // 일반적으로 많이 사용되는 모듈의 확장자를 지정합니다.
  // e.g `import HellowWorld from '~/components/HelloWorld';`
  moduleFileExtensions: [
    'js',
    'vue'
  ],

  // `~` 와 같은 경로 별칭을 매핑합니다.
  // `< rootDir>` 토큰을 사용해 루트 경로를 참조할 수 있습니다.
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1' // regexp 로 ~/ 로 시작되는 모든 문자열은 root 경로의 src 폴더안의 모든 경로를 말함
  },

  // 일치하는 경로에서는 모듈을 가져오지 않습니다.
  // `<rootDir>` 토큰을 사용해 루트 경로를 참조할 수 있습니다.
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/dist'
  ],

  // jsdom 환경에 대한 URL 을 설정합니다.
  // https://github.com/facebook/jest/issues/6766
  testURL: 'https://localhost',

  // 정규식과 일치하는 파일의 변환 모듈을 지정합니다.
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest'
  }
}
