// 引入
import axios from '@/unitl/myaxios.js'
// 登录
export const login = (data) => {
  return axios({
    // 请求路由的路径
    url: 'login',
    // 请求的方式
    methods: 'post',
    // 返回的数据
    data
  })
}
