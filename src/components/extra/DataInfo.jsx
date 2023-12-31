import React from 'react'
import {ExclamationTriangleIcon} from '@heroicons/react/20/solid'
const DataInfo = ({errorStatus,len,load,message}) => {
  return (
    <>
        {
            !load &&
            errorStatus ?
                <div className="flex justify-center py-12 w-full flex-col items-center  rounded lg bg-gray-100">
                    <ExclamationTriangleIcon className='w-12 md:w-20 text-gray-500' />
                    <span className='text-gray-600'>Une erreur est survenue</span>
                </div>
            :
            !load &&
            len==0?
                <div className="flex justify-center py-12 w-full flex-col items-center  rounded lg bg-gray-100">
                    <ExclamationTriangleIcon className='w-12 md:w-20 text-gray-500' />
                    <span className='text-gray-600'>{message?message:"Aucun resultat"}</span>
                </div>
            :null
        }
    </>
  )
}

export default DataInfo