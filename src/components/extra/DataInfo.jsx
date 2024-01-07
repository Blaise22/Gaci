import React from 'react'

const DataInfo = ({errorStatus,len,load,message}) => {
  return (
    <>
        {
            !load &&
            errorStatus ?
                <div className="flex justify-center py-12 w-full  rounded lg bg-gray-100">
                    <span className='text-gray-600'>Une erreur est survenue</span>
                </div>
            :
            !load &&
            len==0?
                <div className="flex justify-center py-12 w-full  rounded lg bg-gray-100">
                    <span className='text-gray-600'>{message?message:"Aucun resultat"}</span>
                </div>
            :null
        }
    </>
  )
}

export default DataInfo