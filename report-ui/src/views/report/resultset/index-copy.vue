<template>
  <anji-crud ref="listPage" :option="crudOption">
    <template v-slot:buttonLeftOnTable>
    </template>

    <!--
    <template slot="rowButton" slot-scope="props">
        <el-button type="primary" @click="customButtom(props)">行按钮</el-button>
    </template>
    -->
    <!--自定义的卡片插槽，将在编辑详情页面，出现在底部新卡片-->
    <!--这里可以将自定义的弹出框代码，放入到page中
    <template v-slot:pageSection>
      <div>插入底部html片段</div>
    </template>
    -->
  </anji-crud>
</template>
<script>
import { reportDataSetList, reportDataSetAdd, reportDataSetDeleteBatch, reportDataSetUpdate, reportDataSetDetail } from '@/api/reportDataSet'
export default {
  name: 'ReportDataSet',
  components: {
    anjiCrud: require('@/components/AnjiPlus/anji-crud/anji-crud').default,
  },
  data() {
    return {
      crudOption: {
        // 使用菜单做为页面标题
        title: this.$lang('GLOBAL_MENU_LANG.ReportDataSet'),
        // 详情页中输入框左边文字宽度
        labelWidth: '120px',
        // 查询表单条件
        queryFormFields: [
          {
            inputType: 'input',
            label: this.$lang('ReportDataSet.setCode'),
            field: 'setCode'
          },
          {
            inputType: 'input',
            label: this.$lang('ReportDataSet.setName'),
            field: 'setName'
          },
        ],
        // 操作按钮
        buttons: {
          query: {
            api: reportDataSetList,
            permission: 'resultsetManage:query'
          },
          queryByPrimarykey: {
            api: reportDataSetDetail,
            permission: 'resultsetManage:detail'
          },
          add: {
            api: reportDataSetAdd,
            permission: 'resultsetManage:insert'
          },
          delete: {
            api: reportDataSetDeleteBatch,
            permission: 'resultsetManage:delete'
          },
          edit: {
            api: reportDataSetUpdate,
            permission: 'resultsetManage:update'
          },
        },
        // 表格列
        columns: [
          {
            label: '',
            field: 'id',
            primaryKey: true, // 根据主键查询详情或者根据主键删除时, 主键的
            tableHide: true, // 表格中不显示
            editHide: true, // 编辑弹框中不显示
          },
          {
            label: this.$lang('ReportDataSet.setCode'),//数据集编码
            placeholder: '',
            field: 'setCode',
            editField: 'setCode',
            inputType: 'input',
            rules: [
              { min: 1, max: 50, message: '不超过50个字符', trigger: 'blur' }
            ],
            disabled: false,
          },
          {
            label: this.$lang('ReportDataSet.setName'),//数据集名称
            placeholder: '',
            field: 'setName',
            editField: 'setName',
            inputType: 'input',
            rules: [
              { min: 1, max: 100, message: '不超过100个字符', trigger: 'blur' }
            ],
            disabled: false,
          },
          {
            label: this.$lang('ReportDataSet.setDesc'),//数据集描述
            placeholder: '',
            field: 'setDesc',
            editField: 'setDesc',
            inputType: 'input',
            rules: [
              { min: 1, max: 255, message: '不超过255个字符', trigger: 'blur' }
            ],
            disabled: false,
          },
          {
            label: this.$lang('ReportDataSet.sourceCode'),//数据源编码
            placeholder: '',
            field: 'sourceCode',
            editField: 'sourceCode',
            inputType: 'input',
            rules: [
              { min: 1, max: 50, message: '不超过50个字符', trigger: 'blur' }
            ],
            disabled: false,
          },
          {
            label: this.$lang('ReportDataSet.dynSentence'),//动态查询sql或者接口中的请求体
            placeholder: '',
            field: 'dynSentence',
            editField: 'dynSentence',
            inputType: 'input',
            rules: [
              { min: 1, max: 2,048, message: '不超过2048个字符', trigger: 'blur' }
            ],
            disabled: false,
          },
          {
            label: this.$lang('ReportDataSet.caseResult'),//结果案例
            placeholder: '',
            field: 'caseResult',
            editField: 'caseResult',
            inputType: 'input',
            rules: [
              { min: 1, max: 65,535, message: '不超过65535个字符', trigger: 'blur' }
            ],
            disabled: false,
          },
          {
            label: this.$lang('ReportDataSet.enableFlag'),//0--已禁用 1--已启用  DIC_NAME=ENABLE_FLAG
            placeholder: '',
            field: 'enableFlag',
            editField: 'enableFlag',
            inputType: 'input',
            rules: [
            ],
            disabled: false,
          },
          {
            label: this.$lang('ReportDataSet.deleteFlag'),//0--未删除 1--已删除 DIC_NAME=DELETE_FLAG
            placeholder: '',
            field: 'deleteFlag',
            editField: 'deleteFlag',
            inputType: 'input',
            rules: [
            ],
            disabled: false,
          },
        ],
      },
    }
  },

  created() { },
  methods: {
    handleOpenDialog1() {
      alert('自定义按钮1点击事件')
    }
  }
}
</script>
