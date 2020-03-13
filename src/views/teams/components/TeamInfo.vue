<template>
  <!-- <el-card shadow="always" class="teaminfo">
       <img :src="require('./../../../assets/images/team-info.png')" />
    </el-card>  -->
  <el-card :body-style="{ padding: '0px' }" class="team-info">
    <img :src="require('./../../../assets/images/team-info.png')" />
    <div class="teaminfo">
      <h2>{{ detail.name }}</h2>
      <h3>{{ detail.label }}</h3>
      <p>{{ detail.dis }}</p>
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
    return {}
  }
}
</script>

<style lang="scss" scoped>
    .team-info{
        // cursor: pointer;
        margin-bottom: 50px;
        height: 443px;
        image{
         width:370px;
         height:276px;
         vertical-align: middle;
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
           p{
            font-size:$fontSize14;
            font-weight:400;
            color:$colorContent;
            text-align: justify;
            padding: 5px 18px;
            padding-bottom: 15px;
           }
       }
    }
</style>
