<template>
  <div class="container">
    <div class="header">
      <el-row class="top">
        <el-col :span="12" class="right">
          <span @click="goHome">首页</span>
        </el-col>
      </el-row>
    </div>
    <div class="search">
      <el-input placeholder="请输入问题" v-model="searchInput" class="searchInput">
        <el-button slot="append" @click="searchBtn">搜索</el-button>
      </el-input>
    </div>
    <div class="main">
      <div class="slider-left">
        <div class="item"
          :class="index==active?'active':''"
          v-for="(item, index) in sliderList" :key="index"
          @click="changeSelect(index, item)"
        >
          {{item.label}}
        </div>
      </div>
      <div class="slider-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import { queryForCodeSelect } from '@/api/helpCenter/helpCenter'
export default {
  data() {
    return {
      searchInput: '',
      sliderList: [],
      active: 0,
    }
  },
  created() {
    this.queryForCodeSelect()
  },
  methods: {
    // 获取所属分类
    queryForCodeSelect() {
      queryForCodeSelect().then(res => {
        if(res.repCode === '0000') {
          this.sliderList = res.repData.HELP_CATEGORY
          this.$store.commit('setCategory', res.repData.HELP_CATEGORY[0])
        }
      })
    },
    changeSelect(index,item) {
      this.active = index
      this.$router.push({
        path: `/helpCenList/list`,
        query: {id: index, val:item.value, title: item.label}
      })
    },
    // 搜索
    searchBtn() {
      // console.log(this.searchInput)
      // this.$root.$emit('vehFlag', this.searchInput);
      this.$router.push({
        path: `/helpCenList/search`,
        query: {
          searchInput: this.searchInput
        }
      })
    },
    // 返回首页
    goHome() {
      this.$router.push({
        path: '/index'
      })
    }
  }
}
</script>
<style scoped>
.container .header{
  width: 1200px;
  margin: 0 auto;
}
.container .header .top {
  padding: 20px;
}
.container .header .top .left{
  font-size: 18px;
  color: #646464;
}
.container .header .top .left span:last-child{
  margin-left: 15px;
  padding-left: 15px;
  font-size: 18px;
  color: #646464;
  line-height: 25px;
  display: inline-block;
  vertical-align: middle;
  position: relative;
}
.container .header .top .left span:last-child:before{
  content: "";
  display: inline-block;
  width: 1px;
  height: 18px;
  background: #BBB;
  margin-left: -15px;
  position: absolute;
  margin-top: 3px;
}
.container .header .top .left span img{
  vertical-align: middle;
}
.container .header .right{
  text-align: right;
  font-size: 18px;
  color: #646464;
}
.container .header .right span{
  cursor: pointer;
}
.search {
  width: 100%;
  text-align: center;
  background: #EFF5FB;
  padding: 20px 0 24px 0;
  box-sizing: border-box;
}
.searchInput {
  width: 30%;
}
.main{
  width: 1200px;
  margin: 20px auto 0;
  overflow: hidden;
}
.main .slider-left {
  width: 200px;
  float: left;
  border: 1px solid #AAC1DE;
  margin-bottom: 15px;
  padding: 12px 10px;
}
.main .slider-left .item{
  list-style: none;
  line-height: 30px;
  padding: 0 10px;
  color: #1E5494;
  font-size: 16px;
  cursor: pointer;
}
.active{
  background: #1E5494;
  color: #FFF!important;
  margin: 2px 0;
}
.main .slider-right{
  margin-left: 220px;
  margin-right: 10px;
  padding: 10px 0 0;
}
</style>
