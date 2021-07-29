<template>
  <div :style="styleObj">
    <v-chart :options="options" autoresize />
  </div>
</template>

<script>
export default {
  name: "WidgetLinechart",
  components: {},
  props: {
    value: Object,
    ispreview: Boolean
  },
  data() {
    return {
      options: {
        grid: {},
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
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff"
            }
          }
        },
        yAxis: {
          type: "value",
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff"
            }
          }
        },
        series: [
          {
            data: [],
            type: "line"
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
      this.setOptionsTitle();
      this.setOptionsX();
      this.setOptionsY();
      this.setOptionsTop();
      this.setOptionsTooltip();
      this.setOptionsData();
      this.setOptionsMargin();
      this.setOptionsLegend();
      this.setOptionsColor();
    },
    // 标题修改
    setOptionsTitle() {
      const optionsCollapse = this.optionsSetup;
      const title = {};
      title.text = optionsCollapse.titleText;
      title.show = optionsCollapse.isNoTitle;
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
    // X轴设置
    setOptionsX() {
      const optionsCollapse = this.optionsSetup;
      const xAxis = {
        type: "category",
        show: optionsCollapse.hideX, // 坐标轴是否显示
        name: optionsCollapse.xName, // 坐标轴名称
        nameTextStyle: {
          color: optionsCollapse.xNameColor,
          fontSize: optionsCollapse.xNameFontSize
        },
        nameRotate: optionsCollapse.textAngle, // 文字角度
        inverse: optionsCollapse.reversalX, // 轴反转
        axisLabel: {
          show: true,
          interval: optionsCollapse.textInterval, // 文字角度
          rotate: optionsCollapse.textAngle, // 文字角度
          textStyle: {
            color: optionsCollapse.Xcolor, // x轴 坐标文字颜色
            fontSize: optionsCollapse.fontSizeX
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: optionsCollapse.lineColorX
          }
        },
        splitLine: {
          show: optionsCollapse.isShowSplitLineX,
          lineStyle: {
            color: optionsCollapse.splitLineColorX
          }
        }
      };
      this.options.xAxis = xAxis;
    },
    // Y轴设置
    setOptionsY() {
      const optionsCollapse = this.optionsSetup;
      const yAxis = {
        type: "value",
        show: optionsCollapse.isShowY, // 坐标轴是否显示
        name: optionsCollapse.textNameY, // 坐标轴名称
        nameTextStyle: {
          color: optionsCollapse.NameColorY,
          fontSize: optionsCollapse.NameFontSizeY
        },
        inverse: optionsCollapse.reversalY, // 轴反转
        axisLabel: {
          show: true,
          textStyle: {
            color: optionsCollapse.colorY, // x轴 坐标文字颜色
            fontSize: optionsCollapse.fontSizeY
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: optionsCollapse.lineColorY
          }
        },
        splitLine: {
          show: optionsCollapse.isShowSplitLineY,
          lineStyle: {
            color: optionsCollapse.splitLineColorY
          }
        }
      };

      this.options.yAxis = yAxis;
    },
    // 折线设置
    setOptionsTop() {
      const optionsCollapse = this.optionsSetup;
      const series = this.options.series;
      for (const key in series) {
        if (series[key].type == "line") {
          series[key].showSymbol = optionsCollapse.markPoint;
          series[key].symbolSize = optionsCollapse.pointSize;
          series[key].smooth = optionsCollapse.smoothCurve;
          if (optionsCollapse.area) {
            series[key].areaStyle = {
              opacity: optionsCollapse.areaThickness / 100
            };
          } else {
            series[key].areaStyle = {
              opacity: 0
            };
          }

          series[key].lineStyle = {
            width: optionsCollapse.lineWidth
          };
          series[key].label = {
            show: optionsCollapse.isShow,
            position: "top",
            distance: 10,
            fontSize: optionsCollapse.fontSize,
            color: optionsCollapse.subTextColor,
            fontWeight: optionsCollapse.fontWeight
          };
        }
      }
      this.options.series = series;
    },
    // tooltip 设置
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
    // 边距设置
    setOptionsMargin() {
      const optionsCollapse = this.optionsSetup;
      const grid = {
        left: optionsCollapse.marginLeft,
        right: optionsCollapse.marginRight,
        bottom: optionsCollapse.marginBottom,
        top: optionsCollapse.marginTop,
        containLabel: true
      };
      this.options.grid = grid;
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
      console.log(legend);
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
    // 处理数据
    setOptionsData() {
      const optionsData = this.optionsData; // 数据类型 静态 or 动态
      optionsData.dataType == "staticData"
        ? this.staticDataFn(optionsData.staticData)
        : this.dynamicDataFn(optionsData.dynamicData, optionsData.refreshTime);
    },
    staticDataFn(val) {
      const staticData = JSON.parse(val);
      // x轴
      this.options.xAxis.data = staticData.categories;
      // series
      const series = this.options.series;
      for (const i in series) {
        if (series[i].type == "line") {
          series[i].data = staticData.series[0].data;
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
      // x轴
      this.options.xAxis.data = val.xAxis;
      // series
      const series = this.options.series;
      for (const i in series) {
        if (series[i].type == "line") {
          series[i].data = val.series[i].data;
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
