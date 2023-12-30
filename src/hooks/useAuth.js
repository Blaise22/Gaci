import React, { useContext, useState } from 'react'
import AxiosInstance from '../axios/AxiosInstance'
import { Link, useNavigate } from 'react-router-dom'; 
import { jwtDecode } from 'jwt-decode';  
const useAuth = () => {
    const [load,setLoad]=useState(false) 
    const [error,setError]=useState(false) 
    const navigate=useNavigate() 
    async function login(credentials){
        setLoad(true) 
        AxiosInstance.post(`/auth/login/`,credentials).then((result) => {
            if(result?.data){ 
                localStorage.setItem('accessToken',result?.data.token.access); 
                localStorage.setItem('refreshToken',result?.data.token.refresh); 
                localStorage.setItem('user',JSON.stringify(result?.data.data.user_auth))
                AxiosInstance.get(`/auth/profile-user-id-detail/${result?.data.data.user_auth.pk}/`).then(profilResult=>{  profilResult.data && localStorage.setItem('profil',JSON.stringify(profilResult.data)) })
                
                
                navigate('/')
            }
        }).catch((err) => {
            if(err){
                setError(true) 
            }
        }).finally(()=>{
            setLoad(false)
            setTimeout(() => {
                setError(false) 
            }, 5000);
        })
    }
    const logout=()=>{ 
        try {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('user')
            localStorage.removeItem('profil')
             
        } catch (error) {  }
        finally {
            navigate('/connexion')
             
        }
    }
  return { login,logout,load,error }
}

export default useAuth