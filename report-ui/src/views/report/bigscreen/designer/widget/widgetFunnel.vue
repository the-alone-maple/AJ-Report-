<template>
  <div :style="styleObj">
    <v-chart :options="options" autoresize />
  </div>
</template>

<script>
export default {
  name: "WidgetFunnel",
  components: {},
  props: {
    value: Object,
    ispreview: Boolean
  },
  data() {
    return {
      options: {
        color: [],
        title: {
          text: "",
          textStyle: {
            color: "#fff"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}%"
        },
        legend: {
          textStyle: {
            color: "#fff"
          }
        },
        series: [
          {
            name: "",
            type: "funnel",
            left: "10%",
            top: 60,
            bottom: 60,
            width: "80%",
            min: 0,
            max: 100,
            minSize: "0%",
            maxSize: "100%",
            sort: "descending",
            gap: 2,
            label: {
              show: true,
              position: "inside"
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: "solid"
              }
            },
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 1
            },
            emphasis: {
              label: {
                fontSize: 20
              }
            },
            data: []
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
        this.optionsStyle = val.position;
        this.optionsData = val.data;
        this.optionsCollapse = val.collapse;
        this.optionsSetup = val.setup;
        this.editorOptions();
      },
      deep: true
    }
  },
  created() {
    this.optionsStyle = this.value.position;
    this.optionsData = this.value.data;
    this.optionsCollapse = this.value.collapse;
    this.optionsSetup = this.value.setup;
    this.editorOptions();
  },
  methods: {
    // 修改图标options属性
    editorOptions() {
      this.setOptionsText();
      this.setOptionsTitle();
      this.setOptionsTooltip();
      this.setOptionsLegend();
      this.setOptionsColor();
      this.setOptionsData();
    },
    // 文字设置
    setOptionsText() {
      const optionsCollapse = this.optionsSetup;
      const series = this.options.series;

      for (const key in series) {
        if (series[key].type == "funnel") {
          series[key].label.show = optionsCollapse.isShow;
          series[key].label.fontSize = optionsCollapse.fontSize;
          series[key].label.color = optionsCollapse.color;
          series[key].label.fontWeight = optionsCollapse.fontWeight;

          series[key].sort = optionsCollapse.reversal
            ? "ascending"
            : "descending";
        }
      }
    },
    // 标题修改
    setOptionsTitle() {
      const optionsCollapse = this.optionsSetup;
      const title = {};
      title.show = optionsCollapse.isNoTitle;
      title.text = optionsCollapse.titleText;
      title.left = optionsCollapse.textAlign;
      title.textStyle = {
        color: optionsCollapse.textColor,
        fontSize: optionsCollapse.textFontSize,
        fontWeight: optionsCollapse.textFontWeight
      };
      title.subtext = optionsCollapse.subText;
      title.subtextStyle = {
        color: optionsCollapse.subTextColor,
        fontWeight: optionsCollapse.subTextFontWeight,
        fontSize: optionsCollapse.subTextFontSize
      };

      this.options.title = title;
    },
    // 提示语设置 tooltip
    setOptionsTooltip() {
      const optionsCollapse = this.optionsSetup;
      const tooltip = {
        trigger: "item",
        show: true,
        textStyle: {
          color: optionsCollapse.lineColor,
          fontSize: optionsCollapse.fontSize
        }
      };
      this.options.tooltip = tooltip;
    },
    // 图例操作 legend
    setOptionsLegend() {
      const optionsCollapse = this.optionsSetup;
      const legend = this.options.legend;
      legend.show = optionsCollapse.isShowLegend;
      legend.left = optionsCollapse.lateralPosition == "left" ? 0 : "auto";
      legend.right = optionsCollapse.lateralPosition == "right" ? 0 : "auto";
      legend.top = optionsCollapse.longitudinalPosition == "top" ? 0 : "auto";
      legend.bottom =
        optionsCollapse.longitudinalPosition == "bottom" ? 0 : "auto";
      legend.orient = optionsCollapse.layoutFront;
      legend.textStyle = {
        color: optionsCollapse.lengedColor,
        fontSize: optionsCollapse.fontSize
      };
      legend.itemWidth = optionsCollapse.lengedWidth;
    },
    // 图例颜色修改
    setOptionsColor() {
      const optionsCollapse = this.optionsSetup;
      const customColor = optionsCollapse.customColor;
      if (!customColor) return;
      const arrColor = [];
      for (let i = 0; i < customColor.length; i++) {
        arrColor.push(customColor[i].color);
      }
      this.options.color = arrColor;
      this.options = Object.assign({}, this.options);
    },
    setOptionsData() {
      const optionsData = this.optionsData; // 数据类型 静态 or 动态
      optionsData.dataType == "staticData"
        ? this.staticDataFn(optionsData.staticData)
        : this.dynamicDataFn(optionsData.dynamicData, optionsData.refreshTime);
    },
    staticDataFn(val) {
      const staticData = JSON.parse(val);
      for (const key in this.options.series) {
        if (this.options.series[key].type == "funnel") {
          this.options.series[key].data = staticData;
        }
      }
    },
    dynamicDataFn(val, refreshTime) {
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
      for (const key in this.options.series) {
        if (this.options.series[key].type == "funnel") {
          this.options.series[key].data = val;
        }
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
