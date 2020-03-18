<template>
  <el-card
    class="project-item"
    :style="{marginBottom:pagename=='recruit'?'50px':''}"
    :body-style="{padding:'0px'}"
    shadow="hover"
    @click.native="handeldetail(data.id)"
  >
    <img :src="require('./../../assets/images/home_09.gif')" />
    <div class="project-detail">
      <h2>{{ data.title }}</h2>
      <div class="project-content">{{ data.condition }}</div>
      <div class="project-info">
        <div>{{ data.start }} ~ {{ data.end }}</div>
        <div>需求人数：{{ data.amount }}人</div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: {
    detail: {
      type: Object,
      default: () => {}
    },
    pagename: {
      type: String,
      default: () => {}
    }
  },
  data() {
    return {
      start: '',
      end: ''
    }
  },
  computed: {
    data() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.detail.start = this.detail.start.split(' ')[0].replace('-', '.')
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.detail.end = this.detail.end.split(' ')[0].replace('-', '.')
      return this.detail
    }
  },

  methods: {
    handeldetail(recruitId) {
      this.$router.push({ path: '/recruitdetail', query: { recruitId: recruitId }})
    }
  }
}
</script>

<style lang="scss" scoped>
.project-item {
  color: #9b9b9b;
  cursor: pointer;

  img {
    width: 100%;
  }
  .project-detail {
    padding: 14px;
    h2 {
      color: #4a4a4a;
      font-size: $fontSize18;
      margin: 0;
      @include utils-ellipsis;
    }
    .project-content {
      margin: 8px 0;
      @include utils-ellipsis-clamp2;
    }
    .project-info {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
