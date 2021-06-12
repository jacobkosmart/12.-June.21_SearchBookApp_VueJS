<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <RouterLink
          :to="nav.href"
          active-class="active"
          :class="{ active: isMatch(nav.path) }"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
    <div
      class="user"
      @click="toAbout">
      <img
        :src="image"
        :alt="name" />
    </div>
  </header>
</template>


<script>
import { mapState } from 'vuex'
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  },
  data() {
    return {
      navigations: [
        {
          name: 'Home',
          href: '/'
        },
        {
          name: 'Book',
          href: '/book/8960975311',
          path: /^\/book/ // '/book' 이라는 것의 포함하는 모든 경로를 가리킴 
        },
        {
          name: 'About',
          href: '/about'
        }
      ]
    }
  },
  computed: {
    ...mapState('about', [
      'image',
      'name'
    ])
  },
  methods: {
    isMatch(path) {
      if(!path) return false
      console.log(this.$route)
      return path.test(this.$route.fullPath)
    },
    toAbout() {
      this.$router.push('/about')
    }
  }
}

//9788960975316
</script>

<style lang="scss" scoped>

  header {
    height: 70px;
    padding: 0 40px;
    display: flex;
    align-items: center;
    position: relative;
    .logo {
      margin-right: 40px;
    }
    .user {
      width: 50px;
      height: 50px;
      padding: 6px;
      border-radius: 50%;
      box-sizing: border-box;
      background-color: $gray-200;
      cursor: pointer;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 40px;
      margin: auto;
      transition: .5s;
      &:hover {
        background-color: darken($gray-200, 10%);
      }
      img {
        width: 90%;
      }
    }
    // Responsive Design
    @include media-breakpoint-down(sm) {
      .nav {
        display: none;
      }
    }
  }
</style>