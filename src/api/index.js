import { getAction } from '@/utils/request'

export const getNewsList = (data = {}) => {
  return getAction(`/Home/News/getNewsList`, data)
}

export const getNewsDetails = (data = {}) => {
  return getAction(`/Home/News/getNewsDetails`, data)
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

