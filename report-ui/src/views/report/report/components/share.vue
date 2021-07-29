<template>
  <el-dialog class="tree_dialog" title="报表分享" width="60%" :close-on-click-modal="false" center :visible.sync="visib" :before-close="closeDialog">
    <div slot="footer" style="text-align: center">
      {{reportCode}}
      <el-button type="primary" plain @click="saveReportShare">保存</el-button>
      <el-button type="danger" plain @click="closeDialog">取消</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  props: {
    visib: {
      required: true,
      type: Boolean,
      default: false,
    },
    reportCode: {
      required: true,
      type: String,
      default: () => {
        return ''
      },
    },
  },
  data() {
    return {
    }
  },
  watch: {
    visib(val) {
      if (val) {
        // 弹窗弹出时需要执行的逻辑
      }
    },
  },
  created() {},
  methods: {

    async saveReportShare() {
      var params = {
      }
      //const { code } = await saveAuthorityTree(params)
      //if (code != '200') return
      this.closeDialog()
    },

    // 弹窗关闭之前需要执行的逻辑
    closeDialog() {
      this.$emit('handleClose')
    },
  },
}
</script>
