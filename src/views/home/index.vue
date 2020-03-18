<template>

  <div class="home">
    <div class="home-slide">
      <img :src="require('./../../assets/images/home_02.gif')" />
    </div>
    <div class="news layout-width">
      <div class="news-title">
        <div>
          <h2>新闻资讯</h2>
          <span>NEWS INFORMATION</span>
        </div>
        <el-button size="small" class="arrow-right" icon="el-icon-arrow-right" circle @click="handelNews" />
      </div>
      <div class="news-contents">
        <NewsInfo :pagename="pageName" :newsdata="newsdata" :style="{width:pageName=='home'?'550px':'',marginTop:pageName=='home'?'30px':''}" />
        <div class="news-list">
          <NewsItem v-for="(item,index) of NewsList" :key="index" :newsiteminfo="item" />
        </div>
      </div>
    </div>
    <div class="idea layout-width">
      <el-row class="layout-width">
        <el-col :span="4">
          <div class="grid-content our-idea">
            我们的理念
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content idea-item">
            <img :src="require('./../../assets/images/home_icon.png')" alt="" />
            <p class="idea-line" />
            <h2>创新</h2>
            <span>INNOVATE</span>
          </div>
          <div class="idea-hover">
            <h2>创新</h2>
            <span>INNOVATE</span>
            <p class="hover-line" />
            <div class="idea-content">
              <p>专业化医疗环境</p>
              <p>高素质管理人才</p>
              <p>专业化医疗团队</p>
            </div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content idea-item">
            <img :src="require('./../../assets/images/home_icon.png')" alt="" />
            <p class="idea-line" />
            <h2>创新</h2>
            <span>INNOVATE</span>
          </div>
          <div class="idea-hover">
            <h2>创新</h2>
            <span>INNOVATE</span>
            <p class="hover-line" />
            <div class="idea-content">
              <p>专业化医疗环境</p>
              <p>高素质管理人才</p>
              <p>专业化医疗团队</p>
            </div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content idea-item">
            <img :src="require('./../../assets/images/home_icon.png')" alt="" />
            <p class="idea-line" />
            <h2>创新</h2>
            <span>INNOVATE</span>
          </div>
          <div class="idea-hover">
            <h2>创新</h2>
            <span>INNOVATE</span>
            <p class="hover-line" />
            <div class="idea-content">
              <p>专业化医疗环境</p>
              <p>高素质管理人才</p>
              <p>专业化医疗团队</p>
            </div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content idea-item">
            <img :src="require('./../../assets/images/home_icon.png')" alt="" />
            <p class="idea-line" />
            <h2>创新</h2>
            <span>INNOVATE</span>
          </div>
          <div class="idea-hover">
            <h2>创新</h2>
            <span>INNOVATE</span>
            <p class="hover-line" />
            <div class="idea-content">
              <p>专业化医疗环境</p>
              <p>高素质管理人才</p>
              <p>专业化医疗团队</p>
            </div>
          </div>
        </el-col>

      </el-row>

    </div>
    <div class="recruit layout-width">
      <div class="recruit-title">
        <h2>报名招募</h2>
        <p />
        <span>REGISTRATION RECRUIT</span>
      </div>
      <div class="recruit-list">
        <el-row :gutter="45">
          <el-col v-for="(item, index) in RecruitList" :key="index" class="project-item" :span="8">
            <project-item :detail="item" />
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="chooseus">
      <img :src="require('./../../assets/images/home_02d_02.gif')" />

    </div>
    <div class="introduce layout-width">
      <div class="introduce-title">
        <p>HOSPITAL INTRODUCTIO</p>
        <h2>医院简介</h2>
      </div>
      <div class="introduce-content">
        <div class="ic-left">
          <p>
            XX公司创立于1999年，是全球领先的提供商，我们致力于把数字世界带入每个人、每个家庭、每个组织，构建万物互联的智能世界。目前有18.8万员工，业务遍及170多个国家和地区，服务30多亿人口。
          </p>
          <p>
            我们生态伙伴开放合作，持续为客户创造价值，释放个人潜能，丰富家庭生活，激发组织创新。
          </p>
          <p>
            我们坚持围绕客户需求持续创新，加大基础研究投入，厚积薄发，推动世界进步。
          </p>
          <p>
            对外依靠客户，坚持以客户为中心，通过创新的产品为客户创造价值；对内依靠努力奋斗的员工，以奋斗者为本，让有贡献者得到合理回报； XX公司创立于1999年，是全球领先的提供商，我们致力于把数字世界带入每个人、每个家庭、每个组织，构建万物互联的智能世界。目前有18.8万员工，业务遍及170多个国家和地区，服务30多亿人口。
          </p>
          <p>
            我们生态伙伴开放合作，持续为客户创造价值，释放个人潜能，丰富家庭生XX公司创立于1999年，是全球领先的提供商，我们致力于把数字世界带入每个人、每个家庭、每个组织，构建万物互联的智能世界。目前有18.8万员工，业务遍及170多个国家和地区，服务30多亿人口。
          </p>
        </div>
        <img :src="require('./../../assets/images/home_16.gif')" alt="" />
      </div>
    </div>
  </div>

</template>

<script>
import NewsInfo from '@/components/News/NewsInfo'
import NewsItem from '@/components/News/NewsItem'
import ProjectItem from '@/components/Recruit/ProjectItem'
export default {
  name: 'Home',
  components: {
    NewsInfo,
    NewsItem,
    ProjectItem
  },
  data() {
    return {
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
        }],
      newsdata: {},
      RecruitList: [
        {
          'id': 1,
          'title': '评价JMT101治疗晚期实体肿瘤的安全性、耐受性以及药物代谢动力学的I期临床研究',
          'cover': 'images\/20200314112540.png',
          'start': '2020-03-14',
          'end': '2020-03-31',
          'amount': 15,
          'sex': '不限',
          'age': '18-75',
          'condition': '晚期实体瘤患者',
          'status': 1
        },
        {
          'id': 2,
          'title': '评价JMT101治疗晚期实体肿瘤的安全性、耐受性以及药物代谢动力学的I期临床研究',
          'cover': 'images\/20200314112540.png',
          'start': '2020-03-14',
          'end': '2020-03-31',
          'amount': 15,
          'sex': '不限',
          'age': '18-75',
          'condition': '晚期实体瘤患者',
          'status': 1
        },
        {
          'id': 3,
          'title': '评价JMT101治疗晚期实体肿瘤的安全性、耐受性以及药物代谢动力学的I期临床研究',
          'cover': 'images\/20200314112540.png',
          'start': '2020-03-14',
          'end': '2020-03-31',
          'amount': 15,
          'sex': '不限',
          'age': '18-75',
          'condition': '晚期实体瘤患者',
          'status': 1
        }
      ],
      pageName: 'home'
    }
  },
  created() {
    // 只要前5条
    this.initData(0)
  },
  methods: {
    initData() {
      this.newsdata = this.NewsList[0]
      this.NewsList = this.NewsList.slice(1)
    },
    handelNews() {
      this.$router.push({ path: '/news' })
    }
  }

}
</script>
<style lang="scss" scoped>
.home{
  background-color: #f0f2f5;
  .home-slide{
    position: relative;
    min-width: 1200px;
    img{
      width: 100%;
      vertical-align: middle;
      min-width: 1200px;
      height: 540px;
      object-fit: cover;
    }
    .home-slide-content{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url(./../../assets/images/home_02.gif);
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  .news{
    .news-title{
      margin-top: 60px;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      padding-bottom: 20px;
      border-bottom: 2px solid rgba(216,216,216,1);
      div{
         display: flex;
         align-items: flex-end;
        h2{
          height:42px;
          font-size:30px;
          font-weight:400;
          color:$colorTitle;
          line-height:42px;
        }
        span{
          height:34px;
          font-size:24px;
          font-weight:400;
          color:$colorContent;
          line-height:34px;
          margin-left: 20px;
        }
      }
      .arrow-right{
        background:rgba(54,174,173,1);
        color: #fff;
      }

    }
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

  }
  .idea{
    margin-top: 100px;
    display: flex;
    .el-row {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
       .el-col + .el-col{
         margin-left: 37px;
       }
      .el-col {
        width:210px;
        height:200px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        &:hover .idea-hover{
          opacity: 1;
        }
        .our-idea{
          text-align: center;
          width:164px;
          height:54px;
          border:1px solid rgba(51,209,208,1);
          font-size:20px;
          font-weight:400;
          color:rgba(51,209,208,1);
          line-height:54px;
        }
        .idea-item{
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;

          p{
            // padding: 0;
            margin: 14px 0;
            width:55px;
            border-top: 1px solid rgba(51,209,208,1);
          }
          h2{
            font-size:$fontSize18;
            font-weight:400;
            color:$colorTitle;
            line-height:25px;
          }
          span{
            font-size:$fontSize18;
            font-weight:400;
            color:$colorContent;
            line-height:25px;
          }
        }
        .idea-hover{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: rgba(51,209,208,1);
            color: #fff;
            opacity: 0;
            transition: all 0.2s linear;
            h2{
              font-size:$fontSize18;
              font-weight:400;
            }
            span{
              font-size:$fontSize18;
              font-weight:400;
            }
            >p{
              width:55px;
              border-top: 1px solid #fff;
              padding: 0;
              margin: 14px 0;
            }
            .idea-content{
              p{
                font-size:$fontSize18;
                font-weight:400;
                line-height:26px;
                padding: 0;
                margin: 0;
              }
            }
          }
      }
    }

  }
  .recruit{
    margin-top: 100px;
    .recruit-title{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 23px;
      h2{
        font-size:30px;
        font-weight:500;
        color:$colorTitle;
        line-height:42px;
      }
      p{
        width:71px;
        border-top: 4px solid rgba(51,209,208,1);
        padding: 0;
        margin: 4px 0;
      }
      span{
        font-size:24px;
        font-weight:500;
        color:$colorContent;
        line-height:33px;
      }
    }
    .project-item {
      position: relative;
      top: 0px;
      transition: all 0.3s linear;
      &:hover{
        top:-10px;
      }

    }
  }
  .chooseus{
    margin-top: 50px;
    position: relative;
    min-width: 1200px;
    img{
      width: 100%;
      vertical-align: middle;
      min-width: 1200px;
      height: 300px;
      object-fit:cover;
    }

  }
  .introduce{
    .introduce-title{
      margin-top: 40px;
      p{
        font-size:24px;
        font-weight:500;
        color:rgba(61,198,197,1);
        line-height:33px;
      }
      h2{
        font-size:30px;
        font-weight:500;
        color:rgba(54,174,173,1);
        line-height:42px;
      }
    }
    .introduce-content{
      display: flex;
      justify-content: space-between;
      padding-bottom: 50px;
      .ic-left{
        width:587px;
        height:405px;
        margin-top: 10px;
        p{
        font-size:$fontSize14;
        font-weight:400;
        color:$colorTitle;
        line-height:24px;
        text-align: justify;
        margin-bottom: 14px;
        }
      }
      img{
        width:564px;
        height:396px;
        vertical-align: middle;
      }
    }
  }
}
</style>
