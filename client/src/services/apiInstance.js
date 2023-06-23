import axios from 'axios'

const apiInstance = axios.create({
  baseURL: process.env.REACT_API_URL
})

apiInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default apiInstance
