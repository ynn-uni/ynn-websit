<template>

  <div class="news-item">
    <div class="news-item-time">
      <div class="news-item-date">{{ date }}</div>
      <div class="news-item-month">{{ month }}</div>
    </div>
    <div class="news-item-detail">
      <!-- <router-link to="/newsdetail" @click="handel">这里是标题，这里放上新闻资讯标题</router-link> -->
      <a class="title" @click="handeldetail">{{ newsiteminfo.title }}</a>
      <div class="news-item-content">{{ newsiteminfo.abstract }}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Newsitem',
  components: {},
  props: {
    newsiteminfo: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      // date: '',
      // month: ''
    }
  },
  computed: {
    date() {
      if (this.newsiteminfo.length <= 0) return ''
      var time = this.newsiteminfo.created_at.split(' ')[0]
      var date = time.split('-')
      return date[date.length - 1]
    },
    month() {
      if (this.newsiteminfo.length <= 0) return ''
      var time = this.newsiteminfo.created_at.split(' ')[0]
      return time.split(`-${this.date}`)[0]
    }
  },

  methods: {
    handeldetail() {
      this.$router.push({ path: '/newsdetail', query: { newsId: this.newsiteminfo.id }})
    }
  }
}
</script>
<style lang="scss" scoped>

      .news-item{
          display: flex;
          align-items: center;
          .news-item-time{
            .news-item-date{
              height:64px;
              font-size:46px;
              font-weight:400;
              color:rgba(155,155,155,1);
              line-height:64px;
            }
             .news-item-month{

              font-size:$fontSize18;
              font-weight:400;
              color:rgba(155,155,155,1);

            }

          }
          .news-item-detail{
            margin-top: 9px;
            margin-left: 20px;
            padding-left: 20px;
            border-left: 2px solid rgba(216,216,216,1);
            // height: 70px;
            width:462px;
            .title{
              height:25px;
              font-size:$fontSize18;
              font-weight:400;
              color:rgba(74,74,74,1);
              line-height:25px;
              display: block;
              cursor: pointer;
              @include utils-ellipsis;
              &:hover{
                text-decoration: underline;
              }
            }
            .news-item-content{
              margin-top: 5px;
              width:462px;
              font-size: $fontSize14;
              line-height: 20px;
              color:rgba(155,155,155,1);
              @include utils-ellipsis-clamp;
              -webkit-line-clamp: 2;
            }
          }
        }

</style>

