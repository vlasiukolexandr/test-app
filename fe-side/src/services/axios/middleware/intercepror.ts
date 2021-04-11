import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const AddAxiosInreceptors = () => {
  // Add a request interceptor
  axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      config.baseURL = process.env.REACT_APP_BASE_API_URL || 'http://localhost:3001';

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    (response: AxiosResponse) => {
      return response.data || response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return null;
}

export default AddAxiosInreceptors;
