import Vue from 'vue'
import axios from 'axios'
// 生产环境和开发环境的地址切换
const root = process.env.VUE_APP_ROOT

const http = axios.create({
  timeout: 1000 * 30,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})


/**
 * 请求地址处理
 * @param {*} actionName action方法名称
 */
http.adornUrl = actionName => {
  // 非生产环境 && 开启代理, 接口前缀统一使用[/proxyApi/]前缀做代理拦截!
  return (
    // (process.env.NODE_ENV == 'development' ? '/proxyApi/' : root) + actionName
    root + actionName
  )
}


export default http
