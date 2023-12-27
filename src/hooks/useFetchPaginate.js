import { useState, useEffect } from 'react'; 
import AxiosInstance from '../axios/AxiosInstance';
const useFetchPaginate = (url) => {
    const [data, setData] = useState([])
    const [load, setLoad] = useState(true)
    const [prev,setPrev]=useState(null)
    const [next,setNext]=useState(null)
    const [count,setCount]=useState(null)
    const [error,setError]=useState(null)
  useEffect(() => {
     
    getData(url);
     
  }, [url]);
  const getData = async (url) => { 
    try { 
      const res = await AxiosInstance.get(url); 
      setCount(res.data.count)
      setNext(res.data.next)
      setPrev(res.data.previous)
      setData(res.data.results);
      setLoad(false);
    } catch (error) {
      setError(error);
      setLoad(false);
    }
  };
  const nextPage=()=>{ 
    if(next){ 
        setLoad(true)
        AxiosInstance.get(next).then(res=>{ 
            setCount(res.data.count)
            setNext(res.data.next)
            setPrev(res.data.previous)
            setData(res.data.results);  
        }).catch(err=>{}).finally(()=>{setLoad(false)})
    }    
}
const prevPage=()=>{ 
if(prev){ 
    setLoad(true)
    AxiosInstance.get(prev).then(res=>{ 
        setCount(res.data.count)
        setNext(res.data.next)
        setPrev(res.data.previous)
        setData(res.data.results);  
    }).catch(err=>{}).finally(()=>{setLoad(false)})
}

}

  return { data, load,count,prev,next, error,getData,nextPage,prevPage };
};

export default useFetchPaginate;