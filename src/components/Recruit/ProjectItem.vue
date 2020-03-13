<template>
  <el-card
    class="project-item"
    shadow="hover"
    :style="{marginBottom:pagename=='recruit'?'50px':''}"
    :body-style="{padding:'0px'}"
    @click.native="handeldetail(detail.id)"
  >
    <img :src="require('./../../assets/images/home_09.gif')" />
    <div class="project-detail">
      <h2>{{ detail.title }}</h2>
      <div class="project-content">{{ detail.brief }}</div>
      <div class="project-info">
        <div>{{ start }} ~ {{ end }}</div>
        <div>需求人数：{{ detail.amount }}人</div>
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
  created() {
    this.start = this.detail.start.split(' ')[0]
    this.end = this.detail.end.split(' ')[0]
  },
  methods: {
    handeldetail(recruitId) {
    //  alert(1);
    //   console.log(1);
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
