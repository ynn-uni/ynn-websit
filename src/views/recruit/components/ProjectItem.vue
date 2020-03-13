<template>
  <el-card
    class="project-item"
    shadow="hover"
    :body-style="{padding:'0px'}"
    @click.native="handeldetail"
  >
    <img :src="require('./../../../assets/images/image1.png')" />
    <div class="project-detail">
      <h2>{{ detail.title }}</h2>
      <div class="project-content">{{ detail.content }}</div>
      <div class="project-info">
        <div>{{ detail.startDate }} ~ {{ detail.endDate }}</div>
        <div>需求人数：{{ detail.requireNum }}人</div>
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
    }
  },
  data() {
    return {}
  },
  methods: {
    handeldetail() {
    //  alert(1);
    //   console.log(1);
      this.$router.push({ path: '/recruitdetail', query: { newsId: '123' }})
    }
  }
}
</script>

<style lang="scss" scoped>
.project-item {
  color: #9b9b9b;
  cursor: pointer;
  margin-bottom: 50px;
  img {
    width: 100%;
  }
  .project-detail {
    padding: 14px;
    h2 {
      color: #4a4a4a;
      font-size: 18px;
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
