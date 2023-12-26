import React from 'react' 

const NavigationPageCard = ({load,prevPage,nextPage,count,next,prev}) => {
  return (
    <>
    {
        !load &&
        <div className="flex border rounded-lg p-2  mt-2 items-center justify-center">
            <button onClick={prevPage} className={`rounded-l-md p-2   ${prev?'text-blue-600 font-bold hover:text-blue-500 tran border-blue-600 hover:border-blue-300 ':'text-gray-600'}`}>Precedent</button>
             <div className="h-6 border-l border-gray-300"></div> 
            <button onClick={nextPage} className={`rounded-r-md p-2  ${next?'text-blue-600 font-bold hover:text-blue-500 tran border-blue-600 hover:border-blue-300 ':'text-gray-600'}`}>Suivant</button>
        </div>
        
    }
    </>
  )
}

export default NavigationPageCard