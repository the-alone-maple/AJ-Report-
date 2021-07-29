<template>
  <div class="container">
    <el-button type="primary" size="mini" plain @click="goBack">返回</el-button>
    <h2 class="helpTitle">{{helpTitle}}</h2>
    <div class="answer" v-html="helpContent"></div>
  </div>
</template>
<script>
import { queryById } from '@/api/helpCenter/helpCenter'
export default {
  data() {
    return {
      id: '',
      helpContent: '',
      helpTitle: ''
    }
  },
  mounted() {
    this.id = this.$route.query.id
    this.queryById()
  },
  methods: {
    queryById() {
      queryById({helpId: this.id}).then(res => {
        if(res.repCode === '0000') {
          let helpContent = res.repData.helpContent
          let helpContentVideo = helpContent.replace(/<oembed url/ig,"<video controls='controls' src").replace(/oembed>/ig, "video>")
          this.helpContent = helpContentVideo;
          this.helpTitle = res.repData.helpTitle
        }
      })
    }
  }
}
</script>
<style scope>
.container .helpTitle{
  font-size: 16px;
  color: #000;
  font-weight: bold;
  margin: 20px 0 5px;
}
.container .answer{
  margin: 20px 0 0 0;
}
.answer .table table{
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px double #b3b3b3;
}
.answer .table table td, .answer .table table th{
  min-width: 2em;
  padding: .4em;
  border: 1px solid #bfbfbf;
}
video{
  width: 100%;
}
</style>