<template>
  <div class="container">
    <h1>
      <span>Jacob</span>Books<br />
      with <span>Kakao</span> API
    </h1>
    <p>책 제목을 검색하시면 관련된 정보를 찾으실 수 있습니다.</p>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    padding-top: 40px;
  }
  h1 {
    line-height: 1.1;
    font-family: "Anton", sans-serif;
    font-size: 80px;
    span {
      color: $primary;
    }
  }
  p {
    margin: 30px 0;
    color: $gray-600;
  }
  @include media-breakpoint-down(sm) {
    h1 {
      font-size: 50px;
      text-align: center;
    }
    p {
      font-size: 13px;
      text-align: center;
    }
  }
</style>