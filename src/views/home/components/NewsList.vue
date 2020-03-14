<template>

  <div class="news-contents">
    <NewsInfo :pagename="pageName" :newsdata="newsdata" :style="{width:pageName=='home'?'550px':'',marginTop:pageName=='home'?'30px':''}" />
    <div class="news-list">
      <NewsItem v-for="(item,index) of NewsList" :key="index" :newsiteminfo="item" />
    </div>
  </div>
</template>

<script>
import NewsInfo from '@/components/News/NewsInfo'
import NewsItem from '@/components/News/NewsItem'
export default {
  name: 'HomeNewsList',
  components: {
    NewsInfo,
    NewsItem
  },
  props: {

  },
  data() {
    return {
      NewsList: [],
      newsdata: {},
      pageName: 'home'
    }
  },
  computed: {

  },
  mounted() {
    this.NewsList = [
      {
        'id': 1,
        'title': '这里是标题，这里放上新闻资讯标题1这里是标题，这里放上新闻资讯标题1这里是标题，这里放上新闻资讯标题1',
        'cover': './../../assets/images/home_05.gif',
        'brief': '这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是 内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里放上新闻资讯的内容',
        'time': '2019-11-28 14:09:20'
      },
      {
        'id': 2,
        'title': '这里是标题，这里放上新闻资讯标题2这里是标题，这里放上新闻资讯标题1这里是标题，这里放上新闻资讯标题1这里是标题，这里放上新闻资讯标题1',
        'cover': './../../assets/images/home_05.gif',
        'brief': '这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是 内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容…',
        'time': '2019-11-29 14:09:20'
      },
      {
        'id': 3,
        'title': '这里是标题，这里放上新闻资讯标题3',
        'cover': './../../assets/images/home_05.gif',
        'brief': '这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是 内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容…',
        'time': '2019-11-30 14:09:20'
      },
      {
        'id': 4,
        'title': '这里是标题，这里放上新闻资讯标题4',
        'cover': './../../assets/images/home_05.gif',
        'brief': '这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是 内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容…',
        'time': '2019-12-01 14:09:20'
      },
      {
        'id': 5,
        'title': '这里是标题，这里放上新闻资讯标题5',
        'cover': './../../assets/images/home_05.gif',
        'brief': '这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是 内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容…',
        'time': '2019-12-02 14:09:20'
      }
    ]
    this.newsdata = this.NewsList[0]
    this.NewsList = this.NewsList.slice(1)
    console.log(this.newsdata)
  },

  methods: {

  }
}
</script>
<style lang="scss" scoped>
.news-contents {
    display: flex;
    justify-content: space-between;

    .news-list{
      margin-top: 17px;
      .news-item+.news-item{
        margin-top: 32px;
      }

    }
}

</style>

