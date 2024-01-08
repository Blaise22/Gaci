
import React from 'react'
import SearchContainer from './SearchContainer'
import img from '../../assets/image_search_1599066129369.jpg'
const FrontImage = () => {
    
  return (
    <>
        <div className='pt-14 px-4 sm:px-10 md:px-20   w-full bg-red-600' style={{
            'height':'400px',
            "backgroundImage":`url(${img})`,
            "backgroundSize": "cover",
            "backgroundRepeat": "no-repeat",
            "backgroundPosition":"center",
            "opacity":'0.6'
            
            }}>
            <div className='flex  justify-start'>
               
            </div>
            <div className='flex  pt-8'>
              <h1 className='text-blue-600 text-4xl font-semibold '>Groupe d'analystes et chercheurs en informatique.</h1>
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