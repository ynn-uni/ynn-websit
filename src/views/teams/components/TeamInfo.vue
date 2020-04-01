<template>
  <!-- <el-card shadow="always" class="teaminfo">
       <img :src="require('./../../../assets/images/team-info.png')" />
    </el-card>  -->

  <el-card :body-style="{ padding: '0px' }" class="team-info">

    <img :src="detail.cover&&baseUrl+detail.cover" />
    <div class="teaminfo">
      <h2>{{ detail.truename }}</h2>
      <h3>{{ detail.title }}</h3>

      <p v-html="detail.content" />
    </div>

  </el-card>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: {
    detail: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      baseUrl: process.env.VUE_APP_STATIC_IMG
    }
  }
}
</script>

<style lang="scss" scoped>
    .team-info::v-deep{
        // cursor: pointer;
        height: 423px;
        overflow: hidden;
        text-align: center;
        padding: 10px;
        img{
        //  width:370px;
         height:276px;
         vertical-align: top;
         object-fit: cover;
        }
       .teaminfo{
           text-align: center;
           h2{
            font-size:$fontSize18;
            font-weight:500;
            color:$colorTitle;
            margin-top: 20px;
           }
           h3{
            font-size:$fontSize18;
            font-weight:400;
            color:$colorTitle;
            margin: 10px 0
           }
           >p{
             overflow: hidden;
             height: 60px;
           }
           span{
            display: block;
            font-size:$fontSize14;
            font-weight:400;
            color:$colorContent;
            text-align: justify;
            padding: 0px 18px;
            @include utils-ellipsis-clamp;
            -webkit-line-clamp: 3;
           }
       }
    }
</style>
