<template>
  <div class="recruitdetail layout-width">
    <div class="recruit-info">
      <img :src="require('./../../../assets/images/red1.png')" alt="" />
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
          <span>临床试验</span>
        </div>
        <div class="type">
          <span>试验策划：</span>
          <span>临床试验口服玎片10天</span>
        </div>
        <div class="dis">
          这里是一些活动内容的基本介绍这里是一些活动内容的基本介绍这里是一些活动内容的基本介绍这里是一些活动内 容的基本介绍这里是一些活动内容的基本介绍这里是一些活动内容的基本介绍这里是一些活动内容的基本介绍这里 是一些活动内容的基本介绍
        </div>
        <div class="share">

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
      dataSource: {
        title: '「临床试验」琥珀酸曲格叻玎片「临床试验」琥珀酸曲格叻玎片',
        content: '「临床试验」琥珀酸曲格叻玎片酸曲格叻玎片招收志愿者琥珀酸曲格叻玎片酸曲格叻玎片招收志愿者',
        startDate: '2019.10.22',
        endDate: '2019.11.22',
        image: '',
        requireNum: 20,
        dis: `<p>这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项 </p>
      <p>这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项</p>
      <p>这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项</p>
      <img src="/static/img/red1.e0b27613.png" alt="">
      <p>这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项这里是一些介绍及注意事项</p>
    `
      }

    }
  },
  created() {
    console.log('newsID:' + this.$route.query.newsId)
  },
  methods: {

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
        color:rgba(155,155,155,1);
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
