<template>
  <div class="news layout-width">
    <div class="news-info">
      <img :src="require('./../../assets/images/news-info.png')" alt="" />
      <div class="ni-right">
        <h2>
          这里是标题，这里放上新闻资讯标题
        </h2>
        <p>
          这里是内容，这里放上新闻资讯的内容这里是内容， 这里是内容，这里放上新闻资讯的内容这里是内容， 这里是内容，这里放上新闻资讯的内容这里是内容，这里是内容，这里放上新闻资讯的内容这里是内容，这里是内容，这里放上新闻资讯的内容这里是内容，这里是内容，这里放上新闻资讯的内容这里是内容，这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是
        </p>
        <div class="news-time">
          <span>2019-10-22</span>

          <a @click="handeldetail">查看详情<i class="el-icon-arrow-right" /><i class="el-icon-arrow-right" /></a>
        </div>
      </div>
    </div>
    <!-- <div>{{ dataSource }}</div> -->
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
    <div class="pagination">
      <el-pagination
        background
        :page-sizes="[9, 18, 27, 36]"
        :page-size="9"
        layout="prev, pager, next,sizes"
        :total="1000"
        :hide-on-single-page="true"
        @current-change="currentchange"
        @size-change="sizechange"
      />
    </div>

  </div>
</template>

<script>
import NewsInfo from '@/components/News/NewsInfo'
export default {
  name: 'News',
  components: {
    NewsInfo
  },
  data() {
    return {
      pageName: 'news',
      dataSource: [
        {
          title: '这里是标题，这里放上新闻资讯标题',
          content: '这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是',
          date: '2019-10-22',
          image: ''
        },
        {
          title: '这里是标题，这里放上新闻资讯标题',
          content: '这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是',
          date: '2019-10-22',
          image: ''
        },
        {
          title: '这里是标题，这里放上新闻资讯标题',
          content: '这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是',
          date: '2019-10-22',
          image: ''
        },
        {
          title: '这里是标题，这里放上新闻资讯标题',
          content: '这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是',
          date: '2019-10-22',
          image: ''
        },
        {
          title: '这里是标题，这里放上新闻资讯标题',
          content: '这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是',
          date: '2019-10-22',
          image: ''
        },
        {
          title: '这里是标题，这里放上新闻资讯标题',
          content: '这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是',
          date: '2019-10-22',
          image: ''
        }

      ],
      NewsList: []
    }
  },
  mounted() {
    this.NewsList = [
      {
        'id': 1,
        'title': '这里是标题，这里放上新闻资讯标题1',
        'cover': './../../assets/images/home_09.gif',
        'brief': '这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是 内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容…',
        'time': '2019-11-28 14:09:20'
      },
      {
        'id': 2,
        'title': '这里是标题，这里放上新闻资讯标题2',
        'cover': './../../assets/images/home_09.gif',
        'brief': '这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是 内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容…',
        'time': '2019-11-29 14:09:20'
      },
      {
        'id': 3,
        'title': '这里是标题，这里放上新闻资讯标题3',
        'cover': './../../assets/images/home_09.gif',
        'brief': '这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是 内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容…',
        'time': '2019-11-30 14:09:20'
      },
      {
        'id': 4,
        'title': '这里是标题，这里放上新闻资讯标题4',
        'cover': './../../assets/images/home_09.gif',
        'brief': '这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是 内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容…',
        'time': '2019-12-01 14:09:20'
      },
      {
        'id': 5,
        'title': '这里是标题，这里放上新闻资讯标题5',
        'cover': './../../assets/images/home_09.gif',
        'brief': '这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是 内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容…',
        'time': '2019-12-02 14:09:20'
      },
      {
        'id': 6,
        'title': '这里是标题，这里放上新闻资讯标题6',
        'cover': './../../assets/images/home_09.gif',
        'brief': '这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是 内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容…',
        'time': '2019-12-02 14:09:20'
      },
      {
        'id': 6,
        'title': '这里是标题，这里放上新闻资讯标题6',
        'cover': './../../assets/images/home_09.gif',
        'brief': '这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是 内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容…',
        'time': '2019-12-02 14:09:20'
      },
      {
        'id': 6,
        'title': '这里是标题，这里放上新闻资讯标题6',
        'cover': './../../assets/images/home_09.gif',
        'brief': '这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是 内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容…',
        'time': '2019-12-02 14:09:20'
      },
      {
        'id': 6,
        'title': '这里是标题，这里放上新闻资讯标题6',
        'cover': './../../assets/images/home_09.gif',
        'brief': '这里是内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容这里是 内容，这里放上新闻资讯的内容这里是内容，这里放上新闻资讯的内容…',
        'time': '2019-12-02 14:09:20'
      }

    ]
  },
  methods: {
    currentchange(page) {
      console.log('当前第：' + page)
    },
    sizechange(pagesize) {
      console.log('pagesize：' + pagesize)
    },
    handeldetail() {
      this.$router.push({ path: '/newsdetail', query: { newsId: '123' }})
    }
  }
}
</script>

<style lang="scss" scoped>
.news{
  margin-top: 50px;
  .news-info{
    display: flex;
    justify-content: space-between;
    img{
      width:600px;
      height:315px;
    }
    .ni-right{
      width: 538px;
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
        height: 212px;
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
  .pagination{
    text-align: center;
    margin-bottom: 55px;

  }
}

</style>
