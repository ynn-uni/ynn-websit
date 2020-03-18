<template>
  <div class="recruitdetail layout-width">
    <div class="recruit-info">
      <img :src="require('./../../../assets/images/red2.png')" alt="" />
      <!-- <img :src="RecruitDetails.cover" alt="" /> -->
      <div class="info">
        <div class="title">
          {{ dataSource.title }}
        </div>
        <div class="type">
          <span>试验时间：</span>
          <span>{{ dataSource.start }}～{{ dataSource.end }}</span>
        </div>
        <div class="type">
          <span>试验类型：</span>
          <span>{{ dataSource.status }}</span>
        </div>
        <div class="type">
          <span>试验策划：</span>
          <span>临床试验口服玎片10天</span>
        </div>
        <div class="dis">
          {{ dataSource.condition }}
        </div>
        <div class="share">
          <div class="btn">
            <el-button type="primary" @click="open">点击报名</el-button>
            <el-button @click="share">分享</el-button>
          </div>
          <div class="btn-share">
            <div class="looknum">
              <i class="el-icon-view" />
              {{ dataSource.amount }}
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
      dataSource:
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
           'content': '<p><span style="font-size: 0.75em;">尊敬的患者：<\/span><\/p><p><span style="font-size: 0.75em;">您好！我院正在进行一项方案名称：评价JMT101（重组人源化抗表皮生长因子受体单克隆抗体注射液）治疗晚期实体肿瘤的安全性 、 耐受性以及药物代谢动力学的 I 期临床研究 ， 方案 编 号 ：JMT101-ECL，针对晚期实体瘤患者的临床研究。研究已经得到重庆大学附属肿瘤医院伦理委员会的批准。本项研究的主要研究者是我院 辇伟奇 教授。预计招募 15 名患者。<\/span><\/p><p><span style="font-size: 0.75em;">如果您符合下述条件：<\/span><\/p><p><span style="font-size: 0.75em;">（1）年龄18-75周岁（含），男女均可；<\/span><\/p><p><span style="font-size: 0.75em;">（2）经病理组织学和\/或细胞学确诊的晚期实体瘤患者，（若为结直肠癌患者其肿瘤基因 RAS 为野生型（WT）型），并且至少一种针对晚期疾病标准疗法治疗无效，或患者拒绝标准疗法后尚无有效的治疗方法（JMT101单药）；<\/span><\/p><p><span style="font-size: 0.75em;">（3）或经病理组织学和\/或细胞学确诊、具有可测量病灶、转移性或局部晚期不可根治性切除的结 直肠癌患者（JMT101联合方案）；<\/span><\/p><p><span style="font-size: 0.75em;">（4）愿意参与这项研究。<\/span><\/p><p><span style="font-size: 0.75em;">您是否能够参加本研究，还需要满足其他条件，研究医生将跟您详细沟通。若您有意参加，请联系<\/span><\/p><p><span style="font-size: 0.75em;">研究医生：王医生\/黄医生\/邓医生 <\/span><\/p><p><span style="font-size: 0.75em;">电话：023-65079277 <\/span><\/p><p><span style="font-size: 0.75em;">或您可直接前往我院Ⅰ期临床试验中心（内科医技楼22楼）咨询<span style=""><br><\/span><\/span><\/p><p><span style="font-size: 0.75em;">工作日：上午8:00-12:00    下午：14:30-17:30<\/span><\/p>',
           'tel': '023-65079277',
           'status': 1
         },
      RecruitDetails: {},
      start: '',
      end: ''
    }
  },
  created() {
    console.log('recruitId:' + this.$route.query.recruitId)
  },
  methods: {
    open() {
      const url = require('./../../../assets/images/erweima.png')
      this.$alert('', '', {
        showConfirmButton: false,
        closeOnClickModal: true,
        dangerouslyUseHTMLString: true,
        message: `<div class="box" style="display: flex;justify-content: center;flex-direction: column;align-items: center;">
          <img src='${url}' alt="" style="width:289px;height:289px;margin-bottom: 26px;">
          <p style="text-align: center;font-size:24px;font-weight:400; color:rgba(74,74,74,1);line-height:33px;">
          点击扫码进入小程序报名注册即可
          </p>
        </div>`,
        // confirmButtonText: '确定',
        callback: action => {
          // this.$message({
          //   type: 'info',
          //   message: `action: ${ action }`
          // });
        }
      })
    },
    initDate() {
      // 整理时间格式
      var start = this.RecruitDetails.start.split(' ')[0]
      var end = this.RecruitDetails.end.split(' ')[0]
      var newStart = start.split('-')
      var newEnd = end.split('-')
      this.start = `${newStart[0]}年${newStart[1]}月${newStart[2]}日`
      this.end = `${newEnd[0]}年${newEnd[1]}月${newEnd[2]}日`
    },
    share() {
      var ftit = '药牛牛' // 分享出去得文章得标题
      var flink = 'https://upload.jianshu.io/users/upload_avatars/13787061/439ae608-6717-435e-916c-8fe08ead865a?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' // 分享出去logo
      window.open('https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + encodeURIComponent(document.location) + '?sharesource=qzone&title=' + ftit + '&pics=' + flink + '&summary=' + '')
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
        .title{
          font-size:24px;
          font-weight:400;
          color:$colorTitle;
          line-height:33px;
        }
        .type{
          margin-top: 10px;
          span{
            font-size:14px;
            font-weight:400;
            color:$colorContent;
            line-height:20px;
          }
          span+span{
            color:$colorTitle;
          }
        }
        .dis{
          font-size:14px;
          font-weight:400;
          color:$colorTitle;
          line-height:20px;
          margin-top: 10px;
          height: 60px;
          @include utils-ellipsis-clamp;
          -webkit-line-clamp: 3;
        }
        .share{
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          align-items: flex-end;
          .btn{
            button{
              width:150px;
              height:45px;
              font-size:14px;
            }
            button+button{
              color: rgba(54,174,173,1);
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
