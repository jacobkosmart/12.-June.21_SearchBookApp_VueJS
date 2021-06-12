<template>
  <div class="container">
    <div
      :class="{ 'no-result': !books.length }"
      class="inner">
      <Loader v-if="loading" />
      <div
        v-if="message"
        class="message">
        {{ message }}
      </div>
      <div
        v-else
        class="books">
        <BookItem
          v-for="book in books"
          :key="book.isbn"
          :book="book" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BookItem from '~/components/BookItem'
import Loader from '~/components/Loader'

export default {
  components: {
    BookItem,
    Loader
  },
  computed: {
    ...mapState('book', [
      'books',
      'message',
      'loading'
    ])
  }
}
</script>


<style lang="scss" scoped>

.container {
  margin-top: 30px;
  .inner {
    background-color: $gray-200;
    padding: 10px 0;
    border-radius: 4px;
    text-align: center;
    &.no-result {
      padding: 70px 0;
    }
  }
  .message {
    color: $gray-400;
    font-size: 20px;
  }
  .books {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>