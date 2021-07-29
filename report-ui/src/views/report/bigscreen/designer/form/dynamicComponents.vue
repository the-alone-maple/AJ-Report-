<template>
  <div>
    <el-form label-width="100px" label-position="left">
      <el-form-item label="数据集">
        <el-select
          size="mini"
          v-model="dataSetValue"
          clearable
          placeholder="请选择"
          @change="selectDataSet"
        >
          <el-option
            v-for="item in dataSet"
            :key="item.code"
            :label="item.setName"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item
        v-for="(item, index) in userNameList"
        :key="index"
        :label="item.paramName"
      >
        <el-input v-model.trim="item.sampleItem" size="mini" />
      </el-form-item>
      <el-form-item v-for="item in setParamList" :key="item" :label="item">
        <Dictionary
          v-model="params"
          :dict-key="'CHART_PROPERTIES'"
          @input="selectParams($event, item)"
        />
      </el-form-item>
      <el-button
        style="width: 100%"
        type="primary"
        plain
        size="mini"
        @click="saveDataBtn"
        >刷新</el-button
      >
    </el-form>
  </div>
</template>
<script>
import { queryAllDataSet, detailBysetId } from "@/api/bigscreen";
import Dictionary from "@/components/Dictionary/index";

export default {
  name: "DynamicComponents",
  components: {
    Dictionary
  },
  model: {
    prop: "formData",
    event: "input"
  },
  props: {
    chartType: String,
    props: ["formData"]
  },
  data() {
    return {
      dataSetValue: "",
      dataSet: [], // 数据集
      userNameList: [], // 用户
      setParamList: [], // 对应的不同的图形数据参数
      params: {},
      chartProperties: {}
    };
  },
  computed: {
    setCode() {
      let code = "";
      this.dataSet.forEach(el => {
        if (el.id == this.dataSetValue) {
          code = el.setCode;
        }
      });
      return code;
    }
  },
  mounted() {
    this.loadDataSet();
  },
  methods: {
    async loadDataSet() {
      const { code, data } = await queryAllDataSet();
      this.dataSet = data;
      if (code != "200") return;
    },
    async selectDataSet() {
      const { code, data } = await detailBysetId(this.dataSetValue);
      this.userNameList = data.dataSetParamDtoList;
      this.setParamList = data.setParamList;
      if (code != "200") return;
    },
    async saveDataBtn() {
      const contextData = {};
      for (let i = 0; i < this.userNameList.length; i++) {
        contextData[this.userNameList[i].paramName] = this.userNameList[
          i
        ].sampleItem;
      }
      const params = {
        chartType: this.chartType,
        setCode: this.setCode,
        chartProperties: this.chartProperties,
        contextData
      };
      this.$emit("input", params);
      this.$emit("change", params);
    },
    selectParams(val, key) {
      this.chartProperties[key] = val;
    }
  }
};
</script>
<style lang="sass" scoped></style>
