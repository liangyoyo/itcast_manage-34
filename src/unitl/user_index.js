// 引入
import axios from '@/api/myaxios.js'
// 登录
export const login = (data) => {
  console.log(data)
  return axios({
    // 请求路由的路径
    url: 'login',
    // 请求的方式
    method: 'post',
    // 返回的数据
    data
  })
}
