import React, { useEffect, useState } from 'react'
import {ChevronRightIcon,XMarkIcon,QuestionMarkCircleIcon} from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import abbreviateNumber from '../../helpers/utils/abbreviateNumber'
const ForumSidebar = () => {
    const [isOpen,setIsOpen]=useState(window.innerWidth>=768?true:false)
    return (
        <>
            {
                !isOpen && <ChevronRightIcon onClick={()=>{setIsOpen(true)}} className={'w-8 p-1 rounded-full hover:bg-blue-400 tran bg-blue-600 text-white  fixed md:left-4 left-2 z-50  sm:left-4 top-16'}/>
            }
            <div className={`w-64 border-r bg-white h-full bottom-0 p-2 fixed z-50 lelft-0 top-14 ${!isOpen?'left-[-100%] tran':'left-0 tran'}`}>
                <div className="flex justify-end">
                    
                    <XMarkIcon onClick={()=>{setIsOpen(false)}} className={'icon-danger'}/> 
                </div>
                <div className="flex flex-col gap-4">
                    <Link to={'/forum'} className='group' >
                        <span className="text-lg text-gray-700 font-bold group-hover:bg-blue-600 group-hover:text-white tran p-2 rounded-lg flex gap-1 items-center block">
                            <QuestionMarkCircleIcon className='w-10'/>
                            Questions
                        </span>
                    </Link>
                    <span className="text-blue-600 text-sm p-4">
                    {abbreviateNumber(4000)} Questions posees   
                    </span>

                </div>
            </div>
        </>
  )
}

export default ForumSidebar