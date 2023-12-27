import React from 'react'
import Header from '../../components/partials/Header'
import {QuestionMarkCircleIcon,PlusIcon} from '@heroicons/react/20/solid'
import MainCard from '../../components/cards/MainCard'
import CardDiscussion from '../../components/cards/CardDiscussion'
import {useParams} from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Spinner from '../../components/extra/Spinner'
import getPeriode from '../../helpers/utils/getPeriode'
const Responses = () => {
  const {id}=useParams()
  const {data:question,load,error}=useFetch(`/forum/question-detail/${id}/`)
  console.log(question);
  return (
    <>
        <Header/>
        <div className="pt-16 px-6 text-xs md:text-sm text-gray-700  w-full">
        <div className=" py-2 md:px-14 lg:px-24 "> 
                
                    { question?.wording ?
                      <span className="text-blue-700 block w-full bg-blue-100 p-2 rounded-lg font-semibold">
                        {question?.wording} 
                      </span>
                    : <p className='block text-center w-full'>En attente de la question</p> }
                
                <Spinner load={load}  className={'spinner mt-2'}/>
                <div className="flex justify-between mt-1 gap-2">
                        {
                            question?.doc &&
                            <button className='p-1 rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200'>Lire le document</button>
                        }
                        {
                            question?.image &&
                            <button className='p-1 rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200'>Voir l'image</button>
                        }
                    </div> 
               <div className="flex mt-2 justify-between">
                    500 epose 
                    <p className="text-gray-700 text-xs block ">
                      {
                        question?.date_add &&
                        <span>Publié il ya {getPeriode(question?.date_add)}</span>
                      }

                     </p>

               </div>
             <MainCard
                className={'bg-white rounded-lg w-full'}
                mainIcon={<QuestionMarkCircleIcon className='w-8 text-gray-700' />}
                mainTitle={'Reponses'}
             >
              <div className="flex pb-16 gap-4 flex-col">
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />

              </div>


            </MainCard>
        </div>
        <div className="fixed w-full py-2 md:px-14 lg:px-24 px-6 bg-white h-20 border-t bottom-0 right-0 left-0">
            hello
        </div>
        </div>
    </>
  )
}

export default Responses