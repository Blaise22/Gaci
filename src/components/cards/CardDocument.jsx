import { BookOpenIcon, TrashIcon } from '@heroicons/react/24/outline' 
import React, { useState } from 'react' 
import { Link } from 'react-router-dom' 
import getPeriode from '../../helpers/utils/getPeriode'
import DeletModale from '../modals/DeletModale'
import useUser from '../../hooks/useUser'
const CardDocument = ({refresh,date,wording,user:owner,doc,pk}) => { 
    const user=useUser()
   
    
  
    return (
    <>  
         
        <div className="flex flex-col gap-1">

        <div className='p-1 rounded shadow-md'> 
            <div className="flex gap-2 group items-center hover:bg-gray-100 transition-all duration-150 p-2 rounded-md">
                <BookOpenIcon  className='w-10 text-blue-700'/> 

                <div className="flex w-full  flex-col">
                    <h1>{wording} </h1>
                    <Link to={doc} className='font-semibold cursor-pointer group-hover:text-blue-800'>Cliquer pour lire</Link>
                </div>
            </div>
                    <div className="flex pb-2 px-2 justify-between">
                    {
                        user?.user.pk==owner?.pk ?
                            <DeletModale buttonContent={<span className='text-red-600 cursor-pointer p-1 w-24 rounded-lg bg-red-100'>Supprimer</span>} url={`courses/ebooks/${pk}`} refresh={refresh} title={'Supprimer un document'} />
                        :null
                    }
                        <h1 className='text-xs text-gray-600'>Publié {getPeriode(date)}</h1>
                    </div>
        </div>
        
        </div>
    </>
  )
}

export default CardDocument