import React from 'react'
import { XMarkIcon,CheckIcon } from '@heroicons/react/24/outline'
const PopUp = ({successMessage,errorMessage,load}) => {
  return (
    <div className={`fixed flex justify-center block visible items-center bottom-0  z-50  ${successMessage || errorMessage ?'right-2 tran':' right-[-200%] tran'} `} >
        <div className="shadow flex items-center  gap-2 border p-4 bg-white rounded-lg w-64">
            {
                 successMessage &&
                <>
                    <div className='p-1 bg-green-600  rounded-full'>
                        <CheckIcon className='w-8 text-white' />
                    </div>
                    <span className='text-green-600 block p-1 text-xs flex items-center'>{successMessage}</span>
                </>
            }
            {
                 errorMessage &&
                <>
                    <div className='p-1 bg-red-600  rounded-full'>
                        <XMarkIcon className='w-8 text-white' />
                    </div>
                
                    <span className='text-red-600 block p-1 text-xs flex items-center'>{errorMessage}</span>
                </>
            }
        </div>
    </div>
  )
}

export default PopUp