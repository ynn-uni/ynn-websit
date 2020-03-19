import { getAction } from '@/utils/request'

export const getNewsList = (data = {}) => {
  return getAction(`/Apis/Article/getArticleList`, data)
}

export const getNewsDetails = (data = {}) => {
  return getAction(`/Apis/Article/getArticleDetails`, data)
}
export const getExpertList = (data = {}) => {
  return getAction(`/Apis/Expert/getExpertList`, data)
}
export const getExpertDetails = (data = {}) => {
  return getAction(`/Home/News/getExpertDetails`, data)
}
export const getRecruitList = (data = {}) => {
  return getAction(`/Apis/Project/getProjectList`, data)
}
export const getRecruitDetails = (data = {}) => {
  return getAction(`/Apis/Project/getProjectDetails`, data)
}

