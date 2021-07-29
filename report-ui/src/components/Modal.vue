<template>
  <!-- 过渡动画 -->
  <transition name="modal-fade">
    <!-- 关闭模态框事件 和 控制模态框是否显示 -->
    <div class="modal-backdrop" @click="$emit('closeModal')" v-show="show">
      <div class="modal" @click.stop>
        <div class="modal-body" id="modalDescription">
          <!-- 状态提示文字的插槽 -->
          <slot name="status">{{statusText}}</slot>
          <slot name="body"></slot>
          <el-button class="icon-btn_style fr" style="font-size: 24px" @click="$emit('closeModal')">
            ×
          </el-button>
        </div>
        <!-- 模态框内容文字 可有可无 -->
        <div class="modal-content" v-if="contentText">
            <slot>this is Modal-content</slot>
        </div>
        <!--<ul>-->
          <!--&lt;!&ndash; 模态框按钮 可选单个确定按钮 和 两个确定、取消按钮 &ndash;&gt;-->
          <!--&lt;!&ndash; 单个确定按钮 &ndash;&gt;-->
          <!--<li v-if="alert" :class="buttonBackground" @click.stop="$emit('button')">确定</li>-->
          <!--&lt;!&ndash; 确定和取消按钮 &ndash;&gt;-->
          <!--<li v-else class="confirm">-->
            <!--<div>取消</div>-->
            <!--<div :class="buttonBackground" @click.stop="$emit('confirm')">{{sure}}</div>-->
          <!--</li>-->
        <!--</ul>-->
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "modal",
  // 通过 props 传值
  props: {
    imgadress: String,
    title: String, //标题文字
    show: {
      //显示取消
      type: Boolean,
      default: false
    },
    statusText: String, //状态文字
    contentText: String, //描述文字
    IDList: Array, //ID 列表
    payMoney: Number,
    yuan: String,
    buttonBackground: String, //按钮背景色
    alert: String, //判断一个还是两个按钮
    sure: String //第二个按钮的提示文字
  },
  data() {
    return {
      closemodal: "close",
      // isModalVisible:false,
      // 确定和取消按钮的两种颜色
      // red: "redBackground",
      // blue: "blueBackground"
    };
  },
  components: {
  },
  methods: {
    // 关闭模态框事件
    close() {
      this.$emit("close");
    }
  }
};
</script>
<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 12;
  .modal {
    width: 74%;
    background-color: #fff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    // width: 11.8rem;
    position: relative;
    border-radius: 0.2rem;
    padding: 20px;
    .img {
      width: 3.6rem;
      height: 3.6rem;
      margin: 0.8rem 4.1rem;
    }
    .modal-header {
      padding: 0.6rem 4.1rem;
      width: 3.6rem;
      height: 3.6rem;
      box-sizing: border-box;
      .img {
        width: 100%;
        height: 100%;
      }
      div {
        width: 100%;
        height: 100%;
        background: #000;
      }
    }
    .modal-body {
      width: 100%;
      padding:1.6rem;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        width: 2rem;
        height: 0.04rem;
        background: #eeeee5;
      }
    }
    .modal-content {
      width: 100%;
      // height: 0.6rem;
       max-height: 61vh;
      overflow: auto;
      margin-bottom: 0.8rem;
      text-align: center;
      color: #34304b;
      span {
        color: #32b8b9;
        i {
          color: #4f4f4f;
        }
      }
    }
    ul {
      li {
        width: 100%;
        height: 1.52rem;
        line-height: 1.52rem;
        text-align: center;
        color: #fff;
        font-size: 0.56rem;
        letter-spacing: 0.4rem;
      }
      .confirm {
        display: flex;
        div:nth-child(1) {
          flex: 1;
          background: #dedede;
          color: #bcbbbf;
        }
        div:nth-child(2) {
          flex: 1;
          color: #fff;
        }
      }
    }
  }
}
/* 动画 */
.modal-fade-enter,
.modal-fade-leave-active {
    opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.5s ease;
}
</style>
