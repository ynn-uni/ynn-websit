<template>
  <div class="recruit layout-width">
    <el-row :gutter="45">
      <el-col v-for="(item, index) in RecruitList" :key="index" class="project-item" :span="8">
        <project-item :detail="item" :pagename="pageName" />
      </el-col>
    </el-row>
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

import ProjectItem from '@/components/Recruit/ProjectItem'
export default {
  name: 'Recruit',
  components: {
    ProjectItem
  },
  data() {
    return {
      RecruitList: [
        {
          'id': 1,
          'title': '评价JMT101治疗晚期实体肿瘤的安全性、耐受性以及药物代谢动力学的I期临床研究',
          'cover': 'images\/20200314112540.png',
          'start': '2020-03-14',
          'end': '2020-03-31',
          'amount': 15,
          'sex': '不限',
          'age': '18-75',
          'condition': '晚期实体瘤患者',
          'status': 1
        },
        {
          'id': 2,
          'title': '评价JMT101治疗晚期实体肿瘤的安全性、耐受性以及药物代谢动力学的I期临床研究',
          'cover': 'images\/20200314112540.png',
          'start': '2020-03-14',
          'end': '2020-03-31',
          'amount': 15,
          'sex': '不限',
          'age': '18-75',
          'condition': '晚期实体瘤患者',
          'status': 1
        },
        {
          'id': 3,
          'title': '评价JMT101治疗晚期实体肿瘤的安全性、耐受性以及药物代谢动力学的I期临床研究',
          'cover': 'images\/20200314112540.png',
          'start': '2020-03-14',
          'end': '2020-03-31',
          'amount': 15,
          'sex': '不限',
          'age': '18-75',
          'condition': '晚期实体瘤患者',
          'status': 1
        },
        {
          'id': 3,
          'title': '评价JMT101治疗晚期实体肿瘤的安全性、耐受性以及药物代谢动力学的I期临床研究',
          'cover': 'images\/20200314112540.png',
          'start': '2020-03-14',
          'end': '2020-03-31',
          'amount': 15,
          'sex': '不限',
          'age': '18-75',
          'condition': '晚期实体瘤患者',
          'status': 1
        }, {
          'id': 3,
          'title': '评价JMT101治疗晚期实体肿瘤的安全性、耐受性以及药物代谢动力学的I期临床研究',
          'cover': 'images\/20200314112540.png',
          'start': '2020-03-14',
          'end': '2020-03-31',
          'amount': 15,
          'sex': '不限',
          'age': '18-75',
          'condition': '晚期实体瘤患者',
          'status': 1
        }
      ],
      pageName: 'recruit',
      pagenum: 1,
      loading: false
    }
  },
  created() {
  },
  methods: {
    handelmore() {
      this.pagenum++
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
  .recruit {
    padding-top: 50px;
    .project-item {
      position: relative;
      top: 0px;
      transition: all 0.3s linear;
      &:hover{
        top:-10px;
      }

    }
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
  }

</style>
