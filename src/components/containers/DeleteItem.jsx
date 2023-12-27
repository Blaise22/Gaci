import React, { useState } from 'react'
import AxiosInstance from '../../axios/AxiosInstance'
import PopUp from '../form/PopUp'
const DeleteItem = ({url,refresh}) => {
    const [openDelete,setOpenDelete]=useState(false)
    const [success,setSuccess]=useState(null)
    const [error,setError]=useState(null)
    const handleDelete=()=>{
        AxiosInstance.delete(url).then(res=>{
            setOpenDelete(false)
            setSuccess(true)
            refresh()
        }).catch(err=>{
            setError(true)
            setOpenDelete(false)
        }).finally(()=>{
            setTimeout(() => {
                setError(false)
                setSuccess(false)
                
            }, 4000);
        })
    }
  return (
    <>
        <PopUp 

            errorMessage={error?'Erreur de suppression':null}
            successMessage={success ?'Réponse retirée avec succès':null}
        />
        {
            
            openDelete ?
            <div className="flex w-full gap-2">
                <button onClick={handleDelete} className='text-red-600 p-1 rounded-lg bg-red-100'>Confirmer</button>
                <button onClick={()=>{setOpenDelete(false)}} className='text-gray-600 p-1 rounded-lg bg-gray-100'>Annuler</button>
            </div>
            :
            <button onClick={()=>{setOpenDelete(true)}} className='text-red-600 p-1 rounded-lg bg-red-100'>Retirer</button>
        }
    </>
  )
}

export default DeleteItem