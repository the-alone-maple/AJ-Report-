<template>
  <div class="index-container">
    <el-row align="middle" justify="center">
      <el-col :span="24" :offset="0" class="position">
        <div class="center"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'index1',
  data() {
    return {}
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {},
}
</script>

<style rel="stylesheet/scss" lang="scss">
.index-container {
  width: 100%;
  height: calc(100vh - 50px);
  overflow: hidden;
  background: #fff;
  background: -webkit-linear-gradient(
    75deg,
    #e9f0fb,
    #5bc4ef
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    75deg,
    #e9f0fb,
    #5bc4ef
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    75deg,
    #e9f0fb,
    #5bc4ef
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(75deg, #e9f0fb, #e9f0fb);
  .position {
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 0;
    position: absolute;
    top: 67px;
  }
  .center {
    width: 100%;
    height: 93vh;
    bottom: 0;
    position: relative;
    max-width: 1893px;
    background: url('../../../static/index-center.png');
    background-size: 100% 100%;
  }
}
</style>
