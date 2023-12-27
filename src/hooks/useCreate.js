import { useState, useEffect } from 'react';
import axios from 'axios';
import AxiosInstance from '../axios/AxiosInstance';

const useCreate =  () => {
    const [load,setLoad]=useState(false) 
    const [error,setError]=useState(false)  
    const [success,setSuccess]=useState(false)
    const create=(url,data)=>{
        setLoad(true)
        AxiosInstance.post(url,data).then((result) => {
            if(result.status){
                setSuccess(true)
            }
        }).catch((err) => {
            console.log(err);
            if(err){
                setError(true)
            }
        }); 
        setLoad(false)
        setTimeout(() => {
            setSuccess(false)
            setError(false)
        }, 4000);
    }
   

    return { create, load, error, success };
};

export default useCreate;