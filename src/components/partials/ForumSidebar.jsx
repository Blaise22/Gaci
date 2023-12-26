import React, { useState } from 'react'
import {ChevronRightIcon,XMarkIcon,QuestionMarkCircleIcon} from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
const ForumSidebar = () => {
    const [isOpen,setIsOpen]=useState(false)
    return (
        <>
            {
                !isOpen && <ChevronRightIcon onClick={()=>{setIsOpen(true)}} className={'icon-primary fixed left-4 top-16'}/>
            }
            <div className={`w-64 border-r bg-white h-full bottom-0 p-2 fixed z-50 lelft-0 top-14 ${!isOpen?'left-[-100%] tran':'left-0 tran'}`}>
                <div className="flex justify-end">
                    
                    <XMarkIcon onClick={()=>{setIsOpen(false)}} className={'icon-danger'}/> 
                </div>
                <div className="flex flex-col gap-4">
                    <Link to={'/forum/questions'} className='group' >
                        <span className="text-lg text-gray-700 font-bold group-hover:bg-blue-600 group-hover:text-white tran p-2 rounded-lg flex gap-1 items-center block">
                            <QuestionMarkCircleIcon className='w-10'/>
                            Questions
                        </span>
                    </Link>
                    <span className="text-blue-600 text-sm p-4">
                    4000 Questions posees   
                    </span>

                </div>
            </div>
        </>
  )
}

export default ForumSidebar