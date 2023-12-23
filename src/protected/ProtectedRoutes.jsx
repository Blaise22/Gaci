import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'  
const ProtectedRoutes = () => {
    const token=localStorage.getItem('token')      
    return (
        token? <Outlet/> :<Navigate to={'/connexion'}/>
    )
}
export default ProtectedRoutes