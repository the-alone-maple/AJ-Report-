import miment from 'miment'
import {getData} from '@/api/bigscreen'

export default {
  data() {
    return {
      // form select-input key
      selectInput: {
        keyname: '',
        keyword: ''
      },

      //日期时间快捷选项
      datetimeRangePickerOptions: {
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            const end = new Date();
            const start = new Date(new Date(new Date().getTime()).setHours(0, 0, 0, 0));
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const start = new Date(new Date(new Date().getTime() - 24 * 60 * 60 * 1000).setHours(0, 0, 0, 0));
            const end = new Date(new Date(new Date().getTime() - 24 * 60 * 60 * 1000).setHours(23, 59, 59, 999));
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(miment().add(-1, 'ww').stamp());
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(miment().add(-1, 'MM').stamp());
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(miment().add(-3, 'MM').stamp());
            picker.$emit('pick', [start, end]);
          }
        }],
        // disabledDate(time){
        //   return time.getTime() > Date.now()
        // }
      },
    }
  },
  computed: {},
  created() {
  },
  mounted() {
  },
  destroyed() {
  },
  methods: {
    // 搜索重置搜索页码
    search() {
      this.params.currentPage = 1;
      this.queryByPage();
    },
    // 把selectInput中的值赋到params查询对象中
    parseParamsBySelectInput(keyname, keyword) {
      if (this.params === undefined || this.params === null) {
        console.warn('query form must bind to params object in vue data')
        return
      }
      // if (!this.params.hasOwnProperty(keyname)) {
      //   console.warn('params has no field:' + keyname)
      //   return
      // }
      if (keyword !== undefined) {
        this.params[keyname] = keyword.trim()
      }
    },
    resetForm(data) {
      let formKeys = Object.keys(data)
      for (let k of formKeys) {
        data[k] = null
      }
    },
    handlerInputchange(val) {
      this.parseParamsBySelectInput(this.selectInput.keyname, val)
    },
    // 查询echarts 数据
    queryEchartsData(params) {
      return new Promise(async (resolve) => {
        const {code, data} = await getData(params);
        if (code != 200) return
        const analysisData = this.analysisChartsData(params, data);
        resolve(analysisData)
      })
    },
    // 解析不同图标的数据
    analysisChartsData(params, data) {
      // widget-barchart 柱线图、widget-linechart 折线图、 widget-barlinechart 柱线图
      // widget-piechart 饼图、widget-hollow-piechart 空心饼图、widget-funnel 漏斗图
      // widget-gauge 仪表盘
      // widget-text 文本框
      // widge-table 表格(数据不要转)
      const chartType = params.chartType
      if (
        chartType == "widget-barchart" ||
        chartType == "widget-linechart" ||
        chartType == "widget-barlinechart"
      ) {
        return this.barOrLineChartFn(params.chartProperties, data);
      } else if (
        chartType == "widget-piechart" ||
        chartType == "widget-hollow-piechart" ||
        chartType == "widget-funnel"
      ) {
        return this.piechartFn(params.chartProperties, data);
      } else if (chartType == "widget-gauge") {
        return this.gaugeFn(params.chartProperties, data);
      } else if (chartType == "widget-text") {
        return this.widgettext(params.chartProperties, data)
      } else {
        return data
      }
    },
    // 柱状图、折线图、折柱图
    barOrLineChartFn(chartProperties, data) {
      const ananysicData = {};
      const xAxisList = [];
      const series = [];
      for (const key in chartProperties) {
        const obj = {};
        const seriesData = [];
        const value = chartProperties[key];
        obj["type"] = value;
        for (let i = 0; i < data.length; i++) {
          if (value.startsWith("xAxis")) {
            // 代表为x轴
            xAxisList[i] = data[i][key];
          } else {
            // 其他的均为series展示数据
            seriesData[i] = data[i][key];
          }
        }
        obj["data"] = seriesData;
        if (!obj["type"].startsWith("xAxis")) {
          series.push(obj);
        }
      }
      ananysicData["xAxis"] = xAxisList;
      ananysicData["series"] = series;
      return ananysicData;
    },
    // 饼图或者空心饼图或者漏斗图
    piechartFn(chartProperties, data) {
      const ananysicData = [];
      for (let i = 0; i < data.length; i++) {
        const obj = {};
        for (const key in chartProperties) {
          const value = chartProperties[key];
          if (value === "name") {
            obj["name"] = data[i][key];
          } else {
            obj["value"] = data[i][key];
          }
        }
        ananysicData.push(obj);
      }
      return ananysicData;
    },
    gaugeFn(chartProperties, data) {
      const ananysicData = [];
      for (let i = 0; i < data.length; i++) {
        const obj = {};
        for (const key in chartProperties) {
          const value = chartProperties[key];
          if (value === "name") {
            obj["name"] = data[i][key];
          } else {
            obj["value"] = data[i][key];
          }
        }
        if (!obj["unit"]) {
          obj["unit"] = "%";
        }
        ananysicData.push(obj);
      }
      return ananysicData[0];
    },
    widgettext(chartProperties, data) {
      const ananysicData = [];
      for (let i = 0; i < data.length; i++) {
        const obj = {};
        for (const key in chartProperties) {
          const value = chartProperties[key];
          if (value === "name") {
          } else {
            obj["value"] = data[i][key];
          }
        }
        ananysicData.push(obj);
      }
      return ananysicData;
    },
  },
  watch: {
    'selectInput.keyname'(newVal, oldVal) {
      this.resetForm(this.params)
      this.params.currentPage = 1
      this.params.pageSize = 10
      this.parseParamsBySelectInput(newVal, this.selectInput.keyword)
    },
    'selectInput.keyword'(newVal, oldVal) {
      if (!this.selectInput.keyname) return
      this.parseParamsBySelectInput(this.selectInput.keyname, newVal)
    }
    // 'selectInput.keyword'(newVal, oldVal) {
    //   this.parseParamsBySelectInput(this.selectInput.keyname, newVal)
    // }
  }
}
