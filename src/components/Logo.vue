<template>
  <RouterLink
    to="/"
    class="logo">
    <span>Jacob</span>Books
  </RouterLink>
</template>

<style lang="scss" scoped>

  .logo {
    font-family: "Anton", sans-serif;
    font-size: 20px;
    color: $black;
    text-decoration: none;
    &:hover {
      color: $black;
    }
    span {
      color: $primary;
    }
  }
</style>