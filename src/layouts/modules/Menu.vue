<template>
  <el-menu
    class="page-menu"
    :default-active="activeMenu"
    mode="horizontal"
    @select="handleMenuSelect"
  >
    <el-menu-item v-for="menu in menus" :key="menu.index" :index="menu.index">{{ menu.title }}</el-menu-item>

  </el-menu>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      activeMenu: 'home',
      menus: [
        {
          index: 'home',
          title: '网站首页'
        },
        {
          index: 'news',
          title: '新闻资讯'
        },
        {
          index: 'recruit',
          title: '报名招募'
        },
        {
          index: 'teams',
          title: '专家团队'
        },
        {
          index: 'about',
          title: '关于我们'
        }

      ]
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.handleQuery()
      }
    }
  },
  methods: {
    handleMenuSelect(menuIndex) {
      this.$router.push({ name: menuIndex })
    },
    handleQuery() {
      const { name } = this.$route
      if (name) {
        this.activeMenu = name
        // console.log(name)
        if (name === 'recruitdetail') {
          this.activeMenu = 'recruit'
        } else if (name === 'newsdetail') {
          this.activeMenu = 'news'
        }
      } else {
        console.warn('路由需要定义name属性')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page-menu {
  background: #fff;

  &.el-menu::v-deep {
    border-bottom: none;
    .el-menu-item {
      height: $navHeight;
      line-height: $navHeight;
      font-size: 16px;
      border-bottom-color: transparent !important;
      transition: background-color 0.3s, color 0.3s;
    }
    .is-active.el-menu-item,
    .is-active.el-menu-item:focus,
    .is-active.el-menu-item:hover {
      background: $primaryColor;
      color: #fff;
    }
  }
}
</style>
