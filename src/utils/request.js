import axios from 'axios'
import { Message } from 'element-ui'

// create an axios instance
const service = axios.create({// http://rap2.taobao.org:38080/app/mock/245873
  baseURL: process.env.VUE_APP_BASE_API // url = base url + request url
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(

  response => {
    const res = response && response.data
    // if the custom code is not 200, it is judged as an error.
    if (res.status !== 200) {
      // 错误处理
      errorHandler(res)
      return Promise.reject(response.data)
    } else {
      return res.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    errorHandler(error.response)
    return Promise.reject(error)
  }
)

export function getAction(url = '', data = {}) {
  return service({
    url,
    method: 'get',
    params: data

  })
}
export function postAction(url = '', data = {}) {
  return service({
    url,
    method: 'post',
    data

  })
}
export default service

function errorHandler(response) {
  const { status, msg } = response
  switch (status) {
    case 404:
      tip('您需要的资源没有找到！')
      break
    case 502:
      tip('错误网关，请联系管理员')
      break
    default:tip(msg)
  }
}

function tip(msg = '未知错误，请联系管理员') {
  Message({
    message: msg,
    type: 'error',
    duration: 5 * 1000
  })
}
