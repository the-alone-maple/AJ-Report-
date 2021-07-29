/*
* 新增数据源时，根据不同的连接类型，渲染扩展输入字段drivreConfig表单
* @property dictname ENABLE_FLAG
* @property placeholder
* @property style
*/
<template>
<span>
  <span class="grid-content" v-for="(item, index) in formItemsArr" :key="index" style="">
    <EachForm :item="item" v-model="ConfigData" @eachChange='eachChange'></EachForm>
  </span>
</span>
</template>

<script>
import EachForm from "./eachForm"
export default {
  props: {
    value: {
      type: [Object,String],
      default:()=>{}
    },
    formItems: {
      type: Array,
      default:()=>[]
    }
  },
  components:{
    EachForm
  },
  data () {
    return {
      // inputVals:[],
      ConfigData:{
        payType: []
      },    // 要传递出去的数据
      formItemsArr: []
    }
  },
  watch: {
    value(newValue, oldValue) {
      if ( typeof newValue == "string") {
        // 传string进来 表示编辑进来 重新赋值给 
        setTimeout(()=>{   //保证动态select 渲染完成再赋值
          this.ConfigData = JSON.parse(newValue || "{}")
        },10)
      }else{
        this.ConfigData = newValue || {};
      }
    },
    formItems(val){
      console.log(val, 'formItems1');
      this.formItemsArr = val
      console.log(this.formItemsArr)
    }
  },
  computed: {},
  methods: {
    eachChange(val){
      console.log(val, '回传的值');
      this.$emit('myChanged', val)
    },
    // 无论哪个输入框改变 都需要触发事件 将值回传
    drivreConfigChange(val,key){
      const {ConfigData}  = this
      // console.log(val,key,"方法方法付付");
      // 针对type是下拉框的处理
      if (val.extend) {
        this.$set(ConfigData,key,val.value);
      }else{
        this.$set(ConfigData,key,val);
      }
      this.$emit('input', ConfigData) 
      this.$emit('myChanged', ConfigData) 
    },

    //重新选择了 数据连接类型 就重置输入框的值
    clearInput(){
      // this.inputVals.forEach((item,index,arr) => this.$set(arr,index,''));
      // 清空 对象
      let obj = this.ConfigData
      Object.keys(obj).forEach(key => {
        if (obj[key]) obj[key] = "";
      });

    }
  }
}
</script>