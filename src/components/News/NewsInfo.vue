<template>
  <div class="news-left">
    <el-card class="news-info" :shadow="pagename=='news'?'hover':''" :body-style="{padding:'0px'}" @click.native="handeldetail(newsdata.id)">
      <img :src="require('./../../assets/images/home_09.gif')" />
      <div class="news-detail">
        <h2>{{ data.title }}</h2>
        <div class="news-content">{{ data.brief }}</div>
        <div class="news-time">
          {{ data.time }}
          <!-- <div>需求人数：{{ detail.requireNum }}人</div> -->
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
      time: '1'
    }
  },
  computed: {
    data() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.newsdata.time = this.newsdata.time.split(' ')[0]
      return this.newsdata
    }
  },
  mounted() {
  },
  methods: {
    handeldetail(newsId) {
      this.$router.push({ path: '/newsdetail', query: { newsId: newsId }})
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
            width: 100%;
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
              .new-time {
                color:rgba(155,155,155,1);
                display: flex;
                justify-content: space-between;
              }
          }
        }

      }

</style>

