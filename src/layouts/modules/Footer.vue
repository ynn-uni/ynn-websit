<template>
  <div class="page-footer">
    <div class="layout-width">
      <div class="links">
        <router-link to="/home">网站首页</router-link>
        <router-link to="/news">新闻资讯</router-link>
        <router-link to="/recruit">报名招募</router-link>
        <router-link to="/teams">专家团队</router-link>
        <router-link to="/about">关于我们</router-link>
        <!-- <a href="/home">网站首页</a> -->
        <!-- <a href="/news">新闻资讯</a>
        <a href="/recruit">报名招募</a>
        <a href="/teams">专家团队</a>
        <a href="/about">关于我们</a> -->
      </div>
      <div class="contact">
        <el-row>
          <el-col :span="8">
            <span>联系电话</span>：023-6484 6848
          </el-col>
          <el-col :span="8">
            <span>传真</span>：023-6484 6848
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <span>地址</span>：重庆市浪尖渝力科技有限公司
          </el-col>
          <el-col :span="8">
            <span>网址</span>：www.baidubaidubaidubaidubaidubaidu.com
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <span>邮箱</span>：023-6484 6848
          </el-col>
          <el-col :span="8">
            <span>手机</span>：023-6484 6848
          </el-col>
        </el-row>
      </div>
      <div class="qrcode">
        <img src="@/assets/images/erweima.png" />
        <span>药牛牛</span>
      </div>
    </div>
    <div class="copy-support">
      <span>版权所有：重庆市药牛牛公司</span>
      <span>渝ICP21214540号</span>
      <span>技术支持：重庆市浪尖渝力科技有限公司</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.page-footer {
  background: #4a4a4a;
  .layout-width {
    position: relative;
    .links {
      text-align: center;
      padding: 15px 0;
      a {
        color: #fff;
        font-size: 16px;
        padding: 0 15px;
        & + a {
          border-left: 1px solid #fff;
        }
      }
    }
    .contact {
      font-size: 14px;
      color: #fff;
      padding-bottom: 10px;
      .el-col {
        margin: 0 0 10px 0;
        span {
          display: inline-block;
          width: 4em;
          height: 16px;
          vertical-align: -1px;
          overflow: hidden;
          text-align: justify;
          text-align-last: justify;
          &::after {
            content: '';
            width: 100%;
            height: 0;
            margin: 0;
            display: inline-block;
            overflow: hidden;
          }
        }
      }
    }
    .qrcode {
      position: absolute;
      top: 10px;
      right: 0;
      width: 100px;
      height: 130px;
      text-align: center;
      background: #fff;
      padding-top: 5px;
      padding-left: 5px;
      padding-right: 5px;
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
  .copy-support {
    color: #fff;
    line-height: 28px;
    background: #000;
    text-align: center;
    span + span {
      margin-left: 60px;
    }
  }
}
</style>
