
import React from 'react'
import Header from '../../components/partials/Header'
import ForumSidebar from '../../components/partials/ForumSidebar'
import MainCard from '../../components/cards/MainCard'
import {QuestionMarkCircleIcon,PlusIcon} from '@heroicons/react/20/solid'
import QuestionCard from '../../components/cards/QuestionCard'
import QuestionModal from '../../components/modals/QuestionModal'
import useFetchPaginate from '../../hooks/useFetchPaginate'
import CreateQuestionForm from '../../components/form/CreateQuestionForm'

const Forum = () => {
  const { data,load,count,prev,next, error,getData,nextPage,prevPage}=useFetchPaginate(`/forum/question-list-create/`)
  
  return (
    <>
        <Header/>
        <ForumSidebar />
        <div className=' pt-12 px-6 text-xs md:text-sm text-gray-700  w-full'>
          <div className="md:pl-64 py-2  ">
               
             <MainCard
                className={'bg-white rounded-lg w-full'}
                mainIcon={<QuestionMarkCircleIcon className='w-4 text-white' />}
                mainTitle={'Questions recentes'}
                 sideHeaderContent={
                    <QuestionModal
                        modalTitle={'Question'}
                        mainButton={
                            <button className='flex  text-md bg-gray-200 p-2 font-bold hover:bg-gray-300 active:shadow tran rounded-lg group items-center'>
                            <PlusIcon className='w-6 text-gray-700' />
                            Créer
                            </button>
                        } 
                        refresh={
                          ()=>{
                            getData(`/forum/question-list-create/`)
                          }
                        }
                        >
                                 
                        </QuestionModal>
                        }
             >
              <div className="flex gap-4 flex-col">
                 
                 
                
                 

              </div>


             </MainCard>
          </div>
        </div>
    </>
  )
}

export default Forum