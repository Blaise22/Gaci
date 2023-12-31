import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {EyeIcon, QuestionMarkCircleIcon} from '@heroicons/react/24/outline' 
import useUser from '../../hooks/useUser'
import useFetch from '../../hooks/useFetch'
import getPeriod from '../../helpers/utils/getPeriode'

const QuestionCard = ({refresh,owner,message,dateAdd,dateUpdate,image,doc,pk}) => {
    const navigate=useNavigate() 
    const user=useUser() 
    const {data,load}=useFetch(`forum/reply-list/${pk}`)
     
    return (
    <div className='shadow-md   rounded-lg'>
        <div className="flex flex-col   gap-1">
            <div className="flex p-4 flex-col items-start gap-2">
                <p className='text-gray-600 font-bold'>Posée par  {  owner?.names }</p>
                <span className="text-secondary-2 pb-4">{message}</span>

            </div>
            
            </div>
            {
              image ?
              <Link to={image}>
              <img src={image} className=' w-full h-72 sm:h-80 lg:h-96 object-cover' alt="logo" />
              </Link>:
              null

            }
            <div className={`flex gap-2 items-center justify-between p-4  pt-2 mt-2 `}> 
                <div className='flex flex-col'>
                    <span className='text-blue-600 font-bold'>{data?.count} reponse{data?.count>1?'s':''} </span>
                    <span className='text-xs text-gray-600 '>Publiée {getPeriod(dateAdd)}</span>
                </div>
                <button onClick={()=>{navigate('/forum/question/'+pk+'/reponses/')}} className='hover:bg-blue-100 rounded-lg tran hover:text-blue-600 p-1.5 text-gray-700 group flex items-center gap-2'>
                    <EyeIcon className=' w-5' />
                    Afficher
                </button>
                
            </div>
    </div>
  )
}

export default QuestionCard