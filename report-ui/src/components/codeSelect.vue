/*
* 使用方式 <code-select v-model="params.enableFlag" dictname="ENABLE_FLAG" @changed="handler" placeholder="启用状态" style="width: 120px;"/>
* 根据/data/basecode.js中字典值，生成下拉列表
* @property dictname ENABLE_FLAG
* @property placeholder
* @property style
*/

<template>
  <el-select :name="inputName" v-model="selectValue" :disabled="disabled" :placeholder="placeholder" :style="mystyle" clearable class="filter-item code-selected" @change="selectChange" @visible-change="drowShow">
    <el-option v-for="(item,index) in optionList" :key="index" :label="item[label]" :value="item[valWord]" />
  </el-select>
</template>

<script>
  import request from '@/api/axios'
  import { getStorageItem } from '@/utils/storage'
  export default {
    props: {
      value: {
        type: [String, Number],
        default: ''
      },
      //用localStrage中的basecode生成下拉
      dictname: {
        type: String,
        default: ''
      },
      //远程请求，生成下拉
      remoteurl: {
        type: String,
        default: ''
      },
      remoteParams: {
        type: Object,
        default: ()=>{}
      },
      inputName: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: '请选择'
      },
      mystyle: {
        type: String,
        default: 'width: 100px'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      label:{
        type: String,
        default: 'label'
      },
      valWord:{
        type: String,
        default: 'value'
      },
    },
    data () {
      return {
        selectValue: '',
        optionList: [],
        dictList: [],
      }
    },
    watch: {
      value:{
        handler(newValue, oldValue){
          if (typeof newValue === 'string') {
            this.selectValue = newValue
          } else {
            this.selectValue = this.parseString(newValue);
          }
        },
        immediate: true
      },
    },
    computed: {},
    created () {
      if (this.dictname !== '') {
        this.optionList = this.getListFromBaseCode()
      }
      if (this.remoteurl !== '') {
        this.getListFromAjax()
      }
    },
    mounted () {},
    methods: {
      getListFromBaseCode() {
        let basecode = getStorageItem('queryForCodeSelect')
        let list = []
        if (!basecode.hasOwnProperty(this.dictname)) {
          return []
        }
        this.dictList = basecode[this.dictname]
        for (let i = 0; i < this.dictList.length; i++) {
          var codeItem = this.dictList[i]
          list.push({ 'value': codeItem.value.toString(), 'label': codeItem.label })
        }
        return list

      },

      getListFromAjax() {
        //将url中的参数转换成json，提交
        var reqData = {};
        /*var params = this.remoteurl.slice(this.remoteurl.indexOf('?') + 1).split('&');
        for (var i = 0; i < params.length; i++) {
            var map = params[i].split('=');
            var key = map[0];
            var val = map[1];
            if(','.indexOf(val)>0 && val.split(',').length>1){
              val = val.split(',');
            }
            reqData[map[0]] = val;
        }*/
        if(this.remoteParams != null){
          reqData = this.remoteParams;
        }
        request({
          url: this.remoteurl,
          method: 'post',
          data: reqData
        }).then(response => {
          if (response.repCode == '0000') {
            this.optionList = response.repData
          }
        })
      },

      selectChange (val) {
        this.$emit('input', val)
        var list = this.optionList
        for (var i in list) {
          var item = list[i]
          if (item[this.valWord] === val) {
            this.$emit('changed', item)
            break
          }
        }
      },
      drowShow (val) {
        this.$emit('show', val)
        this.$emit('click', val)
      }
    }
  }
</script>

<!--<style rel="stylesheet/scss" lang="less" scoped>-->
<!--</style>-->
