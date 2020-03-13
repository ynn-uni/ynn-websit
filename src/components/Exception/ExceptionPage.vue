<template>
  <div class="exception">
    <div class="imgBlock">
      <div class="imgEle" :style="{backgroundImage: `url(${config[type].img})`}" />
    </div>
    <div class="content">
      <h1>{{ config[type].title }}</h1>
      <div class="desc">{{ config[type].desc }}</div>
      <div class="actions">
        <el-button type="primary" @click="handleToHome">返回首页</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import types from './type'

export default {
  name: 'Exception',
  props: {
    type: {
      type: String,
      default: '404'
    }
  },
  data() {
    return {
      config: types
    }
  },
  methods: {
    handleToHome() {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
<style lang="scss">
.exception {
  display: flex;
  align-items: center;
  height: 80%;
  min-height: 500px;

  .imgBlock {
    flex: 0 0 50%;
    width: 5%;
    padding-right: 152px;
    zoom: 1;
    &::before,
    &::after {
      content: ' ';
      display: table;
    }
    &::after {
      clear: both;
      height: 0;
      font-size: 0;
      visibility: hidden;
    }
  }

  .imgEle {
    float: right;
    width: 100%;
    max-width: 430px;
    height: 360px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: contain;
  }

  .content {
    flex: auto;

    h1 {
      margin-bottom: 24px;
      color: #434e59;
      font-weight: 600;
      font-size: 72px;
      line-height: 72px;
    }

    .desc {
      color: #999;
      margin-bottom: 16px;
      font-size: 20px;
      line-height: 28px;
    }

    .actions {
      button:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
}

@include media-sm {
  .exception {
    .imgBlock {
      margin-bottom: -24px;
      overflow: hidden;
    }
  }
}
@include media-xs {
  .exception {
    display: block;
    text-align: center;
    .imgBlock {
      width: 60%;
      margin: 0 auto 24px;
      padding-right: 0;
    }
  }
}
</style>
