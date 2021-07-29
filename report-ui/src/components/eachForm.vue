<template>
  <span>
    <!-- input 输入框-->
    <el-form-item :label="item.label"  v-if="item.type == 'input'" :rules="[{required:item.required}]">
      <el-input 
      :name="item.name" 
      clearable
      :show-password ="item.name == 'password'?true:false"
      :placeholder="item.placeholder" 
      v-model.trim="ConfigData[item.name]"
      @change="drivreConfigChange($event,item.name)"
      ></el-input>
    </el-form-item>
    <!-- input-number 数字输入框-->
    <el-form-item :label="item.label"  v-if="item.type == 'input-number'" :rules="[{required:item.required}]">
      <el-input-number
      style="width:100%"
      :min="1"
      :label="item.label"
      v-model.trim="ConfigData[item.name]"
      @change="drivreConfigChange($event,item.name)"
      ></el-input-number>
    </el-form-item>
    <!-- select 下拉 显示给定的值-->
    <el-form-item :label="item.label" v-if="item.type == 'select'" :rules="[{required:item.required}]">
      <el-select @change="drivreConfigChange($event,item.name)" v-model="ConfigData[item.name]" :placeholder="item.placeholder" style="width:100%">
        <el-option
          v-for="option in item.options"
          :key="option.value"
          :label="option.label"
          :value="option.value">
        </el-option>
      </el-select>
    </el-form-item>
    <!-- select-code 下拉 直接取字典值 -->
    <el-form-item :label="item.label" v-if="item.type == 'code-select'" :rules="[{required:item.required}]">
      <code-select v-model="ConfigData[item.name]" :inputName="item.name"  :dictname="item.dictname" mystyle="width: 100%;" placeholder="请选择" @changed="drivreConfigChange($event,item.name)" />
    </el-form-item>
    <!-- textarea 文本框-->
    <el-form-item :label="item.label" v-if="item.type == 'textarea'" :rules="[{required:item.required}]">
      <el-input 
        type="textarea"
        clearable
        autosize
        :placeholder="item.placeholder" 
        v-model="ConfigData[item.name]"
        @change="drivreConfigChange($event,item.name)"
      ></el-input>
    </el-form-item>
    <!-- checkbox  多选框 -->
    <el-form-item :label="item.label" v-if="item.type == 'checkbox-group'" :rules="[{required:item.required}]">
      <el-checkbox-group v-model="ConfigData[item.name]" @change="drivreConfigChange($event,item.name)">
        <el-checkbox v-for="(option,index) in item.options" :key="index" :label="option">{{option}}</el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <!-- radio  单选框 -->
    <el-form-item :label="item.label" v-if="item.type == 'radio-group'" :rules="[{required:item.required}]">
      <el-radio-group v-model="ConfigData[item.name]" @change="drivreConfigChange($event,item.name)">
        <el-radio v-for="(option,index) in item.options" :key="index" :label="option">{{option}}</el-radio>
      </el-radio-group>
    </el-form-item>
    <!-- 文件上传 -->
    <el-form-item :label="item.label" v-if="item.type == 'upload'" :rules="[{required:item.required}]" class="elForm">
      <el-upload
        :action="uploadUrl"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-success="(response, file, fileList) => handleSuccess(response, file, fileList, item.name)"
        :on-remove="(file, fileList) => handleRemove(file, fileList, item.name)"
        :class="ConfigData[item.name]?'hide_box':''"
        :file-list="ConfigData[item.name] | imgFilter"
        :limit="1"
        >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </el-form-item>
  </span>
</template>

<script>
import CodeSelect from "@/components/codeSelect.vue";
import axios from 'axios';
export default {
  props: {
    value: {
      type: [Object, String],
      required: true,
      default:()=>{}
    },
    // element 单个组件信息值
    item:{
      type:Object,
      required: true,
      default:()=>{}
    }
  },
  components:{
    CodeSelect
  },
  data () {
    return {
      // inputVals:[],
      ConfigData:{
        payType: []
      },    // 要传递出去的数据
      formItemsArr: [],
      dialogImageUrl: '',
      dialogVisible: false,
      // fileList: [],
      uploadUrl: axios.defaults.baseURL + '/auth-service/file/upload'
    }
  },
  watch: {
    value(newValue, oldValue) {
      // console.log(newValue,"newValue");
      this.ConfigData = newValue
    },
    item(val){
      console.log(val, 'item233');
    }
  },
  computed: {},
  filters: {
    imgFilter(val){
      if(val) {
        return [{url: val}]
      }
    }
  },
  methods: {
    // 上传成功的回调
    handleSuccess(response, file, fileList, imgName) {
      let fileListArr = []
      fileList.forEach(el => {
        if(el) {
          fileListArr.push(el.response.repData)
        }
      })
      this.drivreConfigChange(fileListArr.join(','), imgName)
    },
    // 移除图片的回调
    handleRemove(file, fileList, imgName) {
      console.log(imgName)
      this.ConfigData[imgName] = ""
    },
    // 预览图片
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
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
      this.$emit('eachChange', ConfigData)
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
<style lang="scss" scoped>
.elForm /deep/ .el-upload--picture-card{
  width: 80px;
  height: 80px;
  line-height: 83px;
}
.elForm /deep/ .el-upload-list__item {
  width: 80px;
  height: 80px;
}
.hide_box /deep/ .el-upload--picture-card{
  display: none;
}
</style>