<template>
  <div class="news layout-width">
    <div class="news-info">
      <img :src="firstNews.cover&&baseUrl+firstNews.cover" alt="" />
      <div class="ni-right">
        <div>
          <h2>
            {{ firstNews.title }}
          </h2>
          <p>{{ firstNews.abstract }}</p>
        </div>
        <div class="news-time">
          <span>{{ firstNews.created_at }}</span>
          <a @click="handeldetail(firstNews.id)">查看详情<i class="el-icon-arrow-right" /><i class="el-icon-arrow-right" /></a>
        </div>
      </div>
    </div>

    <div class="news-list layout-width">
      <el-row :gutter="45">
        <el-col
          v-for="(item, index) in NewsList"
          :key="index"
          :span="8"
          :style="{paddingBottom:pageName=='news'?'50px':''}"
        >
          <news-info :pagename="pageName" :newsdata="item" />
        </el-col>
      </el-row>

    </div>
    <Pagination
      v-if="pageCount>1"
      :page-count="pageCount"
      :page.sync="curPage"
      :size.sync="size"
      @pagination="geNewsData"
    />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import NewsInfo from '@/components/News/NewsInfo'
import { getNewsList } from '@/api'
export default {
  name: 'News',
  components: {
    NewsInfo,
    Pagination
  },
  data() {
    return {
      pageCount: 0,
      curPage: 1,
      size: 10,
      pageName: 'news',
      firstNews: {},
      NewsList: [],
      baseUrl: process.env.VUE_APP_STATIC_IMG
    }
  },
  mounted() {
    this.geNewsData()
  },
  methods: {
    geNewsData() {
      getNewsList({ page: this.curPage, size: this.size }).then((res) => {
        const data = res.data
        this.initData(data)
        this.pageCount = res.last_page
      })
    },
    initData(data) {
      if (data.length <= 0) return
      // if (this.curPage === 1) {
      this.firstNews = data[0]
      this.firstNews.created_at = data[0].created_at.split(' ')[0]
      this.NewsList = data.slice(1)
      // } else {
      //   this.NewsList = data
      // }
      // this.NewsList = data
    },
    handeldetail(id) {
      this.$router.push({ path: '/newsdetail', query: { newsId: id }})
    }
  }
}
</script>

<style lang="scss" scoped>
.news{
  margin-top: 50px;
  .news-info{
    display: flex;
    img{
      max-width:400px;
      position: relative;
      top: 0;
      bottom: 0;
      object-fit: cover;
    }
    .ni-right{
      // width: 538px;
      margin-left: 50px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h2{
        font-size:24px;
        font-weight:400;
        color:$colorTitle;
        line-height:32px;
      }
      p{
        margin-top: 9px;
        font-size:16px;
        font-weight:400;
        color:$colorContent;
        line-height:26px;
        text-align: justify;
        @include utils-ellipsis-clamp;
        -webkit-line-clamp: 8;
      }
      .news-time{
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        span{
          font-size:18px;
          font-weight:400;
          color:$colorContent;
          line-height:25px;
        }
        a{
          font-size:18px;
          font-weight:400;
          color:rgba(255,127,24,1);
          line-height:25px;
          cursor: pointer;
          i{
            display: inline-block;
            width: 10px;
          }
        }
      }
    }

  }
  .news-list{
      margin-top: 50px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
}

</style>
