// import axios from 'axios'
import Vue from 'vue'
import './../plugins/axios'
// const eaxios = axios.create({
//   // 域名
//   baseURL: 'http://localhost:3033'
// })

console.log(Vue.axios)

const $axios = Vue.axios
export const getNewsList = (page, size) => {
  return $axios.get(`/Home/News/getNewsList?page=${page}&size=${size}`)
}

export const getNewsDetails = (id) => {
  return $axios.get(`/Home/News/getNewsDetails?id=${id}`)
}
export const getExpertList = (page, size) => {
  return $axios.get(`/Home/News/getExpertList?page=${page}&size=${size}`)
}
export const getExpertDetails = (id) => {
  return $axios.get(`/Home/News/getExpertDetails?id=${id}`)
}
export const getRecruitList = (page, size) => {
  return $axios.get(`/Home/News/getRecruitList?page=${page}&size=${size}`)
}
export const getRecruitDetails = (id) => {
  return $axios.get(`/Home/News/getRecruitDetails?id=${id}`)
}
// 示例稍后可删除
// export const saveClassfiyList = (val) => {
//   return $axios.get('/saveclassfiy/?clyname=' + val)
// }
// export const saveDetailInfo = (obj) => {
//   return $axios.post('/savedetailinfo', obj)
// }
// export const getDetailList = () => {
//   return $axios.get('/detaillist')
// }
