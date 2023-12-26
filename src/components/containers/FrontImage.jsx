
import React from 'react'
import SearchContainer from './SearchContainer'

const FrontImage = () => {
    
  return (
    <>
        <div className='pt-14 w-full' style={{'height':'400px'}}>
            <div className='flex  justify-start'>
               
            </div>
            <div className='flex  pt-8'>
              <h1 className='text-gray-600 text-xl font-semibold'>Groupe d'analystes et chercheurs en informatique.</h1>
            </div>
            <div className='flex justify-end'>
            <div className='lg:w-[30%] md:w-[50%] w-full mt-4'>
              <SearchContainer  />
            </div>
          </div>
          </div>
    </>
  )
}

export default FrontImage