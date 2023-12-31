import React, { useState } from 'react'
import {PlayCircleIcon,PhotoIcon,XMarkIcon,FolderOpenIcon,DocumentIcon} from '@heroicons/react/24/outline'
import { useParams,useNavigate } from 'react-router-dom'

const ArticleSidebar = () => {
    const [isOpen,setIsOpen]=useState(window.innerWidth>=768?true:false)
    const {id}=useParams()
    const navigate=useNavigate()
  return (
    <>
    {
        isOpen ?
        <div className='fixed z-40 flex flex-col gap-2 top-14 right-4'>
            
            <div className="flex  top-14 pt-2  justify-end  block">
                <XMarkIcon onClick={()=>{ setIsOpen(false) }} className='icon-danger bg-white' />    
            </div>
            <div className='w-44 p-4  top-28 lg:top-20 z-40 rounded-lg right-4 bg-white border lg:border-none'>
            <div className="flex cursor-pointer items-center  p-3 hover:bg-gray-100 tran text-gray-700 rounded-md gap-2">
                
                <PlayCircleIcon className='w-8' /> 
                <span className='text-md font-bold'>Videos</span>
            </div>
            <div className="flex cursor-pointer items-center p-3 hover:bg-gray-100 tran text-gray-700 rounded-md gap-2">
                <PhotoIcon className='w-8' /> 
                <span className='text-md font-bold'>Photos</span>
            </div>
            <div onClick={()=>{navigate(`/publication/${id}/documents`)}} className="flex cursor-pointer items-center p-3 hover:bg-gray-100 tran text-gray-700 rounded-md gap-2">
                <DocumentIcon className='w-8' /> 
                <span className='text-md font-bold'>Documents</span>
            </div>
        </div>
        </div>
        :
            <div className="flex gap-2 relative right-4 items-center justify-end lg:fixed block">
                <button onClick={()=>{ setIsOpen(true) }} className='flex absolute text-md font-bold hover:bg-gray-300 text-gray-700 tran top-0 items-center bg-gray-100 gap-2 p-2 rounded-lg'>
                    <FolderOpenIcon   className='w-6' />
                    Fichiers
                </button>
            </div>
    }
            </>
  )
}

export default ArticleSidebar