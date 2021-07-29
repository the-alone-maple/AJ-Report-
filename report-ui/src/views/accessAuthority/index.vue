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
import {
  accessAuthorityList,
  accessAuthorityAdd,
  accessAuthorityDeleteBatch,
  accessAuthorityUpdate,
  accessAuthorityDetail,
} from '@/api/accessAuthority'
export default {
  name: 'AccessAuthority',
  data() {
    return {
      crudOption: {
        // 使用菜单做为页面标题
        title: '权限管理',
        // 详情页中输入框左边文字宽度
        labelWidth: '120px',
        // 查询表单条件
        queryFormFields: [
          {
            inputType: 'anji-tree', // 该类型将内容区一分为二，左侧20%显示树
            anjiTreeOption: {
              url: '/accessAuthority/menuTree', // 请求接口，将响应中id字段做为tree的id，将label字段做为tree的label
              enableFilter: true, // tree 是否有input 过滤
              isOpen: true, // true tree 展开 false 关闭
            },
            label: '所属菜单',
            field: 'target',
          },
          {
            inputType: 'anji-select', //form表单类型 input|input-number|anji-select(传递url或者dictCode)|anji-tree(左侧树)|date|datetime|datetimerange
            anjiSelectOption: {
              dictCode: 'ENABLE_FLAG',
            },
            label: '启用状态',
            field: 'enableFlag',
          },
          {
            inputType: 'input',
            label: '菜单代码',
            field: 'target',
          },
          {
            inputType: 'input',
            label: '菜单名称',
            field: 'targetName',
          },
          {
            inputType: 'input',
            label: '按钮代码',
            field: 'action',
          },
          {
            inputType: 'input',
            label: '按钮名称',
            field: 'actionName',
          },
        ],
        // 操作按钮
        buttons: {
          query: {
            api: accessAuthorityList,
            permission: 'authorityManage:query',
          },
          queryByPrimarykey: {
            api: accessAuthorityDetail,
            permission: 'authorityManage:query',
          },
          add: {
            api: accessAuthorityAdd,
            permission: 'authorityManage:insert',
          },
          delete: {
            api: accessAuthorityDeleteBatch,
            permission: 'authorityManage:delete',
          },
          edit: {
            api: accessAuthorityUpdate,
            permission: 'authorityManage:update',
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
            label: '菜单代码', //目标菜单
            placeholder: '',
            field: 'target',
            editField: 'target',
            tableHide: true, // 表格中不显示
            inputType: 'input',
            rules: [
              { required: true, message: '目标菜单必填', trigger: 'blur' },
              { min: 1, max: 64, message: '不超过64个字符', trigger: 'blur' },
            ],
            disabled: false,
          },
          {
            label: '菜单名称', //目标菜单名称
            placeholder: '',
            field: 'targetName',
            sortable: true,
            fieldTableRowRenderer: (row) => {
              return `${row['targetName']}[${row['target']}]`
            },

            editField: 'targetName',
            inputType: 'input',
            rules: [
              { required: true, message: '目标菜单名称必填', trigger: 'blur' },
              { min: 1, max: 128, message: '不超过128个字符', trigger: 'blur' },
            ],
            disabled: false,
          },
          {
            label: '按钮代码', //目标按钮
            placeholder: '',
            field: 'action',
            tableHide: true, // 表格中不显示

            editField: 'action',
            inputType: 'input',
            rules: [
              { required: true, message: '目标必填', trigger: 'blur' },
              { min: 1, max: 64, message: '不超过64个字符', trigger: 'blur' },
            ],
            disabled: false,
          },
          {
            label: '按钮名称', //目标按钮名称
            placeholder: '',
            field: 'actionName',
            fieldTableRowRenderer: (row) => {
              return `${row['actionName']}[${row['action']}]`
            },
            sortable: true,

            editField: 'actionName',
            inputType: 'input',
            rules: [
              { required: true, message: '目标按钮名称必填', trigger: 'blur' },
              { min: 1, max: 128, message: '不超过128个字符', trigger: 'blur' },
            ],
            disabled: false,
          },
          {
            label: '启用状态', //0--已禁用 1--已启用  DIC_NAME=ENABLE_FLAG
            placeholder: '',
            field: 'enableFlag',
            fieldTableRowRenderer: (row) => {
              return this.getDictLabelByCode('ENABLE_FLAG', row['enableFlag'])
            },
            editField: 'enableFlag',
            inputType: 'anji-select',
            anjiSelectOption: {
              dictCode: 'ENABLE_FLAG', //指定数据字典
            },
            colorStyle: {
              0: 'table-danger', //key为editField渲染的值（字典的提交值）'红色': 'danger','蓝色': 'primary','绿色': 'success','黄色': 'warning','灰色': 'info','白色'：''
              1: 'table-success',
            },
            rules: [
              { required: true, message: '启用状态必填', trigger: 'blur' },
            ],
            disabled: false,
          },
          {
            label: '排序', //
            placeholder: '',
            field: 'sort',
            editField: 'sort',
            inputType: 'input',
            rules: [],
            disabled: false,
          },

          {
            label: '创建人',
            placeholder: '',
            field: 'createBy',
            columnType: 'expand',
            editField: 'createBy',
            inputType: 'input',
            editHide: 'hideOnAdd', // 编辑弹框中不显示 true/false/'hideOnAdd hideOnView hideOnEdit'
            disabled: true,
          },
          {
            label: '创建时间',
            placeholder: '',
            field: 'createTime',
            columnType: 'expand',
            editField: 'createTime',
            inputType: 'input',
            editHide: 'hideOnAdd', // 编辑弹框中不显示 true/false/'hideOnAdd hideOnView hideOnEdit'
            disabled: true,
          },
          {
            label: '修改人',
            placeholder: '',
            field: 'updateBy',
            columnType: 'expand',
            editField: 'updateBy',
            inputType: 'input',
            editHide: 'hideOnAdd', // 编辑弹框中不显示 true/false/'hideOnAdd hideOnView hideOnEdit'
            disabled: true,
          },
          {
            label: '修改时间',
            placeholder: '',
            field: 'updateTime',
            columnType: 'expand',
            editField: 'updateTime',
            inputType: 'input',
            editHide: 'hideOnAdd', // 编辑弹框中不显示 true/false/'hideOnAdd hideOnView hideOnEdit'
            disabled: true,
          },
        ],
      },
    }
  },

  created() {},
  methods: {},
}
</script>

