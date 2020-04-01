<template>
  <div class="recruitdetail layout-width">
    <div class="recruit-info">
      <img :src="dataSource.cover&&baseUrl+dataSource.cover" alt="" />
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
          <span>{{ dataSource.type }}</span>
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
            <!-- <el-button @click="share">分享</el-button> -->
          </div>
          <div class="btn-share">
            <div class="looknum">
              需求人数：
              {{ dataSource.amount }}
            </div>
            <!-- <div class="sharenum">
              <i class="el-icon-share" />
              28942
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="introduce" v-html="dataSource.content" />
  </div>
</template>
<script src="http://qzonestyle.gtimg.cn/qzone/app/qzlike/qzopensl.js#jsdate=20111201" charset="utf-8"></script>
<script>
import { getRecruitDetails } from '@/api'
export default {
  name: 'Recruit',
  components: {

  },
  data() {
    return {
      dataSource: {},
      start: '',
      end: '',
      baseUrl: process.env.VUE_APP_STATIC_IMG
    }
  },
  mounted() {
    this.getDeatilData()
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
    getDeatilData() {
      const id = this.$route.query.recruitId
      getRecruitDetails({ id }).then((res) => {
        const data = res
        this.dataSource = data
        this.initDate(this.dataSource)
      })
    },
    initDate(data) {
      // 整理时间格式
      var start = data.start.split(' ')[0]
      var end = data.end.split(' ')[0]
      var newStart = start.split('-')
      var newEnd = end.split('-')
      this.start = `${newStart[0]}年${newStart[1]}月${newStart[2]}日`
      this.end = `${newEnd[0]}年${newEnd[1]}月${newEnd[2]}日`
    },
    share() {
      console.log(encodeURIComponent(document.location))
      var ftit = '药牛牛' // 分享出去得文章得标题
      var flink = 'https://upload.jianshu.io/users/upload_avatars/13787061/439ae608-6717-435e-916c-8fe08ead865a?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' // 分享出去logo
      window.open(`http://connect.qq.com/widget/shareqq/index.html?url=${encodeURIComponent(document.location)}&sharesource=qzone&title=${ftit}&pics=${flink}&summary=你的分享描述&desc=你的分享简述`)
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
        position: relative;
        top: 0;
        bottom: 0;
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
      color: #9b9b9b;
    }
  }

</style>
