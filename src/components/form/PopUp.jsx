import React from 'react'
import { XMarkIcon,CheckIcon } from '@heroicons/react/24/outline'
const PopUp = ({successMessage,errorMessage}) => {
  return (
    <div className={`fixed flex justify-center items-center left-0 z-50 right-0 ${successMessage || errorMessage ?'top-2 trans':'top-[-200%] trans'} `} >
        <div className="shadow flex items-center  gap-2 border p-4 bg-white rounded-lg w-64">
            {
                successMessage &&
                <>
                    <div className='p-1 bg-green-600  rounded-full'>
                        <CheckIcon className='w-8 text-white' />
                    </div>
                    <span className='text-green-600 block p-1 flex items-center'>{successMessage}</span>
                </>
            }
            {
                errorMessage &&
                <>
                    <div className='p-1 bg-red-600  rounded-full'>
                        <XMarkIcon className='w-8 text-white' />
                    </div>
                
                    <span className='text-red-600 block p-1 flex items-center'>{errorMessage}</span>
                </>
            }
        </div>
    </div>
  )
}

export default PopUp