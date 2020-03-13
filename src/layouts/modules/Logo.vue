<template>
  <router-link :to="{name:'home'}" class="page-logo" tag="div">
    <img src="~@/assets/images/logo.png" />
  </router-link>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="scss" scoped>
.page-logo {
  img {
    height: $navHeight;
  }
}
</style>
