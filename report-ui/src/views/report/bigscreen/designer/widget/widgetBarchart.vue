<template>
  <div :style="styleObj">
    <v-chart :options="options" autoresize />
  </div>
</template>

<script>
export default {
  name: "WidgetBarchart",
  components: {},
  props: {
    value: Object,
    ispreview: Boolean
  },
  data() {
    return {
      options: {
        grid: {},
        legend: {
          textStyle: {
            color: "#fff"
          }
        },
        xAxis: {
          type: "category",
          data: [],
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff"
            }
          }
        },
        yAxis: {
          type: "value",
          data: [],
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
            type: "bar",
            barGap: "0%",
            itemStyle: {
              borderRadius: null
            }
          }
        ]
      },
      optionsStyle: {}, // 样式
      optionsData: {}, // 数据
      optionsSetup: {},
      flagInter: null
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
        this.optionsCollapse = val.setup;
        this.optionsSetup = val.setup;
        this.editorOptions();
      },
      deep: true
    }
  },
  mounted() {
    this.optionsStyle = this.value.position;
    this.optionsData = this.value.data;
    this.optionsCollapse = this.value.setup;
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
      this.setOptionsMargin();
      this.setOptionsLegend();
      this.setOptionsColor();
      this.setOptionsData();
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
    // 数值设定 or 柱体设置
    setOptionsTop() {
      const optionsCollapse = this.optionsSetup;
      const series = this.options.series;

      for (const key in series) {
        if (series[key].type == "bar") {
          series[key].label = {
            show: optionsCollapse.isShow,
            position: "top",
            distance: 10,
            fontSize: optionsCollapse.fontSize,
            color: optionsCollapse.subTextColor,
            fontWeight: optionsCollapse.fontWeight
          };
          series[key].barWidth = optionsCollapse.maxWidth;
          series[key].barMinHeight = optionsCollapse.minHeight;
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
      const itemStyle = {
        normal: {
          color: params => {
            return arrColor[params.dataIndex];
          },
          barBorderRadius: optionsCollapse.radius
        }
      };
      for (const key in this.options.series) {
        if (this.options.series[key].type == "bar") {
          this.options.series[key].itemStyle = itemStyle;
        }
      }
      this.options = Object.assign({}, this.options);
    },
    // 数据解析
    setOptionsData() {
      const optionsSetup = this.optionsSetup;
      const optionsData = this.optionsData; // 数据类型 静态 or 动态
      optionsData.dataType == "staticData"
        ? this.staticDataFn(optionsData.staticData, optionsSetup)
        : this.dynamicDataFn(
            optionsData.dynamicData,
            optionsData.refreshTime,
            optionsSetup
          );
    },
    // 静态数据
    staticDataFn(val, optionsSetup) {
      const staticData = JSON.parse(val);
      // x轴
      if (optionsSetup.verticalShow) {
        this.options.xAxis.data = [];
        this.options.yAxis.data = staticData.categories;
        this.options.xAxis.type = "value";
        this.options.yAxis.type = "category";
      } else {
        this.options.xAxis.data = staticData.categories;
        this.options.yAxis.data = [];
        this.options.xAxis.type = "category";
        this.options.yAxis.type = "value";
      }
      // series
      const series = this.options.series;
      for (const i in series) {
        if (series[i].type == "bar") {
          series[i].data = staticData.series[0].data;
        }
      }
    },
    // 动态数据
    dynamicDataFn(val, refreshTime, optionsSetup) {
      if (!val) return;
      if (this.ispreview) {
        this.getEchartData(val, optionsSetup);
        this.flagInter = setInterval(() => {
          this.getEchartData(val, optionsSetup);
        }, refreshTime);
      } else {
        this.getEchartData(val, optionsSetup);
      }
    },
    getEchartData(val, optionsSetup) {
      const data = this.queryEchartsData(val);
      data.then(res => {
        this.renderingFn(optionsSetup, res);
      });
    },
    renderingFn(optionsSetup, val) {
      // x轴
      if (optionsSetup.verticalShow) {
        this.options.xAxis.data = [];
        this.options.yAxis.data = val.xAxis;
        this.options.xAxis.type = "value";
        this.options.yAxis.type = "category";
      } else {
        this.options.xAxis.data = val.xAxis;
        this.options.yAxis.data = [];
        this.options.xAxis.type = "category";
        this.options.yAxis.type = "value";
      }

      // series
      const series = this.options.series;
      for (const i in series) {
        if (series[i].type == "bar") {
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
