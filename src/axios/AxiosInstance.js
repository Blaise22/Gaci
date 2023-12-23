import axios from 'axios';
import baseURL from './baseURL'
const AxiosInstance = axios.create({
  baseURL: baseURL,
});

// Set the Authorization header with the token
AxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Intercept 401 (Unauthorized) responses to refresh the token
AxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        try {
          // Make a request to refresh the token
          const response = await axios.post(baseURL+'auth/refresh', {
            refreshToken: refreshToken,
          });
          const newToken = response.data.token;
          // Update the token in localStorage
          localStorage.setItem('token', newToken);
          // Update the Authorization header with the new token
          api.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
          // Retry the original request with the new token
          return api(originalRequest);
        } catch {
          // Refresh token request failed, redirect to login or handle the error
          // ...
        }
      } else {
        // No refreshToken found, redirect to login or handle the error
        // ...
      }
    }
    return Promise.reject(error);
  }
);

export default AxiosInstance;