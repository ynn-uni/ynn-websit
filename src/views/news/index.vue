<template>
  <div class="news layout-width">
    <div class="news-info">
      <img :src="require('./../../assets/images/news-info.png')" alt="" />
      <div class="ni-right">
        <h2>
          {{ firstNews.title }}
        </h2>
        <p>{{ firstNews.abstract }}</p>
        <div class="news-time">
          <span>{{ firstNews.created_at }}</span>

          <a @click="handeldetail">查看详情<i class="el-icon-arrow-right" /><i class="el-icon-arrow-right" /></a>
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
      firstNews: {},
      NewsList: [
        {
          'id': 5,
          'title': '孩子生病 家长不能“凭经验”乱用药',
          'cover': null,
          'abstract': '孩子在成长过程中难免生病，有的家长觉得有些小病无关紧要，凭经验给孩子吃点药就可以了，这样的做法是不可取的。',
          'clicks': 0,
          'groom': 0,
          'hot': 0,
          'created_at': '2020-03-13 08:05:02'
        }, {
          'id': 4,
          'title': '双重肿瘤微环境刺激响应性纳米递药体系研究获进展',
          'cover': null,
          'abstract': '智能化可控释放纳米递药体系可以对pH、温度、光照、氧化剂、酶以及超声辐照等外界环境的刺激做出反馈性响应，并凭借其优异的控制释放功能，在药物传输体系中表现出极具竞争力的应用前景。其该体系可针对肿瘤细胞与正常组织的生物学差异选择性释药，从而有效降低抗肿瘤药物对正常细胞的毒副作用，提高药物的利用率。',
          'clicks': 0,
          'groom': 0,
          'hot': 0,
          'created_at': '2020-03-13 08:03:49'
        }, {
          'id': 3,
          'title': '荣昌制药完成十亿元融资十余个生物新药在研',
          'cover': null,
          'abstract': '近日，烟台荣昌制药股份有限公司（简称“荣昌制药”）宣布成功完成十亿元人民币的融资。此次融资由深创投、国投创业、太盟投资集团（PAG）、龙磐投资、国投创合联合领投，以及华泰大健康基金、山东吉富创投、国中创投、鲁信创投、中泰汇银共同出资。',
          'clicks': 0,
          'groom': 0,
          'hot': 0,
          'created_at': '2020-03-13 08:00:48'
        }, {
          'id': 2,
          'title': '30亿美元重磅新药问世 FDA批多款罕见病新药',
          'cover': null,
          'abstract': '时间过得飞快，转眼2017年已经接近尾声。在刚刚过去的11月份，美国FDA共计批准了6款新药，保持了今年一直以来的良好势头。扳着手指算一下，过去11个月中，FDA总共批准了41款新药，这个数字已接近去年的两倍，预计今年批准的新药数量将超过45个。',
          'clicks': 0,
          'groom': 0,
          'hot': 0,
          'created_at': '2020-03-13 07:58:42'
        }, {
          'id': 1,
          'title': '功能治愈艾滋病 艾博卫泰要”鸡尾酒”配方',
          'cover': null,
          'abstract': '自从今年7月，南京前沿生物签署了和美国洛克菲勒大学的合作协议，获得广谱中和HIV抗体3BNC117的全球许可后，公司正积极努力，争取明年在中美同时开始临床试验，联合艾博卫泰和这种功能性抗体的联合用药。简化艾滋病的治疗已经是趋势。过去一次一大把的用药正在改变。',
          'clicks': 0,
          'groom': 0,
          'hot': 0,
          'created_at': '2020-03-13 07:56:06'
        }]
    }
  },
  mounted() {
    this.initData(this.NewsList)
  },
  methods: {
    initData(data) {
      if (data.length <= 0) return
      this.firstNews = data[0]
      this.NewsList = data.slice(1)
    },
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
