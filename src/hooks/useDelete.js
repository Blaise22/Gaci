import { useState, useEffect } from 'react';
import axios from 'axios';
import AxiosInstance from '../axios/AxiosInstance';

const useDelete =  () => {
    const [load,setLoad]=useState(false) 
    const [error,setError]=useState(false)  
    const [success,setSuccess]=useState(false)
    const del =(url)=>{
        setLoad(true)
        AxiosInstance.delete(url).then((result) => {
            if(result.status){
                setSuccess(true)
            }
        }).catch((err) => {
            console.log(err);
            if(err){
                setError(true)
            }
        }); 
        setTimeout(() => {
            setLoad(false)
            setSuccess(false)
            setError(false)
        }, 4000);
    }
   

    return { del, load, error, success };
};

export default useDelete;