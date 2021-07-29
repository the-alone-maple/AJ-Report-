<!--
 * @Author: lide1202@hotmail.com
 * @Date: 2021-3-13 11:04:24 
 * @Last Modified by:   lide1202@hotmail.com
 * @Last Modified time: 2021-3-13 11:04:24 
 !-->
<template>
  <div class="main-layout">
    <el-row :gutter="20">
      <el-col v-for="groupItem in reportGroups" :key="groupItem.groupId" :span="6">
        <div class="list">
          <header>{{ groupItem.groupName }}</header>
          <div v-for="report in groupItem.reportList" :key="report.reportId">
            <p @click="openDesign(report.reportId)">{{ report.reportName }}</p>
            <!-- <el-button type="success" size="mini" icon="el-icon-setting" circle plain @click="openDesign(report.reportId)" />
            <el-button type="primary" size="mini" icon="el-icon-view" circle plain /> -->
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  data() {
    return {
      reportGroups: [
        {
          groupId: 1,
          groupName: '时效类',
          reportList: [
            {
              reportId: 1,
              reportName: 'excel报表1',
            },
            {
              reportId: 2,
              reportName: 'excel报表2',
            },
            {
              reportId: 3,
              reportName: 'excel报表3',
            },
          ],
        },
        {
          groupId: 2,
          groupName: '货物量',
          reportList: [
            {
              reportId: 1,
              reportName: 'excel报表1',
            },
            {
              reportId: 2,
              reportName: 'excel报表2',
            },
            {
              reportId: 3,
              reportName: 'excel报表3',
            },
          ],
        },
      ],
    }
  },
  mounted() {},
  methods: {
    openDesign(reportId) {
      var routeUrl = this.$router.resolve({ path: '/report/excelreport/designer', query: { reportId: reportId }})
      window.open(routeUrl.href, '_blank')
    },
  },
}
</script>

<style scoped lang="scss">
.main-layout {
  position: relative;
  height: auto;
  padding: 0;
  margin: 0;
  .list {
    background: #fff;
    padding: 10px;
    margin: 10px 0;
    header {
      text-align: center;
      line-height: 40px;
      border-bottom: 1px solid #eee;
    }
    p {
      line-height: 30px;
      text-align: center;
      color: #666;
      font-size: 14px;
      cursor: pointer;
      margin: 5px 0;
      &:hover {
        background: rgb(234, 237, 252);
      }
    }
  }
}
</style>
