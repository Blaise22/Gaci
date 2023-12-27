import React, { useState } from 'react'
import {XMarkIcon,ChevronUpIcon} from '@heroicons/react/20/solid'
const CreateResponseForm = () => {
    const [isExtended,setIsextended]=useState(true)
    return (
        <div className={`fixed w-full z-50  md:px-14 lg:px-24 px-6   bottom-0 right-0 left-0 ${isExtended?'h-80 tran ':' tran h-20'} `}>
            <div className="bg-white rounded-t-lg h-full w-full border-t border-l border-r">
                <div className="flex p-2 justify-end text-md text-gray-700">
                    {isExtended && <XMarkIcon onClick={()=>{setIsextended(false)}} className='icon-danger' />}
                    {!isExtended && <ChevronUpIcon onClick={()=>{setIsextended(true)}} className='icon-primary' />}
                </div>
            </div>
        </div>
    )
}

export default CreateResponseForm