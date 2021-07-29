<!--
type: 时间日期格式
  datetimerange： 日期时间格式 2020-12-04 00:00:00, 2021-01-01 23:59:59
  daterange: 日期时间格式 2020-12-01，2020-12-06
valueFormat: 绑定值的格式,一般是参数传到后台的数据格式
defaultTime: 选中日期后的默认具体时刻 数据格式为数组 ['00:00:00', '23:59:59']
pickerOptions: 快捷键以及配置项
<data-picker 
:type="'datetimerange'" 
:valueFormat="'yyyy-MM-dd HH:mm:ss'" 
:pickerOptions="pickerOptions" 
:defaultTime="['00:00:00','23:59:59']"
@changeTimeValue="changeTimeValue"
:vModel="dateTimeRangeVal"
></data-picker>
-->
<template>
  <div>
     <el-date-picker
     @change="changeTimeValue"
      v-model="selectTimeDate"
      :type="type"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :value-format="valueFormat"
      unlink-panels
      :picker-options="pickerOptions"
      :default-time="defaultTime"
     >
    </el-date-picker>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    valueFormat: {
      type: String,
      default: ''
    },
    pickerOptions: {
      type: Object,
      default: () => {
        return {}
      }
    }, 
    defaultTime: {
      type: Array,
      default: () => {
        return []
      }
    },
    vModel: {
      type: Array,
      default: () => {
        return []
      }
    },
  },
  data() {
    return {
      selectTimeDate: []
    }
  },
  watch: {
    vModel(val) {
      this.selectTimeDate = val
    }
  },
  methods: {
    changeTimeValue(val) {
      this.$emit('changeTimeValue', val)
    }
  }
}
</script>