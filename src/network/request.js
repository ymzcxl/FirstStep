import axios from 'axios'

// 1.配置这个模块特有的基础配置
const instant = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  timeout: 5000
})

// 2.axios拦截器
// 2.1 请求拦截
instant.interceptors.request.use(
  config => { // 拿到的参数是之前传过来的配置
    // 1. 比如config中的一些信息不符合服务器的要求
    // 2. 比如每次发送网络请求时，都希望在界面显示一个请求的图标
    // 3. 某些网络请求（比如登陆(token)），必须携带一些特殊的信息
    // config.headers['CLIENT-TOKEN'] = token; // 请求头设置token
    return config // 拦截别人的配置，不返还谁拿得到
  },
  err => {
    console.log(err)
  })
// 2.2 响应拦截
instant.interceptors.response.use(res => { // 拿到的参数是结果
  // 这个的作用拿到data，不要其他乱七八糟的东西
  // res.data
  // 这里拦截了也要return一下呀
  return res.data
}, err => {
  console.log(err)
})
// 3.真正的网络请求
return instant
