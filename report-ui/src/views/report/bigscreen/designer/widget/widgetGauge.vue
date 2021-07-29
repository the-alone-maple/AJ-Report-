<template>
  <div :style="styleObj">
    <v-chart :options="options" autoresize />
  </div>
</template>

<script>
export default {
  name: "WidgetGauge",
  components: {},
  props: {
    value: Object,
    ispreview: Boolean
  },
  data() {
    return {
      options: {
        series: [
          {
            name: "Pressure",
            type: "gauge",
            detail: {
              formatter: "{value}",
              textStyle: {
                fontSize: 12
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                width: 10
              }
            },
            axisLabel: {
              show: true,
              fontSize: 12
            },
            axisTick: {
              show: true
            },
            data: [
              {
                value: 50,
                name: ""
              }
            ]
          }
        ]
      },
      optionsStyle: {}, // 样式
      optionsData: {}, // 数据
      optionsCollapse: {}, // 图标属性
      optionsSetup: {}
    };
  },
  computed: {
    styleObj() {
      return {
        position: this.ispreview ? "absolute" : "static",
        width: this.optionsStyle.width + "px",
        height: this.optionsStyle.height + "px",
        left: this.optionsStyle.left + "px",
        top: this.optionsStyle.top + "px",
        background: this.optionsSetup.background
      };
    }
  },
  watch: {
    value: {
      handler(val) {
        this.optionsStyle = val.position; // 位置
        this.optionsData = val.data; // 数据
        this.optionsCollapse = val.collapse; // 折叠数据
        this.optionsSetup = val.setup; // 样式
        this.setOptions();
        this.setOptionsData();
      },
      deep: true
    }
  },
  created() {
    this.optionsStyle = this.value.position;
    this.optionsData = this.value.data;
    this.optionsCollapse = this.value.collapse;
    this.optionsSetup = this.value.setup;
    this.setOptions();
    this.setOptionsData();
  },
  methods: {
    setOptions() {
      const optionsSetup = this.optionsSetup;
      const series = this.options.series;
      for (const key in series) {
        if (series[key].type == "gauge") {
          series[key].axisLine.lineStyle.width = optionsSetup.tickMarkWeight;
          series[key].axisLabel.show = optionsSetup.showScaleValue;
          series[key].axisLabel.fontSize = optionsSetup.scaleFontSize;
          series[key].axisTick.show = optionsSetup.showTickMarks;
          series[key].detail.textStyle.fontSize = optionsSetup.targetFontSize;
        }
      }
    },
    setOptionsData() {
      const optionsData = this.optionsData; // 数据类型 静态 or 动态
      console.log(optionsData);
      optionsData.dataType == "staticData"
        ? this.staticDataFn(optionsData.staticData)
        : this.dynamicDataFn(optionsData.dynamicData, optionsData.refreshTime);
    },
    staticDataFn(val) {
      const unit = JSON.parse(val).unit;
      const series = this.options.series;
      for (const key in series) {
        series[key].detail.formatter = `{value}${unit}`;
        series[key].data[0] = {
          value: JSON.parse(val).value,
          name: JSON.parse(val).name
        };
      }
    },
    dynamicDataFn(val, refreshTime) {
      console.log(val);
      if (!val) return;
      if (this.ispreview) {
        this.getEchartData(val);
        this.flagInter = setInterval(() => {
          this.getEchartData(val);
        }, refreshTime);
      } else {
        this.getEchartData(val);
      }
    },
    getEchartData(val) {
      const data = this.queryEchartsData(val);
      data.then(res => {
        this.renderingFn(res);
      });
    },
    renderingFn(val) {
      const series = this.options.series;
      for (const key in series) {
        series[key].detail.formatter = `{value}${val.unit}`;
        series[key].data[0] = {
          value: val.value,
          name: val.name || ""
        };
      }
    }
  }
};
</script>

<style scoped lang="scss">
.echarts {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
