<template>
  <div class="recruitdetail layout-width">
    <div class="recruit-info">
      <!-- <img :src="require('./../../../assets/images/red2.png')" alt="" /> -->
      <img :src="RecruitDetails.cover" alt="" />
      <div class="info">
        <div class="title">
          {{ RecruitDetails.title }}
        </div>
        <div class="type">
          <span>试验时间：</span>
          <span>{{ start }}～{{ end }}</span>
        </div>
        <div class="type">
          <span>试验类型：</span>
          <span>临床试验</span>
        </div>
        <div class="type">
          <span>试验策划：</span>
          <span>临床试验口服玎片10天</span>
        </div>
        <div class="dis">
          {{ RecruitDetails.brief }}
        </div>
        <div class="share">
          <div class="btn">
            <!-- <button>点击报名</button> -->
            <button
              type="text"
              @click="open"
            >点击报名</button>
            <button>分享</button>
          </div>
          <div class="btn-share">
            <div class="looknum">
              <i class="el-icon-view" />
              28942
            </div>
            <div class="sharenum">
              <i class="el-icon-share" />
              28942
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="introduce" v-html="RecruitDetails.content" />
  </div>
</template>

<script>

export default {
  name: 'Recruit',
  components: {

  },
  data() {
    return {
      dataSource: [
        {
          title: '「临床试验」琥珀酸曲格叻玎片「临床试验」琥珀酸曲格叻玎片',
          content: '「临床试验」琥珀酸曲格叻玎片酸曲格叻玎片招收志愿者琥珀酸曲格叻玎片酸曲格叻玎片招收志愿者',
          startDate: '2019.10.22',
          endDate: '2019.11.22',
          image: '',
          requireNum: 20,
          dis: `<p>这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项 </p>
      <p>这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项</p>
      <p>这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项</p>
      <img src="/static/img/red2.77ac4bf6.png" alt="" />
      <p>这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项</p>
    `
        }
      ],
      RecruitDetails: {},
      start: '',
      end: ''
    }
  },
  created() {
    console.log('recruitId:' + this.$route.query.recruitId)
    this.RecruitDetails = {
      'id': 1,
      'category': 0,
      'title': '「临床试验」琥珀酸曲格叻玎片',
      'cover': '/static/img/red1.e0b27613.png',
      'brief': '这里是一些活动内容的基本介绍这里是一些活动内容的基本介绍这里是一些活动内容的基本介绍这里是一些活动内 容的基本介绍这里是一些活动内容的基本介绍这里是一些活动内容的基本介绍这里是一些活动内容的基本介绍这里 是一些活动内容的基本介绍',
      'content': `<p>这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项 </p>
      <p>这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项</p>
      <p>这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项</p>
      <img src="/static/img/red1.e0b27613.png" alt="" />
      <p>这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项</p>
    `,
      'start': '2019-11-01 00:00:00',
      'end': '2019-11-30 23:59:59',
      'amount': 20,
      'sort': 0,
      'status': 1,
      'time': '2019-11-28 14:09:20'
    }
    // 整理时间格式
    var start = this.RecruitDetails.start.split(' ')[0]
    var end = this.RecruitDetails.end.split(' ')[0]
    var newStart = start.split('-')
    var newEnd = end.split('-')
    this.start = `${newStart[0]}年${newStart[1]}月${newStart[2]}日`
    this.end = `${newEnd[0]}年${newEnd[1]}月${newEnd[2]}日`
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
        height:248px;
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
            font-family:PingFangSC-Regular,PingFang SC;
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
      display: flex;
      flex-direction: column;
      align-items: center;
     /deep/ p{
        margin-bottom: 30px;
        font-size:14px;
        font-weight:400;
        color:$colorContent;
        line-height:20px;
        text-align: justify;
        text-indent: 28px;
      }
     /deep/ img{
        width:375px;
        height:250px;
        margin-bottom: 35px;
      }
    }
  }

</style>
