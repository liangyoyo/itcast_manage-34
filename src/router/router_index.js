//引入VUE实例
import Vue from 'vue'
//引入路由
import  VueRouter from 'vue-router'
//引入单文件组件
import Login from '@/views/login.vue'
//使用
Vue.use(VueRouter)
//创建路由对象
var router = new VueRouter({
    //进行路由配置
    routes:[
        {
        name: 'login',
        path: '/login',
        component: Login
        }
    ]
})
//暴露路由对象
export default router