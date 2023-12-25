import React, { useContext, useState } from 'react'
import AxiosInstance from '../axios/AxiosInstance'
import { Link, useNavigate } from 'react-router-dom'; 
import { jwtDecode } from 'jwt-decode'; 
import { AuthContext } from '../context/auth/AuthContext';
const useLogin = () => {
    const [load,setLoad]=useState(false)
    const [error,setError]=useState(false) 
    const navigate=useNavigate()
    const {setUser}=useContext(AuthContext)
    async function login(credentials){
        setLoad(true) 
        AxiosInstance.post(`/auth/login/`,credentials).then((result) => {
            if(result?.data){
                localStorage.setItem('accessToken',result?.data.token.access); 
                localStorage.setItem('refreshToken',result?.data.token.refresh); 
                setUser({
                    user:result?.data.data.user_auth,
                    profil:result?.data.data.user_profile
                })
                navigate('/')
            }
        }).catch((err) => {
            if(err){
                setError(true)
                console.log(err);
            }
        }).finally(()=>{
            setLoad(false)
            setTimeout(() => {
                setError(false) 
            }, 5000);
        })
    }
  return { login,load,error }
}

export default useLogin