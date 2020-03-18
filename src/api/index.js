import { getAction } from '@/utils/request'

export const getNewsList = (data = {}) => {
  return getAction(`/Apis/Article/getArticleList`, data)
}

export const getNewsDetails = (data = {}) => {
  return getAction(`/Apis/Article/getArticleDetails`, data)
}
export const getExpertList = (data = {}) => {
  return getAction(`/Home/News/getExpertList`, data)
}
export const getExpertDetails = (data = {}) => {
  return getAction(`/Home/News/getExpertDetails`, data)
}
export const getRecruitList = (data = {}) => {
  return getAction(`/Home/News/getRecruitList`, data)
}
export const getRecruitDetails = (data = {}) => {
  return getAction(`/Home/News/getRecruitDetails`, data)
}

