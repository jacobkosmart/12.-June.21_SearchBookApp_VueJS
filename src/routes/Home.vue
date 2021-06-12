<template>
  <Headline />
  <Search />
  <BookList />
</template>

<script>
import Headline from '~/components/Headline.vue'
import Search from '~/components/Search.vue'
import BookList from '~/components/BookList.vue'

export default {
  components: {
    Headline,
    Search,
    BookList,
  }
  // 검색 후 초기화, Home 으로 나갈때 검색한 정보를 초기화 시킴
  // created() { 
  //   this.$store.commit('book/resetBooks')
  // }
}
</script>
