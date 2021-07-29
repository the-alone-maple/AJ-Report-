<template>
  <el-dialog class="tree_dialog" title="为用户分配角色" width="60%" :close-on-click-modal="false" center :visible.sync="visib" :before-close="closeDialog">
    <el-tree ref="roleTree" :data="treeData" show-checkbox node-key="id" default-expand-all :default-checked-keys="checkedKeys" />
    <div slot="footer" style="text-align: center">
      <el-button type="primary" plain @click="saveTreeData">保存</el-button>
      <el-button type="danger" plain @click="closeDialog">取消</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { getRoleTree, saveRoleTree } from '@/api/accessUser'
export default {
  props: {
    visib: {
      required: true,
      type: Boolean,
      default: false,
    },
    loginName: {
      required: true,
      type: String,
      default: () => {
        return ''
      },
    },
  },
  data() {
    return {
      checkedKeys: [], // 当前选中的keys
      treeData: [], // 所有的树结点
    }
  },
  watch: {
    visib(val) {
      if (val) {
        // 弹窗弹出时需要执行的逻辑
        console.log(1)
        this.getTreeData()
      }
    },
  },
  created() {},
  methods: {
    // 获取所有的树形结构数据
    async getTreeData() {
      const { code, data } = await getRoleTree(this.loginName)
      if (code != '200') return
      this.treeData = data.treeData
      this.checkedKeys = data.checkedKeys
    },

    async saveTreeData() {
      var params = {
        loginName: this.loginName,
        roleCodeList: this.$refs.roleTree.getCheckedKeys(true),
      }
      const { code } = await saveRoleTree(params)
      if (code != '200') return
      this.closeDialog()
    },

    // 弹窗关闭之前需要执行的逻辑
    closeDialog() {
      this.treeData = []
      this.checkedKeys = []
      this.$emit('handleClose')
    },
  },
}
</script>
