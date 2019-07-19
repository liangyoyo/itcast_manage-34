import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router_index.js'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入公共样式
import '@/styles/index.less'
// 让Vue使用 element-ui
Vue.use(ElementUI)
// 引入路由文件

Vue.config.productionTip = false
new Vue({
  // 注入
  router,
  render: h => h(App)
}).$mount('#app')
