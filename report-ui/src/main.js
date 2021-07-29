import Vue from 'vue'

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import '@/assets/styles/common.css'
import '@/assets/styles/index.scss'// custome global css

// app router vuex filter mixins
import App from './App'
import router from './router'
import store from './store'
import * as filter from './filter'
import mixins from '@/mixins'
import echarts from 'echarts';
// 全局定义echarts
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
//import 'echarts-liquidfill'
// import 'echarts-gl'
Vue.component('v-chart', ECharts)

// anji component
import anjiCrud from '@/components/AnjiPlus/anji-crud/anji-crud'
import anjiSelect from '@/components/AnjiPlus/anji-select'
Vue.component('anji-crud', anjiCrud)
Vue.component('anji-select', anjiSelect)

// permission control
import '@/permission'
// 按钮权限的指令
import permission from '@/components/Permission/index'
Vue.use(permission)

import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
Vue.use(Avue);

import VueSuperSlide from 'vue-superslide'
Vue.use(VueSuperSlide)

// enable element zh-cn
Vue.use(ElementUI, { zhLocale })

// register global filter.
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key])
})

// register global mixins.
Vue.mixin(mixins)


// 分页的全局size配置;
Vue.prototype.$pageSizeAll = [10, 50, 100, 200, 500]

Vue.config.productionTip = false

// create the app instance.
new Vue({ el: '#app', router, store, render: h => h(App) })
