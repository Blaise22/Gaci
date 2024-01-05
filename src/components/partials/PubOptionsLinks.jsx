import React, { useState } from 'react'
import {PlayCircleIcon,PhotoIcon,XMarkIcon,FolderOpenIcon,DocumentIcon,ChevronLeftIcon} from '@heroicons/react/24/outline'
import { useParams,useNavigate } from 'react-router-dom'

const PubOptionsLinks = ({postId}) => {
    const [isOpen,setIsOpen]=useState(window.innerWidth>=768?true:false)
    
    const navigate=useNavigate()
    const changePage= async(url)=>{
        await setIsOpen(false)
        navigate(url)
    }
  return (
    <>
    
         
        <div className='flex z-40 items-center gap-2 text-gray-700'>
            
             
             
            <div onClick={()=>{changePage(`/publication/${postId}`)}} className="flex cursor-pointer items-center p-2 hover:bg-blue-100  tran hover:text-blue-700 rounded-full gap-2">
                <ChevronLeftIcon className='w-5' /> 
                 
            </div>
            <div onClick={()=>{changePage(`/publication/${postId}/photos`)}} className="flex cursor-pointer items-center p-2 hover:bg-blue-100  tran hover:text-blue-700 rounded-full gap-2">
                <PhotoIcon className='w-5' /> 
                <span className='text-md font-bold'>Photos</span>
            </div>
            <div onClick={()=>{changePage(`/publication/${postId}/documents`)}} className="flex cursor-pointer items-center p-2 hover:bg-blue-100  tran hover:text-blue-700 rounded-full gap-2">
                <DocumentIcon className='w-5' /> 
                <span className='text-md font-bold'>Documents</span>
            </div>
            <div onClick={()=>{changePage(`/publication/${postId}/videos`)}} className="flex cursor-pointer items-center  p-2 hover:bg-blue-100  tran hover:text-blue-700 rounded-full gap-2">
                
                <PlayCircleIcon className='w-5' /> 
                <span className='text-md font-bold'>Videos</span>
            </div>
       
        </div>
        
            </>
  )
}

export default PubOptionsLinks