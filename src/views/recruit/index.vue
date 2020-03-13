<template>
  <div class="recruit layout-width">
    <el-row :gutter="45">
      <el-col v-for="(item, index) in RecruitList" :key="index" :span="8">
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
      dataSource: [
        {
          title: '「临床试验」琥珀酸曲格叻玎片「临床试验」琥珀酸曲格叻玎片',
          content: '「临床试验」琥珀酸曲格叻玎片酸曲格叻玎片招收志愿者琥珀酸曲格叻玎片酸曲格叻玎片招收志愿者琥珀酸曲格叻玎片酸曲格叻玎片招收志愿者',
          startDate: '2019.10.22',
          endDate: '2019.11.22',
          image: '',
          requireNum: 20
        },
        {
          title: '「临床试验」琥珀酸曲格叻玎片',
          content: '「临床试验」琥珀酸曲格叻玎片酸曲格叻玎片招收志愿者',
          startDate: '2019.10.22',
          endDate: '2019.11.22',
          image: '',
          requireNum: 20
        },
        {
          title: '「临床试验」琥珀酸曲格叻玎片',
          content: '「临床试验」琥珀酸曲格叻玎片酸曲格叻玎片招收志愿者',
          startDate: '2019.10.22',
          endDate: '2019.11.22',
          image: '',
          requireNum: 20
        },
        {
          title: '「临床试验」琥珀酸曲格叻玎片「临床试验」琥珀酸曲格叻玎片',
          content: '「临床试验」琥珀酸曲格叻玎片酸曲格叻玎片招收志愿者琥珀酸曲格叻玎片酸曲格叻玎片招收志愿者',
          startDate: '2019.10.22',
          endDate: '2019.11.22',
          image: '',
          requireNum: 20
        },
        {
          title: '「临床试验」琥珀酸曲格叻玎片',
          content: '「临床试验」琥珀酸曲格叻玎片酸曲格叻玎片招收志愿者',
          startDate: '2019.10.22',
          endDate: '2019.11.22',
          image: '',
          requireNum: 20
        },
        {
          title: '「临床试验」琥珀酸曲格叻玎片',
          content: '「临床试验」琥珀酸曲格叻玎片酸曲格叻玎片招收志愿者',
          startDate: '2019.10.22',
          endDate: '2019.11.22',
          image: '',
          requireNum: 20
        }
      ],
      pageName: 'recruit',
      pagenum: 1,
      loading: false,
      RecruitList: []
    }
  },
  created() {
    this.RecruitList = [
      {
        'id': 1,
        'title': '「临床试验」琥珀酸曲格叻玎片1',
        'cover': './../../assets/images/home_09.gif',
        'brief': '「临床试验」琥珀酸曲格叻玎片酸曲格叻玎片招收志愿者琥珀酸曲格叻玎片酸曲格叻玎片招收志愿者琥珀酸曲格叻玎片酸曲格叻玎片招收志愿者',
        'start': '2019.10.22 00:00:00',
        'end': '2019.11.22 23:59:59',
        'amount': 20,
        'time': '2019-10-20 14:09:20'
      },
      {
        'id': 2,
        'title': '「临床试验」琥珀酸曲格叻玎片2',
        'cover': './../../assets/images/home_09.gif',
        'brief': '「临床试验」琥珀酸曲格叻玎片酸曲格叻玎片招收志愿者琥珀酸曲格叻玎片酸曲格叻玎片招收志愿者琥珀酸曲格叻玎片酸曲格叻玎片招收志愿者',
        'start': '2019.10.22 00:00:00',
        'end': '2019.11.22 23:59:59',
        'amount': 20,
        'time': '2019-10-20 14:09:20'
      },
      {
        'id': 3,
        'title': '「临床试验」琥珀酸曲格叻玎片3',
        'cover': './../../assets/images/home_09.gif',
        'brief': '「临床试验」琥珀酸曲格叻玎片酸曲格叻玎片招收志愿者琥珀酸曲格叻玎片酸曲格叻玎片招收志愿者琥珀酸曲格叻玎片酸曲格叻玎片招收志愿者',
        'start': '2019.10.22 00:00:00',
        'end': '2019.11.22 23:59:59',
        'amount': 20,
        'time': '2019-10-20 14:09:20'
      },
      {
        'id': 4,
        'title': '「临床试验」琥珀酸曲格叻玎片4',
        'cover': './../../assets/images/home_09.gif',
        'brief': '「临床试验」琥珀酸曲格叻玎片酸曲格叻玎片招收志愿者',
        'start': '2019.10.22 00:00:00',
        'end': '2019.11.22 23:59:59',
        'amount': 20,
        'time': '2019-10-20 14:09:20'
      },
      {
        'id': 5,
        'title': '「临床试验」琥珀酸曲格叻玎片5',
        'cover': './../../assets/images/home_09.gif',
        'brief': '「临床试验」琥珀酸曲格叻玎片酸曲格叻玎片招收志愿者',
        'start': '2019.10.22 00:00:00',
        'end': '2019.11.22 23:59:59',
        'amount': 20,
        'time': '2019-10-20 14:09:20'
      },
      {
        'id': 6,
        'title': '「临床试验」琥珀酸曲格叻玎片6',
        'cover': './../../assets/images/home_09.gif',
        'brief': '「临床试验」琥珀酸曲格叻玎片酸曲格叻玎片招收志愿者',
        'start': '2019.10.22 00:00:00',
        'end': '2019.11.22 23:59:59',
        'amount': 20,
        'time': '2019-10-20 14:09:20'
      }]
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
  .recruit {
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
  }

</style>
