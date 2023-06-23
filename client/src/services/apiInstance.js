import axios from "axios";
import { TOKEN_NAME } from "../context/auth.context";

const apiInstace = axios.create({
    baseURL: process.env.REACT_API_URL
});

apiInstace.interceptors.request.use(config => {
  const token = localStorage.getItem(TOKEN_NAME);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default apiInstace;