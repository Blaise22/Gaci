import React from 'react'
import {useNavigate} from 'react-router-dom'
import {EyeIcon, QuestionMarkCircleIcon} from '@heroicons/react/24/outline' 

const QuestionCard = ({refresh,owner,message,dateAdd,dateUpdate,image,doc,pk}) => {
    const navigate=useNavigate() 
    return (
    <div className='border  p-2 md:p-4 rounded-lg'>
        <div className="flex flex-col   gap-1">
            <div className="flex items-start gap-2">
                
                <span className="text-secondary-2">La super question Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dicta magni beatae aliquam sed ex officiis aspernatur, velit eveniet libero nam veritatis ullam laborum quas. Soluta tempore earum provident natus.</span>

            </div>
            
            </div>
            <div className={`flex gap-2 items-center justify-between  pt-2 mt-2 `}>
                 
                

                <div className='flex flex-col'>
                    <span className='text-blue-600 font-bold'>5 reponses </span>
                    <span className='text-xs text-gray-600 '>Publiée il ya 20 min</span>
                </div>
                <button onClick={()=>{navigate('/forum/question/'+10+'/reponses/')}} className='btn-primary flex items-center gap-2'>
                    <EyeIcon className='text-white w-5' />
                    Afficher
                </button>
                
            </div>
    </div>
  )
}

export default QuestionCard