import React from 'react'

const DataInfo = ({errorStatus,len,load,message}) => {
  return (
    <>
        {
            !load &&
            errorStatus ?
                <div className="flex justify-center py-12 w-full  rounded lg bg-gray-100">
                    Une erreur est survenue
                </div>
            :
            !load &&
            len==0?
                <div className="flex justify-center py-12 w-full  rounded lg bg-gray-100">
                    {message?message:"Aucun resultat"}
                </div>
            :null
        }
    </>
  )
}

export default DataInfo