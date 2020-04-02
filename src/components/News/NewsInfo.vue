<template>
  <div class="news-left">
    <el-card class="news-info" shadow="always" :body-style="{padding:'0px'}" @click.native="handeldetail(data.id)">
      <img :src="data.cover&&baseUrl+data.cover" :class="pagename=='news'?'img':''" />
      <div class="news-detail">
        <h2>{{ data.title }}</h2>
        <div class="news-content">{{ data.abstract }}</div>
        <div class="news-time">
          {{ data.created_at }}
          <div class="looknum">
            <i class="el-icon-view" />
            {{ data.clicks }}
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'Newsinfo',
  components: {},
  props: {
    pagename: {
      type: String,
      default: () => {}
    },
    newsdata: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      time: '1',
      baseUrl: process.env.VUE_APP_STATIC_IMG
    }
  },
  computed: {
    data() {
      const data = this.newsdata
      if (!data.created_at) return ''
      data.created_at = this.initDate(data.created_at)
      return data
    }
  },
  mounted() {

  },
  methods: {

    handeldetail(newsId) {
      this.$router.push({ path: '/newsdetail', query: { newsId: newsId }})
    },
    initDate(data) {
      return data.split(' ')[0]
    }
  }
}
</script>
<style lang="scss" scoped>
      .news-left{
        cursor: pointer;
        .el-card{
           color:rgba(155,155,155,1);
           img{
            height: 309px;
            width: 100%;
            object-fit: cover;
          }
          .img{
            height: 209px;
          }
          .news-detail {
              padding: 14px;
              h2 {
                font-size: $fontSize18;
                margin: 0;
                font-weight: 400;
                color:rgba(74,74,74,1);
                @include utils-ellipsis;
              }
              .news-content {
                margin: 8px 0;
                color: #9b9b9b;
                @include utils-ellipsis-clamp2;
              }
              .news-time {
                color:rgba(155,155,155,1);
                display: flex;
                justify-content: space-between;
              }
          }
        }

      }

</style>

