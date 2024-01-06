import { useState, useEffect } from 'react';
import axios from 'axios';
import AxiosInstance from '../axios/AxiosInstance';

const useCreate =  () => {
    const [load,setLoad]=useState(false) 
    const [res,setRes]=useState(null) 
    const [error,setError]=useState(false)  
    const [errorDetails,setErrorDetails]=useState(null)  
    const [success,setSuccess]=useState(false)
    const create=(url,data)=>{
        setLoad(true)
        AxiosInstance.post(url,data).then((result) => {
            setRes(result.data)
            if(result.status){
                setSuccess(true)
            }
        }).catch((err) => {
            setErrorDetails(err.response.data);
            if(err){
                setError(true)
            }
        }).finally(()=>{
            setLoad(false)
            setTimeout(() => {
                setSuccess(false)
                setError(false)
            }, 4000);
        }) 
        
    }
   

    return { create,res, load, error, success,errorDetails };
};

export default useCreate;