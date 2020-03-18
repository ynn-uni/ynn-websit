<template>
  <div class="news-left">
    <el-card class="news-info" shadow="always" :body-style="{padding:'0px'}" @click.native="handeldetail(newsdata.id)">
      <img :src="require('./../../assets/images/home_09.gif')" />
      <div class="news-detail">
        <h2>{{ newsdata.title }}</h2>
        <div class="news-content">{{ newsdata.abstract }}</div>
        <div class="news-time">
          {{ newsdata.created_at }}
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

  },
  mounted() {
    this.initData(this.newsdata)
  },
  methods: {
    initData(data) {
      data.created_at = this.initDate(data.created_at)
      this.newsdata = data
    },
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

