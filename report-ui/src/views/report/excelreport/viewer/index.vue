<!--
 * @Author: lide1202@hotmail.com
 * @Date: 2021-3-13 11:04:24
 * @Last Modified by:   lide1202@hotmail.com
 * @Last Modified time: 2021-3-13 11:04:24
 !-->
<template>
  <div class="layout">
    <div class="layout-right">
      <div class="block">
        <div class="download">
          <a v-if="reportCode != null"
             download="xxx.xlsx">
            <el-button type="text"
                       @click="download('')">
              <i class="iconfont iconexcel"></i>导出excel
            </el-button>
          </a>
          <a v-if="reportCode != null"
             download="xxx.pdf">
            <el-button type="text"
                       @click="download('gaea_template_pdf')">
              <i class="iconfont iconpdf"></i>导出pdf
            </el-button>
          </a>
        </div>
        <el-form class="">

          <h2>表格查询</h2>
          <div v-for="(item, num) in tableData2"
               :key="num + 'excel'">
            <h4>{{ item.name }}</h4>
            <div v-for="(son, y) in item.children"
                 :key="y + 'excel2'"
                 class="search_input">
              <label>{{ son.name }}：</label>
              <el-input v-model="son.value" />
            </div>
          </div>
          <el-button style="width: 100%"
                     @click="searchPreview">查询</el-button>
        </el-form>
        <!--<el-pagination :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400" @size-change="handleSizeChange" @current-change="handleCurrentChange" />-->
      </div>
    </div>
    <div class="layout-middle">
      <div id="x-spreadsheet-demo"
           class="excel-designer" />
    </div>
  </div>
</template>

<script>
// import Spreadsheet from 'x-data-spreadsheet'
// import zhCN from 'x-data-spreadsheet/src/locale/zh-cn'
import { preview, exportExcel } from '@/api/GaeaReport'
import { addReport, editReport } from '@/api/report'
import '@/components/x-spreadsheet/dist/xspreadsheet.js'
// Spreadsheet.locale('zh-cn', zhCN)

export default {
  name: 'Login',
  components: {},
  data () {
    return {
      options: {},
      sheet: {},
      reportId: null,
      reportCode: null,
      reportName: null,
      dataSet: null,
      tableData2: [],
      excelData: {},
      params: {
        reportCode: '',
        setParam: '',
      },
    }
  },
  mounted () {
    this.options = {
      mode: 'read', // edit | read
      showToolbar: false,
      showGrid: true,
      showContextmenu: false,
      view: {
        height: () => document.documentElement.clientHeight,
        width: () => document.getElementsByClassName('layout-middle')[0].clientWidth,
      },
      row: {
        len: 100,
        height: 25,
      },
      col: {
        len: 52,
        width: 100,
        indexWidth: 60,
        minWidth: 60,
      },
      style: {
        bgcolor: '#ffffff',
        align: 'left',
        valign: 'middle',
        textwrap: false,
        strike: false,
        underline: false,
        color: '#0a0a0a',
        font: {
          name: 'Helvetica',
          size: 10,
          bold: false,
          italic: false,
        },
      },
    }
    // this.sheet = new Spreadsheet('#x-spreadsheet-demo', this.options).loadData({})
    this.load()
    this.preview()
  },
  created () {
    this.reportCode = this.$route.query.reportCode
  },
  methods: {
    async searchPreview () {
      const arr = this.toObject(this.tableData2)
      this.params.setParam = JSON.stringify(arr)
      const { code, data } = await preview(this.params)
      if (code !== '200') return
      this.excelData = JSON.parse(data.jsonStr)
      this.sheet.loadData(this.excelData)
    },
    async preview () {
      this.excelData = {}
      this.params.reportCode = this.reportCode
      const { code, data } = await preview(this.params)
      if (code != 200) return
      this.reportName = JSON.parse(data.jsonStr).name
      // 渲染查询表单
      this.params.setParam = JSON.parse(data.setParam)
      const extendArry = []
      const extendObj = this.params.setParam
      for (const i in extendObj) {
        const children = []
        for (const y in extendObj[i]) {
          children.push({ name: y, value: extendObj[i][y] })
        }
        extendArry.push({ name: i, children: children })
      }
      this.tableData2 = extendArry

      this.excelData = data.jsonStr
      this.sheet.loadData(JSON.parse(this.excelData))
    },
    download (val) {
      const result = {}
      result['reportCode'] = this.reportCode
      result['setParam'] = JSON.stringify(this.params.setParam)
      if (val != '') {
        result['exportType'] = val
      }
      exportExcel(result)
    },
    // 表单封装json
    toObject (val) {
      const objfirst = {}
      const objSecond = {}
      val.forEach((el) => {
        el.name ? (objfirst[el.name] = el.children) : ''
      })
      for (const key in objfirst) {
        const newObj = {}
        objfirst[key].map((ev) => {
          Object.assign(newObj, { [ev.name]: ev.value })
        })
        objSecond[key] = newObj
      }
      return objSecond
    },
    load () {
      const rows10 = { len: 1000 }
      for (let i = 0; i < 1000; i += 1) {
        rows10[i] = {
          cells: {},
        }
      }
      const rows = {}
      this.sheet = x_spreadsheet('#x-spreadsheet-demo', this.options)
        .loadData([
          {
            freeze: 'B3',
            styles: [],
            merges: [],
            cols: {
              len: 20,
              // 2: { width: 200 },
            },
            rows,
          },
          { name: 'sheet-test', rows: rows10 },
        ])
        .change((cdata) => {
          const dataRect = this.sheet.data.getDataRect()
        })
      this.sheet
        .on('cell-selected', (cell, ri, ci) => {
          // console.log('cell:', cell, ', ri:', ri, ', ci:', ci);
        })
        .on('cell-edited', (text, ri, ci) => {
          // console.log('text:', text, ', ri: ', ri, ', ci:', ci);
        })
      this.sheet.on('printSettings', () => {
        // 打印设置.
      })
      this.sheet.on('generateQrcode', () => {
        // 生成二维码.
        console.log('insertImg', this.dialogVisible)
      })
      this.sheet.on('insertImg', () => {
        // 插入图片
      })
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../../../components/x-spreadsheet/dist/xspreadsheet.css';
.download {
  width: 100%;
  float: left;
  button {
    color: #444;
    width: 90px;
    text-align: left;
    .svg-icon {
      font-size: 16px;
      margin-right: 10px;
    }
  }
}
.block {
  position: relative;
  z-index: 10000;
  top: 0;
  background: #fff;
  width: 100%;
  h2 {
    font-size: 14px;
    line-height: 30px;
  }
  h4 {
    font-size: 12px;
  }
  .search_input {
    font-size: 12px;
    margin-bottom: 10px;
    label {
      line-height: 20px;
    }
  }
}
.layout {
  display: block;
  position: relative;
  margin: 0;
  padding: 0;
}
.layout-middle {
  display: block;
  position: absolute;
  left: 200px;
  right: 0;
  width: calc(100% - 200px);
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
  left: 0;
  padding: 20px;
  width: 200px;
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
