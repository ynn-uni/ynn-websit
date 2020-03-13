<template>
  <div class="page-header">
    <div class="layout-width">
      <logo />
      <page-menu />
    </div>
  </div>
</template>

<script>
import Logo from './Logo'
import PageMenu from './Menu'
export default {
  name: 'Menu',
  components: {
    PageMenu,
    Logo
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.page-header {
  position: relative;
  font-size: 0px;
  background: #ffffff;
  box-shadow: 0px 4px 9px 0px #e4e4e480;
  overflow: hidden;
  .page-logo {
    float: left;
  }
  .page-menu {
    float: right;
  }
}
</style>
