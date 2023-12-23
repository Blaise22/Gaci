import React from 'react'
import {useNavigate} from 'react-router-dom'
import {  QuestionMarkCircleIcon} from '@heroicons/react/24/outline' 
import getPeriode from '../../helpers/utils/getPeriode'
import getFrenchDate from '../../helpers/utils/getFrenchDate'
import DeletModale from '../modals/DeletModale'
const CardSubject = ({refresh,authUserIsOwner,data}) => {
    const navigate=useNavigate()
     
    return (
    <>
        <div className="flex flex-col gap-1">
            <div className="flex items-start gap-2">
                <QuestionMarkCircleIcon className='w-8 text-gray-700' />
                <span className="text-secondary-2">{data?.question}</span>

            </div>
            <div className="text-xs text-gray-500">A remettre avant le {getFrenchDate(data?.limit_date)}</div>
            </div>
            <div className={`flex gap-2 items-center ${authUserIsOwner?'justify-between':'justify-end'} `}>
                {
                    authUserIsOwner && <DeletModale refresh={refresh} title={'Supprimer une evaluation'} endPoint={'exams/evaluations/'+data?.id} />
                }
                <div className="flex gap-2">

                <div className='flex flex-col'>
                    <span className='text-violet-700 font-bold'>5 reponses sur 50 apprenants</span>
                    <span className='text-xs text-gray-600 '>Publiée {getPeriode(data?.create_at)}</span>
                </div>
                <button onClick={()=>{navigate('/question/'+data?.id)}} className='btn-primary'>Afficher</button>
                </div>
            </div>
    </>
  )
}

export default CardSubject