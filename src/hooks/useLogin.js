import React, { useContext, useState } from 'react'
import AxiosInstance from '../axios/AxiosInstance'
import { Link, useNavigate } from 'react-router-dom'; 
import { jwtDecode } from 'jwt-decode';
import { AuthContext } from '../context/auth/AuthContext';
const useLogin = () => {
    const [load,setLoad]=useState(false)
    const [error,setError]=useState(false)
    const {user, setUser} = useContext(AuthContext)
    const navigate=useNavigate()
    async function login(credentials){
        setLoad(true) 
        AxiosInstance.post(`auth/`,credentials).then((result) => {
            if(result?.data){
                 
            }
        }).catch((err) => {
            if(err){
                setError(true)
            }
        }).finally(()=>{
            setLoad(false)
            setTimeout(() => {
                setError(false) 
            }, 3000);
        })
    }
  return { login,load,error }
}

export default useLogin