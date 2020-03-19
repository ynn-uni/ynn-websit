<template>
  <div class="recruitdetail layout-width">
    <div class="recruit-info">
      <img :src="dataSource.cover" alt="" />
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

<script>
import { getNewsDetails } from '@/api'
export default {
  name: 'Recruit',
  components: {

  },
  data() {
    return {
      dataSource: {}

    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      const id = this.$route.query.newsId
      getNewsDetails({ id }).then((res) => {
        this.initData(res)
      })
    },
    initData(data) {
      if (!data) return
      data.created_at = this.initDate(data.created_at)
      this.dataSource = data
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
