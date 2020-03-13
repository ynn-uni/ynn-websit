<template>
  <section class="page-content">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'Content',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.page-content {
  min-height: calc(100vh - #{$navHeight} - #{$footerHeight});
  width: 100%;
  position: relative;
  background-color: #f5f5f5;
  overflow: hidden;
}
</style>
