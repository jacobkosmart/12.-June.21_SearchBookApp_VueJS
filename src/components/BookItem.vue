<template>
  <RouterLink
    v-if="`${10 > book.isbn.length}`"
    :to="`/book/${book.isbn.substring(0,10)}`"
    :style="{backgroundImage: `url(${book.thumbnail})`}"
    class="book">
    <Loader
      v-if="imageLoading"
      :size="1.5"
      absolute />
    <div class="info">
      <div class="author">
        {{ book.authors[0] }} {{ book.authors[1] }}
      </div>
      <div class="title">
        {{ book.title }}
      </div>
    </div>
  </RouterLink>
</template>


<script>
import Loader from '~/components/Loader'

export default {
  components: {
    Loader
  },
  props: {
    book: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    isbn() {
      return this.$store.state.book.isbn
    }
  },
  data() {
    return {
      imageLoading: true
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      const poster = this.book.thumbnail
      if (!poster || poster === 'N/A') {
        this.imageLoading = false
      } else {
        await this.$loadImage(poster)
        this.imageLoading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.book {
  $width: 200px;
  width: $width;
  height: $width * 3 / 2;
  margin: 10px;
  border-radius: 4px;
  background-color: $gray-400;
  background-size: cover;
  overflow: hidden;
  position: relative;
  &:hover::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 6px solid $primary;
  }
  .info {
    background-color: rgba($black, .3);
    width: 100%;
    padding: 14px;
    font-size: 14px;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 0;
    backdrop-filter: blur(15px);
    .author {
      color: $primary;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .title {
      color: $white;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>