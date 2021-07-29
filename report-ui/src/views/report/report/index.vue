<!--
 * @Author: lide1202@hotmail.com
 * @Date: 2021-3-13 11:04:24
 * @Last Modified by:   lide1202@hotmail.com
 * @Last Modified time: 2021-3-13 11:04:24
 !-->
<template>
  <div class="app-container">
    <el-form ref="form" :model="params" :rules="rules" label-width="120px" v-permission="'reportManage:query'">
      <!-- 搜索 -->
      <el-row :gutter="10">
        <el-col :xs="24" :sm="20" :md="12" :lg="6" :xl="4">
          <el-form-item label="名称">
            <el-input v-model="params.reportName" size="mini" clearable placeholder="名称" class="filter-item" />
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="20" :md="12" :lg="6" :xl="4">
          <el-form-item label="报表编码">
            <el-input v-model="params.reportCode" size="mini" clearable placeholder="报表编码" class="filter-item" />
          </el-form-item>
        </el-col>
        <!-- <el-col :xs="24"
                :sm="20"
                :md="12"
                :lg="6"
                :xl="4">
          <el-form-item label="报表类型"
                        size="mini">
            <Dictionary v-model="params.reportType"
                        :updata-dict="params.reportType"
                        :dict-key="'REPORT_TYPE'" />
          </el-form-item>
        </el-col> -->
        <el-col :xs="24" :sm="20" :md="4" :lg="4" :xl="4" class="query">
          <el-button type="primary" size="mini" @click="search('form')">查询</el-button>
          <el-button type="danger" size="mini" @click="reset('form')">重置</el-button>
        </el-col>
      </el-row>
    </el-form>
    <el-button type="primary" size="mini" icon="el-icon-plus" @click="showAddReportModel()" v-permission="'reportManage:insert'">新增</el-button>

    <!--表格渲染-->
    <el-table v-loading="listLoading" border :data="list" element-loading-text="Loading" class="mt10" style="width: 100%">
      <el-table-column align="center" label="序号" type="index" min-width="40" />
      <!-- <el-table-column label="报表类型">
        <template slot-scope="scope">
          {{scope.row.reportType | reportTableType}}
        </template>
      </el-table-column> -->
      <el-table-column prop="reportName" label="名称" />
      <el-table-column prop="reportCode" label="报表编码" />
      <!-- <el-table-column prop="reportGroup"
                       label="分组">
        <template slot-scope="scope">
          {{scope.row.reportGroup | filterPushType}}
        </template>
      </el-table-column> -->
      <el-table-column prop="reportDesc" label="备注" />
      <el-table-column prop="createBy" label="创建人" />
      <el-table-column prop="createTime" label="创建时间" />
      <el-table-column prop="updateBy" label="更新人" />
      <el-table-column prop="updateTime" label="更新时间" />
      <el-table-column label="操作" width="200px" align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="share(scope.row)" v-permission="'bigScreenManage:share'">分享</el-button>
          <el-button type="text" @click="preview(scope.row)" v-permission="'bigScreenManage:view'">预览</el-button>
          <el-button type="text" @click="design(scope.row)" v-permission="'bigScreenManage:design'">设计</el-button>
          <el-button type="text" @click="showAddReportModel(scope.row)" v-permission="'reportManage:update'">编辑</el-button>
          <el-button type="text" @click="del(scope.row)" v-permission="'reportManage:delete'">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination :total="totalCount" :page-sizes="[10, 20, 50, 100]" :page-size="params.pageSize" :current-page="params.pageNumber" layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
    <!--表单组件-->
    <el-dialog title="项目基础配置" width="50%" :close-on-click-modal="false" center :visible.sync="basicDialog" @close="closeDialog">
      <el-form ref="userForm" :model="dialogForm" :rules="rules" size="small" style="min-height:200px" label-width="100px">
        <el-row :gutter="10">
          <!-- <el-col :xs="24"
                  :sm="20"
                  :md="6"
                  :lg="6"
                  :xl="6"> -->
          <!-- <el-form-item label="报表类型">
              <el-select v-model="dialogForm.reportType"
                         placeholder="报表类型"
                         clearable>
                <el-option v-for="item in dictionaryTypeOptions"
                           :key="item.id"
                           :label="item.text"
                           :value="item.id" />
              </el-select>
            </el-form-item> -->
          <!-- </el-col> -->
          <el-col :xs="24" :sm="20" :md="12" :lg="12" :xl="12">
            <el-form-item label="名称" prop="reportName">
              <el-input v-model="dialogForm.reportName" />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="20" :md="12" :lg="12" :xl="12">
            <el-form-item label="报表编码" prop="reportCode">
              <el-input :disabled="reportCodeDisable" v-model="dialogForm.reportCode" />
            </el-form-item>
          </el-col>
        </el-row>
        <!-- <el-row>
          <el-col :xs="24"
                  :sm="20"
                  :md="6"
                  :lg="6"
                  :xl="6">
            <el-form-item label="分组">
              <el-select v-model="dialogForm.reportGroup"
                         placeholder="请选择"
                         clearable>
                <el-option v-for="item in dictionaryGroupOptions"
                           :key="item.id"
                           :label="item.text"
                           :value="item.id" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row> -->
        <el-col :span="24">
          <el-form-item label="备注">
            <el-input v-model="dialogForm.reportDesc" type="textarea" placeholder="请输入内容" show-word-limit />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="缩略图">
            <el-upload class="avatar-uploader" :action="requestUrl" :headers="headers" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
              <img v-if="dialogForm.reportImage" :src="
                  dialogForm.reportImage == null
                    ? require('../../../assets/images/charts.jpg')
                    : dialogForm.reportImage
                " class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-col>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="basicDialog = false">取消</el-button>
        <el-button type="primary" @click="UserConfirm">保存</el-button>
      </div>
    </el-dialog>
    <Share :visib="visibleForShareDialog" :reportCode="reportCodeForShareDialog" @handleClose="visibleForShareDialog = false" />
  </div>
</template>

<script>
import { dataDictionary } from '@/api/common'
import { getToken } from '@/utils/auth'
import { reportPageList, addReport, editReport, delReport } from '@/api/report'
import Dictionary from '@/components/Dictionary/index'
import Share from '@/views/report/report/components/share'
var typeData
export default {
  name: 'Report',
  components: { Dictionary, Share },
  filters: {
    filterPushType(val) {
      for (var i = 0; i < typeData.dictionaryGroupOptions.length; i++) {
        if (typeData.dictionaryGroupOptions[i].id == val) {
          return typeData.dictionaryGroupOptions[i].text
        }
      }
    },
    reportTableType(val) {
      for (var i = 0; i < typeData.dictionaryTypeOptions.length; i++) {
        if (typeData.dictionaryTypeOptions[i].id == val) {
          return typeData.dictionaryTypeOptions[i].text
        }
      }
    },
  },
  data() {
    return {
      params: {
        reportCode: '',
        reportName: '',
        // reportType: '',
        pageNumber: 1,
        pageSize: 10,
        order: 'DESC',
        sort: 'update_time',
      },
      dialogForm: {
        reportName: '',
        reportCode: '',
        // reportType: '',
        // reportGroup: '',
        reportDesc: '',
        reportImage: '',
      },
      basicDialog: false,
      listLoading: true,
      list: null,
      totalCount: 0,
      totalPage: 0,
      dictionaryTypeOptions: [], // 报表类型
      dictionaryGroupOptions: [], // 报表分组
      rules: {},
      reportCodeDisable: false,
      requestUrl: process.env.BASE_API + '/file/upload',
      headers: {
        Authorization: getToken(),
      },

      // 分享
      visibleForShareDialog: false,
      reportCodeForShareDialog: '',
    }
  },

  mounted() {},
  // 在生命周期 beforeCreate里面改变this指向
  beforeCreate: function () {
    typeData = this
  },
  created() {
    this.queryByPage()
  },
  methods: {
    // 查询
    search() {
      this.params.pageNumber = 1
      this.queryByPage()
    },
    // 重置
    reset(formName) {
      this.$refs[formName].resetFields()
      this.params.reportName = ''
      this.params.reportCode = ''
      // this.params.reportType = ''
      this.params.pageNumber = 1
      this.queryByPage()
    },
    async queryByPage() {
      const res = await reportPageList(this.params)
      if (res.code != '200') return
      this.listLoading = true
      this.list = res.data.records
      this.list.forEach((value) => {
        value['reportNameCode'] =
          value.reportName + '[' + value.reportCode + ']'
      })
      this.totalCount = res.data.total
      this.totalPage = res.data.pages
      this.listLoading = false
    },

    handleAvatarSuccess(res) {
      this.dialogForm.reportImage = res.data.urlPath
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      return true
    },

    // 打开模态框
    showAddReportModel(val) {
      this.basicDialog = true
      if (val === undefined) {
        this.reportCodeDisable = false
        this.dialogForm = {
          reportName: '',
          reportCode: '',
          // reportType: '',
          reportDesc: '',
          reportImage: '',
        }
      } else {
        this.dialogForm = val
        this.reportCodeDisable = true
      }
    },
    // 分享
    share(val) {
      this.reportCodeForShareDialog = val.reportCode
      this.visibleForShareDialog = true
    },
    // 预览
    preview(val) {
      var routeUrl = this.$router.resolve({
        path: '/bigscreen/viewer',
        query: { reportCode: val.reportCode },
      })
      window.open(routeUrl.href, '_blank')
      // }
    },
    // 设计
    design(val) {
      var routeUrl = this.$router.resolve({
        path: '/bigscreen/designer',
        query: {
          reportCode: val.reportCode,
          reportId: val.id,
          accessKey: val.accessKey,
        },
      })
      window.open(routeUrl.href, '_blank')
      // }
    },
    // 删除
    async delReport(val) {
      const { code } = await delReport(val)
      if (code != '200') return
      this.queryByPage()
    },
    del(val) {
      this.$confirm('确定删除此条数据, 是否继续?', '删除', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.delReport(val)
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消删除',
          })
        })
    },
    // 关闭模态框
    closeDialog(bool) {
      bool && this.search('form') // 点确定关闭弹窗的时候才会刷新列表
      this.$refs['userForm'].resetFields()
      this.basicDialog = false
    },
    handleSizeChange(val) {
      this.params.pageSize = val
      this.queryByPage()
    },
    handleCurrentChange(val) {
      this.params.pageNumber = val
      this.queryByPage()
    },
    // 提交
    UserConfirm() {
      debugger
      this.$refs.form.validate(async (valid, obj) => {
        if (valid) {
          if (this.dialogForm.id == undefined) {
            const { code } = await addReport(this.dialogForm)
            if (code != '200') return
          } else {
            const { code } = await editReport(this.dialogForm)
            if (code != '200') return
          }
          this.closeDialog(true)
        } else {
          return
        }
      })
    },
  },
}
</script>

<style>
.avatar-uploader .el-upload {
  /*border: 1px dashed #d9d9d9;*/
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 30%;
  height: 30%;
  display: block;
}
.query {
  margin-top: 5px;
}
</style>
