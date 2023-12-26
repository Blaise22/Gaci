
import React from 'react'
import Header from '../../components/partials/Header'
import ForumSidebar from '../../components/partials/ForumSidebar'
import MainCard from '../../components/cards/MainCard'
import {QuestionMarkCircleIcon,PlusIcon} from '@heroicons/react/20/solid'
import QuestionCard from '../../components/cards/QuestionCard'
import MainModal from '../../components/modals/MainModal'

const Forum = () => {
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
                    <MainModal
                        modalTitle={'Poser une question'}
                        mainButton={
                            <button className='flex gap-1 text-md bg-gray-200 p-2 font-bold hover:bg-gray-300 active:shadow tran rounded-lg group items-center'>
                            <PlusIcon className='w-6 text-gray-700' />
                            Poser une question
                            </button>
                        } 
                        >
                                H
                        </MainModal>
                        }
             >
              <div className="flex gap-4 flex-col">
                <QuestionCard 
                  authUserIsOwner={false}
                  data={null}
                  refresh={()=>{}}

                 />
                <QuestionCard 
                  authUserIsOwner={false}
                  data={null}
                  refresh={()=>{}}

                 />
                <QuestionCard 
                  authUserIsOwner={false}
                  data={null}
                  refresh={()=>{}}

                 />
                <QuestionCard 
                  authUserIsOwner={false}
                  data={null}
                  refresh={()=>{}}

                 />
                <QuestionCard 
                  authUserIsOwner={false}
                  data={null}
                  refresh={()=>{}}

                 />
                <QuestionCard 
                  authUserIsOwner={false}
                  data={null}
                  refresh={()=>{}}

                 />
                <QuestionCard 
                  authUserIsOwner={false}
                  data={null}
                  refresh={()=>{}}

                 />
                <QuestionCard 
                  authUserIsOwner={false}
                  data={null}
                  refresh={()=>{}}

                 />

              </div>


             </MainCard>
          </div>
        </div>
    </>
  )
}

export default Forum