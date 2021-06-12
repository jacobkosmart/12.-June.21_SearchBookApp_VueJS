<template>
  <div class="container">
    <template v-if="loading">
      <div class="skeletons">
        <div class="skeleton poster"></div>
        <div class="specs">
          <div class="skeleton title"></div>
          <div class="skeleton spec"></div>
          <div class="skeleton plot"></div>
          <div class="skeleton etc"></div>
          <div class="skeleton etc"></div>
          <div class="skeleton etc"></div>
        </div>
      </div>
      <Loader
        :size="3"
        :z-index="9"
        fixed />
    </template>
    <div
      v-else
      class="book-details">
      <div
        :style="{ backgroundImage: `url(${theBook.thumbnail})`}"
        class="poster">
      </div>
      <div class="specs">
        <div class="title">
          {{ theBook.title }}
        </div>
        <div class="authors">
          <span>{{ theBook.authors[0] }} {{ theBook.authors[1] }} </span>
        </div>
        <div class="plot">
          {{ theBook.contents }}
        </div>
        <div class="date">
          <h3>출간일</h3>
          {{ date }}
        </div>
        <div>
          <h3>출판사</h3>
          {{ theBook.publisher }}
        </div>
        <div>
          <h3>정가</h3>
          {{ theBook.price }}
        </div>
        <div>
          <h3>isbn</h3>
          {{ theBook.isbn }}
        </div>
        <div>
          <h3>자세한 도서정보</h3>
          <a
            :href="theBook.url"
            target="_blank"
            class="btn btn-primary"
            role="button">
            Go
          </a>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
import Loader from '../components/Loader.vue'

export default {
  components: { 
    Loader 
  },
  data() {
    return {
      imageLoading: true
    }
  },
  computed: {
    theBook() {
      return this.$store.state.book.theBook
    },
    loading() {
      return this.$store.state.book.loading
    },
    date() {
      return this.$store.state.book.date
    }
  },
  created() {
    console.log(this.$route)
    this.$store.dispatch('book/searchBookByID', {
      id: this.$route.params.id
    })
  }
}
</script>


<style lang="scss" scoped>

.container  {
  padding-top: 40px;
}
.skeletons {
  display: flex;
  .poster {
    flex-shrink: 0;  // poster 의 width 가 reponsive design 일때고 크기가 작아지지 않게 고정
    width: 300px;
    height: 300px * 3 / 2;
    margin-right: 70px;
    
  }
  .specs {
    flex-grow: 1; // 설정하지 않으면 설정한 box 들이 최대한으로 줄어 들려고 하기 때문에 최대 치로 설정
  }
  .skeleton {
    border-radius: 10px;
    background-color: $gray-200;
    &.title {
      width: 80%;
      height: 70px;
    }
    &.spec {
      width: 60%;
      height: 30px;
      margin-top: 20px;
    }
    &.plot {
      width: 100%;
      height: 250px;
      margin-top: 20px;
    }
    &.etc {
      width: 50%;
      height: 50px;
      margin-top: 20px;
    }
  }
}

.book-details {
  display: flex;
  color: $gray-600;
  .poster {
    flex-shrink: 0;
    width: 300px;
    height: 300px * 3 /2;
    margin-right: 70px;
    border-radius: 10px;
    background-color: $gray-200;
    background-size: cover;
    background-position: center;
  }
  .specs {
    flex-grow: 1;
    .title {
      color: $black;
      font-family: 'Black Han Sans', sans-serif;
      font-size: 50px;
      line-height: 1;
      margin-bottom: 20px;
    }
    .authors {
      color: $primary;
      font-size: 20px;
      font-family: 'Black Han Sans', sans-serif;

    }
    .plot {
      margin-top: 20px;
    }
    .date {

    }
    h3 {
      margin: 24px 0 6px;
      color: $black;
      font-family: 'Black Han Sans', sans-serif;
      font-size: 20px;
    }
    a {
      color: $white;
    }
  }
  @include media-breakpoint-down(xl) {
    .poster {
      width: 300px;
      height: 300px 3 / 2;
      margin-right: 40px;
    }
  }
  @include media-breakpoint-down(lg) {
    display: block;
    .poster {
      margin-bottom: 40px;
    }
  }
  @include media-breakpoint-down(md) {
    .specs {
      .title {
        font-size: 30px;
      }
      .authors {
        font-size: 20px;
        margin-bottom: 40px;
      }
    }
  }
}
</style>

