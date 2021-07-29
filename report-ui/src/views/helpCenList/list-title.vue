<template>
  <div class="container">
    <h2>{{title}}</h2>
    <div class="title">
      <div v-for="(item, index) in list" :key="index" class="item">• <span @click="itemClick(item)">{{item.helpTitle}}</span></div>
    </div>
  </div>
</template>
<script>
import { querytitleByCategory } from '@/api/helpCenter/helpCenter'
export default {
  data() {
    return {
      title: '',
      list: [],
    }
  },
  watch: {
    $route: {
      handler(obj) {
        this.title = obj.query.title
        this.querytitleByCategory(obj.query.val)
      },
      deep: true
    }
  },
  mounted() {
    this.title = this.$route.query.title
    this.querytitleByCategory(this.$route.query.val)
  },
  methods: {
    querytitleByCategory(value) {
      this.title = this.title ? this.title : this.$store.state.help.title
      let val = value ? value : this.$store.state.help.val
      querytitleByCategory({helpCategory: val}).then(res => {
        if(res.repCode === '0000') {
          this.list = res.repData
        }
      })
    },
    // 详情
    itemClick(item){
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
.container h2{
  font-size: 16px;
  color: #000;
  font-weight: bold;
  margin: 0 0 5px;
}
.container .title{
  margin: 0 0 0 5px;
}
.container .title .item{
  line-height: 30px;
  padding: 0 20px 0 0;
}
.container .title .item span{
  color: #1E5494;
  cursor: pointer;
}
.container .title .item span:hover{
  text-decoration:underline;
}
</style>