<template>
  <div class="team layout-width">
    <div class="team-list">
      <el-row :gutter="45">
        <el-col v-for="(item, index) in teamList" :key="index" :span="8">

          <el-popover
            placement="right"
            width="400"
            trigger="hover"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
          >
            <div v-html="item.content" />
            <team-info slot="reference" :detail="item" />

          </el-popover>
        </el-col>
      </el-row>

    </div>
    <el-card v-if="teamList.length>=9" shadow="always" class="show-more" :body-style="{padding:'5px'}">
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
import { getExpertList } from '@/api'
export default {
  name: 'Recruit',
  components: {
    TeamInfo
  },
  data() {
    return {
      teamList: [],
      page: 1,
      size: 9,
      loading: false
    }
  },
  mounted() {
    this.getTeamData()
  },
  methods: {
    getTeamData() {
      getExpertList({ page: this.page, size: this.size }).then((res) => {
        const data = res.data
        if (this.page > 1) {
          data.forEach(val => {
            this.teamList.push(val)
          })
        } else {
          this.teamList = data
        }
      })
    },
    handelmore() {
      this.page++
      this.loading = true
      this.getTeamData()
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
