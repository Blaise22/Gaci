import React, { useContext } from 'react'
import { AuthContext } from '../context/auth/AuthContext'

const useUser = () => {
    const {user}=useContext(AuthContext)
    return user
}

export default useUser