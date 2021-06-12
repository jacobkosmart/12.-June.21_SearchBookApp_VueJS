<template>
  <div class="about">
    <div class="photo">
      <img
        :src="image"
        :alt="name" />
    </div>
    <div class="name">
      {{ name }}
    </div>
    <a
      href="mailto:jacobkosmart@sgmail.com">
      <div>{{ email }}</div>
    </a>
    <a
      :href="blog"
      target="_blank">
      <div>{{ blog }}</div>
    </a>
    <a
      :href="github"
      target="_blank">
      <div>{{ github }}</div>
    </a>
  </div>
</template>


<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('about', [
      'image',
      'name',
      'email',
      'blog',
      'github'
    ])
  }
}
</script>

<style lang="scss" scoped>

  .about {
    text-align: center;
    .photo {
      width: 350px;
      height: 350px;
      margin: 40px auto 20px;
      padding: 30px;
      border: 10px solid $gray-300;
      border-radius: 50%;
      box-sizing: border-box;
      background-color: $gray-200;
      img {
        width: 85%;
      }
    }
    .name {
      font-size: 40px;
      font-family: 'Black Han Sans', sans-serif;
      margin-bottom: 20px;
    }
  }
</style>