import React, { useContext } from 'react'

const useUser = () => {
    const userData= JSON.parse(localStorage.getItem('user'))
    const profilData= JSON.parse(localStorage.getItem('profil'))
    const user={
        user:userData,
        profil:profilData
    }
    return user
}

export default useUser