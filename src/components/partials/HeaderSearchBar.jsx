import React from 'react'
import SearchBar from '../containers/SearchBar'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
const HeaderSearchBar = () => {
    const [isOpen, setIsOpen]=React.useState(false)
  return (
    <>
        <div onClick={()=>{setIsOpen(true)}} className="md:w-full cursor-pointer md:bg-gray-100 md:rounded-xl p-1 flex items-center tran group text-gray-600 ">
            <MagnifyingGlassIcon className='p-1 hover:bg-gray-200 text-gray-500 hover:text-blue-600 transition-all duration-200 w-10 h-9 rounded-lg }'/>
            <span className='hidden md:block text-sm' >Recherche ...</span>
        </div> 
        <SearchBar isOpen={isOpen} onClose={()=>{setIsOpen(false)}} />
    </>
  )
}

export default HeaderSearchBar