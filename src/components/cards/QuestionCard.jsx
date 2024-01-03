import React from 'react'
import {useNavigate} from 'react-router-dom'
import {EyeIcon, QuestionMarkCircleIcon} from '@heroicons/react/24/outline' 
import useUser from '../../hooks/useUser'
import useFetch from '../../hooks/useFetch'
import getPeriod from '../../helpers/utils/getPeriode'

const QuestionCard = ({refresh,owner,message,dateAdd,dateUpdate,image,doc,pk}) => {
    const navigate=useNavigate() 
    const user=useUser() 
    const {data,load}=useFetch(`forum/reply-list/${pk}`)
     
    return (
    <div className='shadow-md  p-4 rounded-lg'>
        <div className="flex flex-col   gap-1">
            <div className="flex flex-col items-start gap-2">
                <p className='text-gray-600 font-bold'>Publiée par  {  owner?.names }</p>
                <span className="text-secondary-2 pb-4">{message}</span>

            </div>
            
            </div>
            {
              image ?
              <img src={image} className=' w-full h-56 object-cover rounded-lg' alt="logo" />:
              null

            }
            <div className={`flex gap-2 items-center justify-between  pt-2 mt-2 `}> 
                <div className='flex flex-col'>
                    <span className='text-blue-600 font-bold'>{data?.count} reponse {data?.count>1?'s':''} </span>
                    <span className='text-xs text-gray-600 '>Publiée {getPeriod(dateAdd)}</span>
                </div>
                <button onClick={()=>{navigate('/forum/question/'+pk+'/reponses/')}} className='btn-primary flex items-center gap-2'>
                    <EyeIcon className='text-white w-5' />
                    Afficher
                </button>
                
            </div>
    </div>
  )
}

export default QuestionCard