<template>
  <div class="container">
    <div class="searchNum">搜索"<font style="color:#C03">{{searchInput}}</font>",共找到<b>{{totalCount}}</b>个相关的问题。</div>
    <div class="infoBox" v-for="(item, index) in list" :key="index">
      <div class="infoItem">
        <div class="infoTitle" @click="goDetail(item)">{{item.helpTitle}}</div>
        <div class="infoCon" v-html="item.helpContent"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { searchKeyWord } from '@/api/helpCenter/helpCenter'
export default {
  data() {
    return {
      searchInput: '', // 搜索内容
      totalCount: 0,
      list: [],
    }
  },
  watch: {
    $route: {
      handler(obj) {
        let val = obj.query.searchInput
        this.searchInput = val
        this.searchKeyWord(val)
      },
      deep: true
    }
  },
  mounted() {
    this.searchInput = this.$route.query.searchInput
    this.searchKeyWord(this.searchInput)
  },
  methods: {
    searchKeyWord(val) {
      searchKeyWord({keyWord: val}).then(res => {
        if(res.repCode === '0000') {
          this.list = res.repData.list
          this.totalCount = res.repData.totalCount
        }
      })
    },
    goDetail(item) {
      this.$router.push({
        path: `/helpCenList/detail`,
        query: {
          id: item.helpId, 
        }
      })
    }
  }
}
</script>
<style scoped>
.container .searchNum {
  line-height: 32px;
  padding: 0 15px;
  color: #000;
  font-size: 14px;
  background: #FDFFC6;
  margin: 0 0 6px 0;
}
.container .infoBox{
  margin: 0 0 0 15px;
}
.container .infoItem{
  margin: 25px 0;
}
.container .infoItem .infoTitle{
  font-size: 16px;
  color: #1E5494;
  font-weight: bold;
  margin: 0 0 20px;
  cursor: pointer; 
}
.container .infoItem .infoTitle:hover{
  text-decoration: underline;
}
.container .infoItem .infoCon{
  color: #666;
}
</style>