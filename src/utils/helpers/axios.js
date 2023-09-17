import axios from 'axios';
// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  ({ response }) => {
    return Promise.reject((response && response.data) || 'При запросе произошла ошибка');
  }
);

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    return {
      ...config,
      headers: {
        ...config.headers,
        'Content-Type': 'application/json',
        ...(!accessToken ? {} : { Authorization: `Bearer ${accessToken}` }),
      },
    };
  },
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
