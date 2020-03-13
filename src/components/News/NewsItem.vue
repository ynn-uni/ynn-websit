<template>
  <div class="news-item">
    <div class="news-item-time">
      <div class="news-item-date">{{ date }}</div>
      <div class="news-item-month">{{ month }}</div>
    </div>
    <div class="news-item-detail">
      <!-- <router-link to="/newsdetail" @click="handel">这里是标题，这里放上新闻资讯标题</router-link> -->
      <a @click="handeldetail">{{ newsiteminfo.title }}</a>
      <div class="news-item-content">{{ newsiteminfo.brief }}</div>
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
      date: '',
      month: ''
    }
  },
  mounted() {
    var time = this.newsiteminfo.time.split(' ')[0]
    // console.log(time)
    var date = time.split('-')
    this.date = date[date.length - 1]
    // console.log(this.date)
    var month = time.split(`-${this.date}`)[0]
    this.month = month.replace('-', '.')
    // console.log(this.month)
    // this.newsiteminfo.time=
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
            a{
              height:25px;
              font-size:$fontSize18;
              font-weight:400;
              color:rgba(74,74,74,1);
              line-height:25px;
              cursor: pointer;
              // margin-bottom: 30px;
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
              @include utils-ellipsis-clamp2;
            }
          }
        }

</style>

