import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const readAccessToken = process.env.NEXT_PUBLIC_READ_ACCESS_TOKEN;

axiosInstance.interceptors.request.use(
  (config) => {
    // const token = readAccessToken;
    // if (token) {
    // config.headers.Authorization = `Bearer ${token}`;
    // }
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    if (config.params) {
      config.params["api_key"] = apiKey;
    } else {
      config.params = { api_key: apiKey };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
