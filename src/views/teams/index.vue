<template>
  <div class="team layout-width">
    <div class="team-list">
      <el-row :gutter="45">
        <el-col v-for="(item, index) in teamList" :key="index" :span="8">
          <team-info :detail="item" />
        </el-col>
      </el-row>

    </div>
    <el-card shadow="always" class="show-more" :body-style="{padding:'5px'}">
      <div v-show="!loading" class="more" @click="handelmore">
        加载更多<i class="el-icon-arrow-right" /><i class="el-icon-arrow-right" />
      </div>
      <el-table
        v-show="loading"
        v-loading="loading"
        style="width: 100%;height:40px"
      />
    </el-card>
  </div>
</template>

<script>
import TeamInfo from './components/TeamInfo'

export default {
  name: 'Recruit',
  components: {
    TeamInfo
  },
  data() {
    return {
      teamList: [
        {
          'id': 1,
          'truename': '辇伟奇',
          'title': '主任医师',
          'cover': 'images\/thumb_160_240_20190326060232473.jpg',
          'content': '辇伟奇，医学博士，生物工程学博士后，硕士研究生导师，Ⅰ期病房科主任兼消化肿瘤内科副主任，主任医师；重庆市中青年医学高端人才，美国得克萨斯大学休斯顿健康科学中心国家公派访问学者'
        },
        {
          'id': 1,
          'truename': '辇伟奇',
          'title': '主任医师',
          'cover': 'images\/thumb_160_240_20190326060232473.jpg',
          'content': '辇伟奇，医学博士，生物工程学博士后，硕士研究生导师，Ⅰ期病房科主任兼消化肿瘤内科副主任，主任医师；重庆市中青年医学高端人才，美国得克萨斯大学休斯顿健康科学中心国家公派访问学者'
        },
        {
          'id': 1,
          'truename': '辇伟奇',
          'title': '主任医师',
          'cover': 'images\/thumb_160_240_20190326060232473.jpg',
          'content': '辇伟奇，医学博士，生物工程学博士后，硕士研究生导师，Ⅰ期病房科主任兼消化肿瘤内科副主任，主任医师；重庆市中青年医学高端人才，美国得克萨斯大学休斯顿健康科学中心国家公派访问学者'
        },
        {
          'id': 1,
          'truename': '辇伟奇',
          'title': '主任医师',
          'cover': 'images\/thumb_160_240_20190326060232473.jpg',
          'content': '辇伟奇，医学博士，生物工程学博士后，硕士研究生导师，Ⅰ期病房科主任兼消化肿瘤内科副主任，主任医师；重庆市中青年医学高端人才，美国得克萨斯大学休斯顿健康科学中心国家公派访问学者'
        },
        {
          'id': 1,
          'truename': '辇伟奇',
          'title': '主任医师',
          'cover': 'images\/thumb_160_240_20190326060232473.jpg',
          'content': '辇伟奇，医学博士，生物工程学博士后，硕士研究生导师，Ⅰ期病房科主任兼消化肿瘤内科副主任，主任医师；重庆市中青年医学高端人才，美国得克萨斯大学休斯顿健康科学中心国家公派访问学者'
        }
      ],
      pagenum: 1,
      loading: false
    }
  },
  methods: {
    handelmore() {
      this.pagenum++
      console.log(this.pagenum)
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
  .team {
    padding-top: 50px;
    .show-more{
      margin-bottom: 50px;
      display: flex;
      justify-content: center;
      // height: 40px;
      .more{
        cursor: pointer;
        font-size:16px;
        font-weight:400;
        color:rgba(54,174,173,1);
        line-height:40px;
        i{
          display: inline-block;
          width: 10px;
        }
      }
    }
    .team-list{
      .el-col{
        color:$colorContent;
      }
    }
  }

</style>
