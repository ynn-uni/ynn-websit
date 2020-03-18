<template>
  <div class="recruitdetail layout-width">
    <div class="recruit-info">
      <img :src="require('./../../../assets/images/red1.png')" alt="" />
      <div class="info">
        <div class="title">
          {{ dataSource.title }}
        </div>
        <div class="type">
          <span>创建时间：</span>
          <span>{{ dataSource.created_at }}</span>
        </div>
        <div class="dis">
          {{ dataSource.abstract }}
        </div>
        <div class="share">

          <div class="btn-share">
            <div class="looknum">
              <i class="el-icon-view" />
              {{ dataSource.clicks }}
            </div>
            <div class="sharenum">
              <i class="el-icon-share" />
              28942
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="introduce" v-html="dataSource.content" />
  </div>
</template>

<script>

export default {
  name: 'Recruit',
  components: {

  },
  data() {
    return {
      dataSource: {
        'id': 1,
        'title': '功能治愈艾滋病 艾博卫泰要”鸡尾酒”配方',
        'cover': null,
        'abstract': '自从今年7月，南京前沿生物签署了和美国洛克菲勒大学的合作协议，获得广谱中和HIV抗体3BNC117的全球许可后，公司正积极努力，争取明年在中美同时开始临床试验，联合艾博卫泰和这种功能性抗体的联合用药。简化艾滋病的治疗已经是趋势。过去一次一大把的用药正在改变。',
        'content': '<p><span style="font-size: 0.75em;"><b>中国首个抗艾创新药，长效艾博卫泰要组合用药了。<\/b><\/span><\/p><p><span style="font-size: 0.75em;">自从今年7月，南京前沿生物签署了和美国洛克菲勒大学的合作协议，获得广谱中和HIV抗体3BNC117的全球许可后，公司正积极努力，争取明年在中美同时开始临床试验，联合艾博卫泰和这种功能性抗体的联合用药。<span style=""><br><\/span><\/span><\/p><p><span style="font-size: 0.75em;">简化艾滋病的治疗已经是趋势。过去一次一大把的用药正在改变。最近，美国食品药品管理局（FDA）批准了一个二合一的联合用药。<br><\/span><\/p><p><span style="font-size: 0.75em;">11月21日，FDA批准了Juluca，这是世界首个仅包含两种药物的完全治疗方案，用于成人治疗艾滋病毒1型人类免疫缺陷病毒（HIV-1）。而在此前，三种或更多的艾滋病毒治疗药物才是标准。<span style=""><br><\/span><\/span><\/p><p><span style="font-size: 0.75em;">这个新药，Juluca是一种两种已经获得批准的药物（特威凯dolutegravir和利匹韦林rilpivirine）的固定剂量的组合片剂。这个二合一由葛兰素史克旗下的ViiV公司生产。<span style=""><br><\/span><\/span><\/p><p><span style="font-size: 0.75em;">“限制任何HIV治疗方案中的药物数量可以帮助减少患者的毒性。”FDA的药物评估和研究中心抗病毒产品部门主管Debra Birnkrant博士在声明中表示说。<span style=""><br><\/span><\/span><\/p><p><span style="font-size: 0.75em;">这次，前沿生物获得的3BNC117是目前国际上疗效最好的广谱中和HIV抗体之一，前沿生物公司表示。这个抗体已完成美国临床I期，II期试验中与罗米地（Romidepsin）合用治疗HIV感染。<span style=""><br><\/span><\/span><\/p><p><span style="font-size: 0.75em;">结果显示，这个抗体不仅能够和其他抗艾药物一样抑制HIV病毒复制，而且可以介导针对HIV病毒和被感染细胞的免疫应答。<span style=""><br><\/span><\/span><\/p><p><span style="font-size: 0.75em;">“我们计划将艾博卫泰与3BNC117联合使用，组成拥有全新作用机制的两种长效药物全注射配方，在2018年启动临床试验研究其有效性、安全性、及诱导患者体内产生对HIV病毒的免疫反应。”前沿生物董事长兼首席科学家谢东博士在一份声明中表示。<span style=""><br><\/span><\/span><\/p><p><span style="font-size: 0.75em;"><br><\/span><\/p><p><span style="font-size: 0.75em;"><b>接近获批<\/b><span style=""><br><\/span><\/span><\/p><p><span style="font-size: 0.75em;">艾博卫泰是前沿生物研制的中国第一个抗艾新药，三期临床试验提前达到所有终点指标，目前正在等待中国食品药品监管总局（CFDA）的评审结果。<span style=""><br><\/span><\/span><\/p><p><span style="font-size: 0.75em;">艾博卫泰，英文名为Albuvirtide (ABT) 能够与血液中的白蛋白结合，显着延长半衰期，患者只需要每周注射一次就能达到药效。<span style=""><br><\/span><\/span><\/p><p><span style="font-size: 0.75em;">自报道以来，读者们非常关注该药的进展，包括清华大学张林琦教授等全国17位临床和病毒研究专家们也曾经联名上书，呼吁艾博卫泰尽快上市。<span style=""><br><\/span><\/span><\/p><p><span style="font-size: 0.75em;">健点子再次有幸采访到了前沿生物的王昌进博士。当问及艾博卫泰的进展时，王博士表示，产品获批已经到了“最后一步”。公司已经通过了现场核查，所有的审评步骤都“已经走完了”。<span style=""><br><\/span><\/span><\/p><p><span style="font-size: 0.75em;">虽然已经接近年底，但是，王博士表示，艾博卫泰仍有希望在2017年获得批准上市。<span style=""><br><\/span><\/span><\/p><p><span style="font-size: 0.75em;">此前，作为抗艾滋病的创新药，艾博卫泰获得国家药监局给予的优先审评资格。如果近期获批，这将是标志着从新药申请到获批只用15个月，是中国药政改革的又一成果。<span style=""><br><\/span><\/span><\/p><p><span style="font-size: 0.75em;">前沿生物创立于2002年， 在抗艾新药开发路上可谓十五年磨一剑。由于新药开发难度大，经历了一个艰难痛苦的过程。<\/span><\/p><p><span style="font-size: 0.75em;">2008年，艾博卫泰进入临床一期研究。<span style=""><br><\/span><\/span><\/p><p><span style="font-size: 0.75em;">相比当时的艾滋病疗法，前沿选择了长效注射的给药途径。这在当时是一个大胆，有前瞻性的决定。<span style=""><br><\/span><\/span><\/p><p><span style="font-size: 0.75em;">如今，万事俱备，只欠东风。王博士表示，公司的市场销售已经到位。为了迎接上市，除了自己的生产设施外，和合同生产商（CMO）的沟通也在进行中。<span style=""><br><\/span><\/span><\/p><p><span style="font-size: 0.75em;"><span style=""><br><\/span><br><\/span><\/p><p><span style="font-size: 0.75em;"><b>最新艾滋病统计<\/b><\/span><\/p><p><span style="font-size: 0.75em;">据上海市最新的统计数据，2017年1月1日至11月20日，上海市报告艾滋病病毒感染者2，106例，较去年同期上升7.5%。艾滋病病毒感染者人数仍然呈现上升态势，但近年增幅趋缓。<span style=""><br><\/span><\/span><\/p><p><span style="font-size: 0.75em;">性传播仍是上海市艾滋病的主要感染途径。在报告发现的艾滋病病毒感染者中，经性传播占96.3%，其中男性同性传播占57.7%，异性传播占38.6%。<span style=""><br><\/span><\/span><\/p><p><span style="font-size: 0.75em;">全国目前统计有不到80万的HIV感染者。但是，由于检测和对HIV感染者的不愿透露，实际感染人数可能有几百万。<span style=""><br><\/span><\/span><\/p><p><span style="font-size: 0.75em;">有了联合用药，艾博卫泰就有希望“功能性治愈”艾滋病，王博士表示。而且，除了单独用药，“自己有了自己的全配方，”这个战略性引入意味着，“不受制与人”，他表示。<\/span><span style=""><br><\/span><\/p>',
        'annex': null,
        'clicks': 3,
        'groom': 0,
        'hot': 0,
        'created_at': '2020-03-13 07:56:06',
        'updated_at': '2020-03-14 08:51:18'
      }

    }
  },
  created() {
    console.log('newsID:' + this.$route.query.newsId)
  },
  methods: {
    initData(data) {
      if (!data) return
      this.dataSource.created_at = this.initDate(data.created_at)
    },
    initDate(data) {
      // 整理时间格式
      var time = data.split(' ')[0]
      var newTime = time.split('-')
      return `${newTime[0]}年${newTime[1]}月${newTime[2]}日`
    }
  }
}
</script>

<style lang="scss" scoped>
  .recruitdetail{
    .recruit-info{
      margin-top: 30px;
      margin-bottom: 40px;
      display: flex;
      justify-content: space-between;
      img{
        width:440px;
        height:100%;
      }
      .info{
        width: 700px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .title{
          font-size:24px;
          font-weight:400;
          color:rgba(74,74,74,1);
          line-height:33px;
        }
        .type{
          margin-top: 10px;
          span{
            font-size:14px;
            font-weight:400;
            color:rgba(155,155,155,1);
            line-height:20px;
          }
          span+span{
            color:rgba(74,74,74,1);
          }
        }
        .dis{
          font-size:14px;
          font-weight:400;
          color:rgba(74,74,74,1);
          line-height:20px;
          margin-top: 10px;
        }
        .share{
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          align-items: flex-end;
          align-self: end;
          .btn{
            button{
              width:150px;
              height:45px;
              background:rgba(54,174,173,1);
              border:1px solid rgba(54,174,173,1);
              color: #fff;
              font-size:14px;
              font-weight:400;
              line-height:20px;
              cursor: pointer;
              outline:none;
            }
            button+button{
              color: rgba(54,174,173,1);
              background-color: #fff;
              margin-left: 15px;
            }
          }
          .btn-share{
            display: flex;
            justify-content: space-between;
            font-size:14px;;
              font-weight:400;
              color:rgba(155,155,155,1);
              line-height:20px;
            .looknum{
              i{
                margin-right: 4px;
              }
            }
            .sharenum{
              border-left: 1px solid #9b9b9b;
              margin-left: 15px;
              padding-left: 15px;
              i{
                margin-right: 4px;
              }
            }
          }
        }
      }
    }
    .introduce{
      padding-bottom: 40px;
      font-size: 20px;
      color: #9b9b9b;

    }
  }

</style>
