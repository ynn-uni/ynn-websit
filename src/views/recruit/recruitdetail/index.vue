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
          <span>{{ dataSource.startDate }}～{{ dataSource.endDate }}</span>
        </div>
        <div class="type">
          <span>试验类型：</span>
          <span>{{ dataSource.type }}</span>
        </div>
        <div class="type">
          <span>试验策划：</span>
          <span>临床试验口服玎片10天</span>
        </div>
        <div class="dis">
          {{ dataSource.brief }}
        </div>
        <div class="share">
          <div class="btn">
            <el-button type="primary" @click="open">点击报名</el-button>
            <el-button @click="share">分享</el-button>
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
    <div class="introduce" v-html="dataSource.dis" />
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
          title: '「临床试验」琥珀酸曲格叻玎片「临床试验」琥珀酸曲格叻玎片',
          content: '「临床试验」琥珀酸曲格叻玎片酸曲格叻玎片招收志愿者琥珀酸曲格叻玎片酸曲格叻玎片招收志愿者',
          startDate: '2019.10.22',
          endDate: '2019.11.22',
          type: '临床试验',
          image: '',
          brief: '这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍',
          requireNum: 20,
          dis: `<p>这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项 </p>
      <p>这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项</p>
      <p>这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项</p>
      <img src="/static/img/red1.e0b27613.png" alt="">
      <p>这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项</p>
    `
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
