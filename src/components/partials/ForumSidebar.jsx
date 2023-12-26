import React, { useState } from 'react'
import {Bars3Icon} from '@heroicons/react/20/solid'
const ForumSidebar = () => {
    const [isOpen,setIsOpen]=useState(true)
    return (
        <>
            {
                !isOpen && <Bars3Icon onClick={()=>{setIsOpen(true)}} className={'icon-primary fixed left-4 top-16'}/>
            }
            <div className={`w-64 border-r h-full p-2 fixed z-50 lelft-0 top-14 ${!isOpen?'left-[-100%] tran':'left-0 tran'}`}>
                <div className="flex justify-end">
                    <Bars3Icon onClick={()=>{setIsOpen(false)}} className={'icon-danger'}/> 
                </div>
            </div>
        </>
  )
}

export default ForumSidebar