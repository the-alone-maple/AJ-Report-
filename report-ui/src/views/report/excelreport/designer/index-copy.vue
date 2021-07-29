<!--
 * @Author: lide1202@hotmail.com
 * @Date: 2021-3-13 11:04:24
 * @Last Modified by:   lide1202@hotmail.com
 * @Last Modified time: 2021-3-13 11:04:24
 !-->
<template>
  <div class="layout">
    <div class="layout-left">
      <div class="add-collection">
        数据集管理
        <el-button type="text"
                   icon="el-icon-circle-plus-outline"
                   @click="queryAllDataSet()" />
      </div>
      <div>
        <el-collapse v-for="(item, indexs) in dataSet"
                     :key="indexs"
                     v-model="activeNames"
                     @change="handleChange">
          <el-collapse-item :title="item.setName"
                            :name="item.id">
            <el-popconfirm :title="'确定删除' + item.setName + '吗？'"
                           @onConfirm="del(item)">
              <el-button slot="reference"
                         type="text"
                         icon="el-icon-close"
                         class="delect-all" />
            </el-popconfirm>
            <draggable v-model="item.setParamList"
                       :sort="false"
                       group="people"
                       style="margin-left: 10px"
                       @start="onStart(item.setCode)"
                       @end="onEnd">
              <!-- <transition-group> -->
              <div v-for="(i, index) in item.setParamList"
                   :key="index"
                   class="field-container">
                <div class="aRow">
                  <span>{{ i }}</span>
                </div>
              </div>
              <!-- </transition-group> -->
            </draggable>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <div class="layout-middle">
      <div class="push_btn">
        <el-tooltip class="item"
                    effect="dark"
                    content="预览"
                    placement="bottom-start">
          <el-button type="text"
                     @click="preview()">
            <i class="iconfont iconfuzhi"></i>
          </el-button>
        </el-tooltip>
        <el-tooltip class="item"
                    effect="dark"
                    content="保存"
                    placement="bottom-start">
          <el-button type="text"
                     @click="save()">
            <i class="iconfont iconsave"></i>
          </el-button>
        </el-tooltip>
      </div>
      <!-- <div id="x-spreadsheet-demo"
           class="excel-designer" /> -->
      <div id="luckysheet"
           style="margin:0px;padding:0px;position:absolute;width:100%;left: 0px;top: 30px;bottom:0px;" />
      <div id="qrCode"
           ref="qrCodeDiv" />
      <img id="barCode">
    </div>

    <div class="layout-right">
      <el-tabs v-model="activeName"
               @tab-click="handleClick">
        <el-tab-pane label="基础配置"
                     name="first">
          <el-form ref="rightForm"
                   :model="rightForm"
                   label-width="60px">
            <el-form-item label="坐标">
              <el-input v-model="rightForm.coordinate" />
            </el-form-item>
            <el-form-item label="值">
              <el-input v-model="rightForm.value" />
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane v-if="dialogVisible"
                     label="二维码配置"
                     name="second">
          <el-form ref="qrCodeForm"
                   :model="qrCodeForm"
                   label-width="60px">
            <el-form-item label="二维码内容">
              <el-input v-model="qrCodeForm.content" />
            </el-form-item>
            <el-form-item label="宽度">
              <el-input v-model="qrCodeForm.width" />
            </el-form-item>
            <el-form-item label="高度">
              <el-input v-model="qrCodeForm.height" />
            </el-form-item>
            <el-form-item label="前景色">
              <ColorPicker v-model="qrCodeForm.colorDark"
                           @change="(val) => changed(val,qrCodeForm.colorDark)" />
            </el-form-item>
            <el-form-item label="背景色">
              <ColorPicker v-model="qrCodeForm.colorLight"
                           @change="(val) => changed(val,qrCodeForm.colorLight)" />
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane v-if="dialogBarCode"
                     label="条形码配置"
                     name="second">
          <el-form ref="barCodeForm"
                   :model="barCodeForm"
                   label-width="60px">
            <el-form-item label="条形码内容">
              <el-input v-model="barCodeForm.content" />
            </el-form-item>
            <el-form-item label="宽度">
              <el-input v-model="barCodeForm.width" />
            </el-form-item>
            <el-form-item label="高度">
              <el-input v-model="barCodeForm.height" />
            </el-form-item>
            <el-form-item label="前景色">
              <ColorPicker v-model="barCodeForm.lineColor"
                           @change="(val) => changed(val,barCodeForm.lineColor)" />
            </el-form-item>
            <el-form-item label="背景色">
              <ColorPicker v-model="barCodeForm.background"
                           @change="(val) => changed(val,barCodeForm.background)" />
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>

    </div>

    <el-dialog title="数据集管理"
               :visible.sync="outerVisible">
      <el-table ref="multipleTable"
                :data="dataSetData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection"
                         width="55" />
        <el-table-column label="数据集名称"
                         width="120"
                         prop="setName" />
        <el-table-column prop="setDesc"
                         label="数据集描述"
                         width="180" />
        <el-table-column prop="setCode"
                         label="数据集编码"
                         show-overflow-tooltip />
      </el-table>

      <div slot="footer"
           class="dialog-footer">
        <el-button @click="outerVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="checkDataSet()">确定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="打印设置"
               :visible.sync="printVisible"
               width="30%"
               :before-close="handleClose">

      <el-form label-position="right"
               label-width="90px"
               :model="formPrintSetting">
        <el-row>
          <el-col :span="24">
            <el-form-item label="纸张大小">
              <el-select v-model="formPrintSetting.size"
                         placeholder="请选择打印尺寸"
                         @change="onPaperChange">
                <el-option v-for="(item, index) in paperList"
                           :key="index"
                           :index="index"
                           :value="item.paper"
                           :label="getPaperText(item)" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="14">
            <el-form-item label="对应像素">
              <el-input v-model="formPrintSetting.pixel1"
                        disabled />
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label=" "
                          label-width="12px">
              <el-input v-model="formPrintSetting.pixel2"
                        disabled />
            </el-form-item>
          </el-col>
        </el-row>

      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="printVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="getWindowDpi()">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { queryAllDataSet, detail, detailByReportCode } from '@/api/GaeaReport'
import { addReportExcel, editReportExcel } from '@/api/report'
// import "@/components/x-spreadsheet/dist/xspreadsheet.js"
import ColorPicker from '../../bigscreen/designer/form/colorPicker.vue'
import QRCode from 'qrcodejs2'
import JsBarcode from 'jsbarcode'
import LuckyExcel from 'luckyexcel'
export default {
  name: 'Excels',
  components: {
    draggable,
    ColorPicker
  },
  data () {
    return {
      activeName: 'first',
      activeNames: ['1'],
      reportId: null,
      accessKey: null,
      reportCode: '',
      options: [],
      sheet: {},
      dataSetData: [],
      reportExcelDto: {
        id: null,
        jsonStr: '',
        setCodes: '',
        setParam: '',
        reportCode: '',
      },
      multipleSelection: [],
      rightForm: {
        coordinate: '',
        value: '',
      },
      qrCodeForm: {
        type: 'QRCode',
        content: 'https://www.baidu.com',
        width: 125,
        height: 125,
        colorDark: '#333333', // 二维码颜色
        colorLight: '#ffffff', // 二维码背景色
        correctLevel: QRCode.CorrectLevel.L, // 容错率，L/M/H
        ri: 0,
        ci: 0,
        currentSrc: '',
      },
      barCodeForm: {
        type: 'BarCode',
        format: 'CODE39',
        displayValue: true,
        content: '99999999999',
        lineColor: '#000',
        background: '#fff',
        width: 100,
        height: 40,
        ri: 0,
        ci: 0,
        currentSrc: '',
      },
      formPrintSetting: {
        size: '',
        pixel1: '',
        pixel2: ''
      },
      pixelList: [
        { paper: 'A4', width: 210, height: 297 },
        { paper: 'A3', width: 297, height: 420 },
        { paper: 'Letter', width: 216, height: 279 },
        { paper: 'Legal', width: 216, height: 355 },
        { paper: 'Executive', width: 184, height: 266 }
      ],
      dataSet: [],
      outerVisible: false,
      printVisible: false,
      pop: false,
      setCode: null,
      dialogVisible: false,
      dialogBarCode: false,
      paperList: [],
      // 纸张标识
      paper: '',
      // 纸张宽高
      width: '',
      height: '',
      // 清晰度
      definition: '',
      // 是否套打
      isBackend: '',
      dpi: '',
      pxWidth: '',
      pxHeight: '',
      show: false,
      config: '',
      settings: {},
      qrCodeList: [],
      moveDataelse: {
        x: null,
        y: null
      }

    }
  },
  mounted () {
    this.options = [
      { text: 'Money Manager.xlsx', value: 'https://minio.cnbabylon.com/public/luckysheet/money-manager-2.xlsx' },
      { text: 'Activity costs tracker.xlsx', value: 'https://minio.cnbabylon.com/public/luckysheet/Activity%20costs%20tracker.xlsx' },
      { text: 'House cleaning checklist.xlsx', value: 'https://minio.cnbabylon.com/public/luckysheet/House%20cleaning%20checklist.xlsx' },
      { text: 'Student assignment planner.xlsx', value: 'https://minio.cnbabylon.com/public/luckysheet/Student%20assignment%20planner.xlsx' },
      { text: 'Credit card tracker.xlsx', value: 'https://minio.cnbabylon.com/public/luckysheet/Credit%20card%20tracker.xlsx' },
      { text: 'Blue timesheet.xlsx', value: 'https://minio.cnbabylon.com/public/luckysheet/Blue%20timesheet.xlsx' },
      { text: 'Student calendar (Mon).xlsx', value: 'https://minio.cnbabylon.com/public/luckysheet/Student%20calendar%20%28Mon%29.xlsx' },
      { text: 'Blue mileage and expense report.xlsx', value: 'https://minio.cnbabylon.com/public/luckysheet/Blue%20mileage%20and%20expense%20report.xlsx' },
    ]
    this.load()
  },
  created () {
    this.reportCode = this.$route.query.reportCode
    this.accessKey = this.$route.query.accessKey
    this.loadDataSet()
    this.design()
    this.initPaperList()
    this.getWindowDpi()
  },
  methods: {
    handleClose () {
      this.printVisible = false
    },
    handleChange (val) {
    },
    // 右侧信息配置tabs
    handleClick (tab, event) {
    },
    async design () {
      // 根据reportCode获取单条报表
      const { code, data } = await detailByReportCode(this.reportCode)
      if (data != null) {
        this.reportId = data.id
      }
      // this.sheet.loadData(data == null ? [{}] : JSON.parse(data.jsonStr)['sheet'])
      if (data != null) {
        if (data.setCodes != null && data.setCodes !== '') {
          var dataSetList = data.setCodes.split('|')
          dataSetList.forEach((code) => {
            this.dataSetData.forEach((setData) => {
              if (code === setData.setCode) {
                this.detail(setData.id)
              }
            })
          })
        }
      }
    },
    async loadDataSet () {
      const { code, data } = await queryAllDataSet()
      this.dataSetData = data
      if (code != '200') return
    },
    doCancel () {
      this.pop = false
    },
    save () {
      var sheetData = {}
      sheetData['sheet'] = this.sheet.getData()
      this.reportExcelDto.jsonStr = JSON.stringify(sheetData)
      var setCodeList = []
      var setParams = {}
      this.dataSet.forEach((code) => {
        setCodeList.push(code.setCode)
        if (code.dataSetParamDtoList != null && code.dataSetParamDtoList.length > 0) {
          var dataSetParam = {}
          code.dataSetParamDtoList.forEach((value) => {
            dataSetParam[value.paramName] = value.sampleItem
          })
          setParams[code.setCode] = dataSetParam
        }
      })

      this.reportExcelDto.setParam = JSON.stringify(setParams)
      this.reportExcelDto.setCodes = setCodeList.join('|')
      this.reportExcelDto.reportCode = this.reportCode
      if (this.reportId == null) {
        const res = addReportExcel(this.reportExcelDto)
      } else {
        this.reportExcelDto.id = this.reportId
        const res = editReportExcel(this.reportExcelDto)
      }
    },

    async detailByReportCode (reportCode) {
      const { code, data } = await detailByReportCode(reportCode)
      if (data != null) {
        this.reportId = data.id
      }
    },
    async preview () {
      var routeUrl = this.$router.resolve({ path: '/report/excelreport/viewer', query: { reportCode: this.reportCode } })
      window.open(routeUrl.href, '_blank')
    },
    async queryAllDataSet () {
      this.outerVisible = true
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    checkDataSet () {
      this.outerVisible = false
      if (this.multipleSelection.length > 1) {
        this.$message({
          message: '一次最多勾选一个数据集',
          type: 'warning',
        })
        this.outerVisible = true
      } else {
        this.detail(this.multipleSelection[0].id)
      }
    },
    async detail (id) {
      const { code, data } = await detail(id)
      if (code != 200) return
      var flag = true
      this.dataSet.forEach((value) => {
        if (value.setCode === data.setCode) {
          flag = false
        }
      })
      if (flag) {
        this.dataSet.push(data)
      }
    },
    onStart (setCode) {
      this.setCode = setCode
    },
    onEnd (evt) {
      // 获取结束坐标和列名
      var x = evt.originalEvent.clientX // 结束在屏幕的x坐标
      var y = evt.originalEvent.clientY // 结束在屏幕的y坐标
      var fieldLabel = evt.item.innerText // 列名称
      var excelToolbarHeight = 40 // excel工具栏
      var leftLayout = document.getElementsByClassName('layout-left')[0].clientWidth // 左侧宽度
      // 计算行列
      const { ri, ci } = this.sheet.datas[0].getCellRectByXY(x - leftLayout, y - excelToolbarHeight)
      this.sheet.cellText(ri, ci, '#{' + this.setCode + '.' + fieldLabel + '}', 0)
      // 设定值 
      this.sheet.reRender()
    },
    del (val) {
      for (let i = 0; i < this.dataSet.length; i++) {
        if (this.dataSet[i].setCode === val.setCode) {
          this.dataSet.splice(i, 1)
        }
      }
    },
    // 无论哪个输入框改变 都需要触发事件 将值回传
    changed (val, key) {
    },
    load () {
      // eslint-disable-next-line no-undef
      luckysheet.create({
        container: 'luckysheet', // 设定DOM容器的id
        title: 'Luckysheet Demo', // 设定表格名称
        lang: 'zh', // 设定表格语言
        plugins: ['chart'],
        data: [{
          'name': 'Cell', // 工作表名称
          'color': '', // 工作表颜色
          'index': 0, // 工作表索引
          'status': 1, // 激活状态
          'order': 0, // 工作表的下标
          'hide': 0, // 是否隐藏
          'row': 36, // 行数
          'column': 18, // 列数
          'defaultRowHeight': 19, // 自定义行高
          'defaultColWidth': 73, // 自定义列宽
          'celldata': [], // 初始化使用的单元格数据
          'config': {
            'merge': {}, // 合并单元格
            'rowlen': {}, // 表格行高
            'columnlen': {}, // 表格列宽
            'rowhidden': {}, // 隐藏行
            'colhidden': {}, // 隐藏列
            'borderInfo': {}, // 边框
            'authority': {}, // 工作表保护

          },
          'scrollLeft': 0, // 左右滚动条位置
          'scrollTop': 315, // 上下滚动条位置
          'luckysheet_select_save': [], // 选中的区域
          'calcChain': [], // 公式链
          'isPivotTable': false, // 是否数据透视表
          'pivotTable': {}, // 数据透视表设置
          'filter_select': {}, // 筛选范围
          'filter': null, // 筛选配置
          'luckysheet_alternateformat_save': [], // 交替颜色
          'luckysheet_alternateformat_save_modelCustom': [], // 自定义交替颜色	
          'luckysheet_conditionformat_save': {}, // 条件格式
          'frozen': {}, // 冻结行列配置
          'chart': [], // 图表配置
          'zoomRatio': 1, // 缩放比例
          'image': [], // 图片
          'showGridLines': 1, // 是否显示网格线
          'dataVerification': {} // 数据验证配置
        },
        {
          'name': 'Sheet2',
          'color': '',
          'index': 1,
          'status': 0,
          'order': 1,
          'celldata': [],
          'config': {}
        },
        {
          'name': 'Sheet3',
          'color': '',
          'index': 2,
          'status': 0,
          'order': 2,
          'celldata': [],
          'config': {},
        }
        ]
      })
    },
    testClick () {
      console.log('sdsdsddsd')
    },
    // 获取回传的参数
    getEmitParam () {
      return {
        paper: this.formPrintSetting.size,
        width: this.formPrintSetting.width,
        height: this.formPrintSetting.height,
        isBackend: this.isBackend
      }
    },
    // 纸张大小改变事件
    onPaperChange (value) {
      const arr = this.paperList.filter(item => {
        return item.paper === value
      })
      this.resetForm(arr[0])
    },
    resetForm: function (param) {
      if (param) {
        this.paper = param.paper
        this.width = param.width
        this.height = param.height
        this.formPrintSetting.pixel1 = this.getPxWidth(param.width) + 'px'
        this.formPrintSetting.pixel2 = this.getPxHeight(param.height) + 'px'
        if (param.definition) {
          this.definition = param.definition
        }
        if (param.isBackend === true || param.isBackend === false) {
          this.isBackend = param.isBackend
        }
      }
    },
    getPaperText (item) {
      return item.paper + '：' + item.width + 'mm x ' + item.height + 'mm'
    },
    initPaperList () {
      let printPaper = []
      if (this.config) {
        const config2 = JSON.parse(this.config)
        if (config2 && config2['printPaper']) {
          printPaper = config2['printPaper']
        }
      }
      const arr = []
      for (const item of this.pixelList) {
        arr.push(item)
      }
      for (const item of printPaper) {
        arr.push({
          paper: item.title, width: item['size'][0], height: item['size'][1]
        })
      }
      this.paperList = [...arr]
    },

    // 获取窗口dpi
    getWindowDpi () {
      // 25.41 1英寸=25.41mm 96是window默认dpi,mac:72
      this.printVisible = false
      // eslint-disable-next-line no-array-constructor
      const arrDPI = new Array()
      if (window.screen.deviceXDPI != undefined) {
        arrDPI[0] = window.screen.deviceXDPI
        arrDPI[1] = window.screen.deviceYDPI
      } else {
        const tmpNode = document.createElement('div')
        tmpNode.style.cssText = 'width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden'
        document.body.appendChild(tmpNode)
        arrDPI[0] = parseInt(tmpNode.offsetWidth)
        arrDPI[1] = parseInt(tmpNode.offsetHeight)
        tmpNode.parentNode.removeChild(tmpNode)
      }
      this.dpi = [...arrDPI]
    },
    // 获取像素宽
    getPxWidth (width) {
      let margin = 10
      if (this.isBackend == true) {
        margin = 0
      }
      return Math.ceil((width - margin * 2) / 25.41 * this.dpi[0])
    },
    // 获取像素高
    getPxHeight (height) {
      let margin = 10
      if (this.isBackend == true) {
        margin = 0
      }
      return Math.ceil((height - margin * 2) / 25.41 * this.dpi[1])
    },

    uploadExcel (evt) {
      const files = evt.target.files
      if (files == null || files.length == 0) {
        alert('No files wait for import')
        return
      }

      const name = files[0].name
      const suffixArr = name.split('.'); const suffix = suffixArr[suffixArr.length - 1]
      if (suffix != 'xlsx') {
        alert('Currently only supports the import of xlsx files')
        return
      }
      LuckyExcel.transformExcelToLucky(files[0], function (exportJson, luckysheetfile) {
        if (exportJson.sheets == null || exportJson.sheets.length == 0) {
          alert('Failed to read the content of the excel file, currently does not support xls files!')
          return
        }
        window.luckysheet.destroy()

        window.luckysheet.create({
          container: 'luckysheet', // luckysheet is the container id
          showinfobar: false,
          data: exportJson.sheets,
          title: exportJson.info.name,
          userInfo: exportJson.info.name.creator
        })
      })
    },
    selectExcel (evt) {
      const value = this.selected
      const name = evt.target.options[evt.target.selectedIndex].innerText

      if (value == '') {
        return
      }

      LuckyExcel.transformExcelToLuckyByUrl(value, name, (exportJson, luckysheetfile) => {
        if (exportJson.sheets == null || exportJson.sheets.length == 0) {
          alert('Failed to read the content of the excel file, currently does not support xls files!')
          return
        }

        window.luckysheet.destroy()

        window.luckysheet.create({
          container: 'luckysheet', // luckysheet is the container id
          showinfobar: false,
          data: exportJson.sheets,
          title: exportJson.info.name,
          userInfo: exportJson.info.name.creator
        })
      })
    },
    downloadExcel () {
      const value = this.selected

      if (value.length == 0) {
        alert('Please select a demo file')
        return
      }

      var elemIF = document.getElementById('Lucky-download-frame')
      if (elemIF == null) {
        elemIF = document.createElement('iframe')
        elemIF.style.display = 'none'
        elemIF.id = 'Lucky-download-frame'
        document.body.appendChild(elemIF)
      }
      elemIF.src = value
    }
  },
}
</script>

<style scoped lang="scss">
@import '../../../../components/x-spreadsheet/dist/xspreadsheet.css';
.position {
  position: absolute;
  z-index: 100;
}

#qrCode,
#barCode {
  display: none;
}
.yulancopy {
  font-size: 16px;
}
.baocun {
  font-size: 17px;
}
.el-collapse {
  position: relative;
  border-top: 0 solid #e6ebf5;
  border-bottom: 0 solid #e6ebf5;
}
.el-collapse-item__header {
  border-bottom: 0 solid #e6ebf5 !important;
}
.delect-all {
  position: absolute;
  top: 10px;
  right: 30px;
  color: #333;
}
.push_btn {
  position: absolute;
  z-index: 100;
  top: 5px;
  left: 3px;

  .iconfont {
    color: black;
  }
}

.add-collection {
  line-height: 30px;

  .el-button {
    font-size: 16px !important;
    vertical-align: middle;
    margin-left: 20px;
  }
}

.layout {
  display: block;
  position: relative;
  margin: 0;
  padding: 0;
  border: 1px solid #d7dde4;
}

.layout-left {
  display: block;
  position: absolute;
  padding: 20px;
  width: 230px;
  min-height: 99.98vh;
  border-right: 1px solid #eee;
  border-color: #e8eaec;
  background: #fff;
  border-radius: 4px;
  font-size: 14px;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  top: 0;
  left: 0;

  .field-container {
    display: block;
    position: relative;
    width: 100%;
    margin: 0;
    cursor: pointer;
    line-height: 30px;

    .aRow {
      padding: 0 10px;

      .operation {
        float: right;
        display: none;

        .el-button--text {
          color: #333 !important;
        }
      }

      &:hover {
        .operation {
          display: block;
        }

        background: #f7fafd;
      }
    }
  }
}

.layout-middle {
  display: block;
  position: absolute;
  left: 230px;
  right: 230px;
  width: calc(100% - 460px);
  margin: 0;
  padding: 0;

  .excel-designer {
    display: block;
    position: relative;
    margin: 0;
    padding: 0;
  }
}

.layout-right {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
  width: 230px;
  min-height: 99.98vh;
  border-left: 1px solid #dcdee2;
  border-color: #e8eaec;
  background: #fff;
  border-radius: 4px;
  font-size: 14px;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
</style>
