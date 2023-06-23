import axios from 'axios'

const apiInstance = axios.create({
  baseURL: "http://localhost:5005/api"
})

apiInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default apiInstance
