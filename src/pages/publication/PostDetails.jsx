
import React from 'react'
import Header from '../../components/partials/Header'
import ForumSidebar from '../../components/partials/ForumSidebar'
import MainCard from '../../components/cards/MainCard'
import {QuestionMarkCircleIcon,PlusIcon} from '@heroicons/react/20/solid'
import QuestionCard from '../../components/cards/QuestionCard'
import MainModal from '../../components/modals/QuestionModal'
import useFetchPaginate from '../../hooks/useFetchPaginate'
import Spinner from '../../components/extra/Spinner'
import DataInfo from '../../components/extra/DataInfo'
import NavigationPageCard from '../../components/cards/NavigationPageCard' 
import PubSidebar from '../../components/partials/PubSidebar'
import ArticleCard from '../../components/cards/ArticleCard'
import PublicationModal from '../../components/modals/PublicationModal'

const PostDetails = () => {
  const { data,load,count,prev,next, error,getData,nextPage,prevPage}=useFetchPaginate(`/pub/post-published-list`)
    console.log(error);
    return (
    <>
        <Header/>
        <PubSidebar />
        <div className='px-4 text-xs md:text-sm md:pl-64  md:pr-12 pt-16 lg:pr-16 w-full'>
          <div className="grid md:px-4 lg:pl-12 lg:pr-32 xl:pr-72  pt-6  gap-4">
               
             <MainCard
                className={'bg-white rounded-lg w-full md:w-96 lg:w-[80%]'}
                mainIcon={null}
                mainTitle={'Publication'}
                sideHeaderContent={  null }
             >
              <div className="flex gap-4 flex-col">
                 
                <Spinner 
                  load={load} 
                  className='w-14 h-14 lg:w-20 lg:w-24' 
                />
                <DataInfo 
                    errorStatus={error}
                    len={data?.length} 
                    load={load}
                />
                <NavigationPageCard
                  load={load}
                  count={count} 
                  next={next}
                  prev={prev}
                  nextPage={nextPage}
                  prevPage={prevPage}
                />

              </div> 
             </MainCard>
          </div>
        </div>
    </>
  )
}

export default PostDetails