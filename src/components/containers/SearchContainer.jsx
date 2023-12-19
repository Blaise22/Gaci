
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'
import SearchBar from './SearchBar'
const SearchContainer = () => {
    const [isOpen, setIsOpen]=React.useState(false)
  return (
    <>
        <div onClick={()=>{setIsOpen(true)}} className="w-full cursor-pointer bg-gray-100 rounded-xl p-1 flex items-center tran hover:shadow-lg text-gray-600 ">
            <MagnifyingGlassIcon className='w-10'/>
            <span >Rechercher ici ....</span>
        </div> 
        <SearchBar isOpen={isOpen} onClose={()=>{setIsOpen(false)}} />
    </>
  )
}

export default SearchContainer