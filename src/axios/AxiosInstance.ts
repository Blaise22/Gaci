 




import axios from 'axios';
import baseUrl from '../baseUrl/baseUrl';
const AxiosInstance = axios.create({
  baseURL: baseUrl+'/api/', // Replace with your API base URL
  // Timeout duration in milliseconds
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers you need, such as authentication headers
  },
});

AxiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage?.getItem('accessToken');

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

AxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config; 
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; 
      const refreshToken = localStorage.getItem('refreshToken'); 
      return AxiosInstance
        .post('auth/token/refresh/', { refresh:refreshToken })
        .then((res) => { 
          if (res.status === 200) {
            // Save the new access token to local storage
            
            localStorage.setItem('accessToken', res.data.access); 
            // Retry the original request with the new access token
            originalRequest.headers['Authorization'] =
              'Bearer ' + res.data.accessToken;
            return AxiosInstance(originalRequest);
          }
        }).catch(err=>{ 
          
        })
        ;
    }

    return Promise.reject(error);
  }
);

export default AxiosInstance;

