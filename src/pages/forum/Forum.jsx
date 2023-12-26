
import React from 'react'
import Header from '../../components/partials/Header'
import ForumSidebar from '../../components/partials/ForumSidebar'
import MainCard from '../../components/cards/MainCard'
import {QuestionMarkCircleIcon} from '@heroicons/react/20/solid'

const Forum = () => {
  return (
    <>
        <Header/>
        <ForumSidebar />
        <div className=' pt-16 px-6 text-xs md:text-sm text-gray-700  w-full'>
          <div className="md:pl-64 py-2 flex ">
             <MainCard
                className={'bg-white rounded-lg w-full'}
                mainIcon={<QuestionMarkCircleIcon className='w-8' />}
                mainTitle={'Questions recentes'}
             >
              

             </MainCard>
          </div>
        </div>
    </>
  )
}

export default Forum