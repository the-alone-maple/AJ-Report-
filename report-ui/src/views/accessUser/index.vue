<template>
  <anji-crud ref="listPage" :option="crudOption">
    <template v-slot:buttonLeftOnTable>
    </template>

    <template slot="rowButton" slot-scope="props">
      <el-button type="text" @click="handleOpenDialogSetRoleForUser(props)" v-permission="'userManage:grantRole'">分配角色</el-button>
      <!--<el-button type="text" @click="handleOpenDialogSetRoleForUser(props)" v-permission="'userManage:resetPassword'">重置密码</el-button>-->
    </template>
    <!--自定义的卡片插槽，将在编辑详情页面，出现在底部新卡片-->
    <template v-slot:pageSection>
      <UserRole :login-name="loginName" :visib="dialogVisibleSetRoleForUser" @handleClose="dialogVisibleSetRoleForUser = false" />
    </template>
  </anji-crud>
</template>
<script>
import {
  accessUserList,
  accessUserAdd,
  accessUserDeleteBatch,
  accessUserUpdate,
  accessUserDetail,
} from '@/api/accessUser'
import UserRole from '@/views/accessUser/components/UserRole'
export default {
  name: 'AccessUser',
  components: {
    UserRole: UserRole,
  },
  data() {
    return {
      // 选中一个用户时，点授予角色时，弹出对话框
      dialogVisibleSetRoleForUser: false,
      loginName: '',

      // 页面渲染使用
      crudOption: {
        // 使用菜单做为页面标题
        title: '用户管理',
        // 详情页中输入框左边文字宽度
        labelWidth: '120px',
        // 查询表单条件
        queryFormFields: [
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
            label: '登录名',
            field: 'loginName',
          },
          {
            inputType: 'input',
            label: '真实姓名',
            field: 'realName',
          },
          {
            inputType: 'input',
            label: '手机号',
            field: 'phone',
          },
        ],
        // 操作按钮
        buttons: {
          query: {
            api: accessUserList,
            permission: 'userManage:query',
          },
          queryByPrimarykey: {
            api: accessUserDetail,
            permission: 'userManage:query',
          },
          add: {
            api: accessUserAdd,
            permission: 'userManage:insert',
          },
          delete: {
            api: accessUserDeleteBatch,
            permission: 'userManage:delete',
          },
          edit: {
            api: accessUserUpdate,
            permission: 'userManage:update',
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
            label: '登录名',
            placeholder: '',
            field: 'loginName',
            tableHide: true, // 表格中不显示
            editField: 'loginName',
            inputType: 'input',
            rules: [
              { required: true, message: '登录名必填', trigger: 'blur' },
              { min: 1, max: 64, message: '不超过64个字符', trigger: 'blur' },
            ],
            disabled: false,
          },
          {
            label: '真实姓名',
            placeholder: '',
            field: 'realName',
            fieldTableRowRenderer: (row) => {
              return `${row['realName']}[${row['loginName']}]`
            },

            editField: 'realName',
            inputType: 'input',
            rules: [
              { required: true, message: '真实姓名必填', trigger: 'blur' },
              { min: 1, max: 64, message: '不超过64个字符', trigger: 'blur' },
            ],
            disabled: false,
          },
          // {
          //   label: '密码',
          //   placeholder: '',
          //   field: 'password',
          //   tableHide: true, // 表格中不显示
          //   editHide: true,
          //   editField: 'password',
          //   inputType: 'input',
          //   rules: [
          //     // { required: true, message: '密码必填', trigger: 'blur' },
          //     { min: 1, max: 128, message: '不超过128个字符', trigger: 'blur' },
          //   ],
          //   disabled: false,
          // },
          {
            label: '手机号码',
            placeholder: '',
            field: 'phone',
            editField: 'phone',
            inputType: 'input',
            rules: [
              { min: 1, max: 16, message: '不超过16个字符', trigger: 'blur' },
            ],
            disabled: false,
          },
          {
            label: '用户邮箱',
            placeholder: '',
            field: 'email',
            editField: 'email',
            inputType: 'input',
            rules: [
              { min: 1, max: 64, message: '不超过64个字符', trigger: 'blur' },
            ],
            disabled: false,
          },
          {
            label: '备注',
            placeholder: '',
            field: 'remark',
            editField: 'remark',
            inputType: 'input',
            rules: [
              { min: 1, max: 512, message: '不超过512个字符', trigger: 'blur' },
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
            label: '最后一次登陆时间',
            placeholder: '',
            field: 'lastLoginTime',
            editField: 'lastLoginTime',
            inputType: 'input',
            rules: [],
            disabled: true,
          },
          {
            label: '最后一次登录IP',
            placeholder: '',
            field: 'lastLoginIp',
            editField: 'lastLoginIp',
            inputType: 'input',
            rules: [
              { min: 1, max: 16, message: '不超过16个字符', trigger: 'blur' },
            ],
            disabled: true,
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
  methods: {
    handleOpenDialogSetRoleForUser(props) {
      this.loginName = props.msg.loginName
      this.dialogVisibleSetRoleForUser = true
    },
  },
}
</script>

