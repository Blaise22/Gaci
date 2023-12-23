import { useState, useEffect } from 'react'; 
import AxiosInstance from '../axios/AxiosInstance';
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [load, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getData(url);
  }, [url]);
  const getData = async (url) => { 
    try {
      const response = await AxiosInstance.get(url);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { data, load, error,getData };
};

export default useFetch;