
import React from 'react' 
const ArticleCard = ({data}) => {
  return (
    <>
        <div className="w-full flex border rounded-lg flex-col">
            <img src={''} className=' w-auto rounded-t-lg' alt="logo" />
            <div className="flex p-2 flex-col">
                <h1 className='text-blue-600 text-lg font-semibold'>Title</h1>
                <h1 className='text-sm'>event compiled client and server successfully in 6.2s (730 modules)wait compiling...</h1>
            </div>

        </div>
    </>
  )
}

export default ArticleCard