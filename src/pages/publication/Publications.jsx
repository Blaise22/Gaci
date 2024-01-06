
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

const Publications = () => {
  const { data,load,count,prev,next, error,getData,nextPage,prevPage}=useFetchPaginate(`/pub/post-published-list`)
    
    return (
    <>
        <Header/>
        <PubSidebar />
        <div className='px-4 text-xs md:text-sm md:pl-64  md:pr-32 pt-16  w-full'>
          <div className="grid md:px-4 lg:pl-12 lg:pr-32 xl:pr-72">
               
             <MainCard
                className={'rounded-lg w-full'}
                mainIcon={null}
                mainTitle={'Publications'}
                sideHeaderContent={  null }
             >
              <div className="flex gap-4 flex-col">
                { !load && 
                  data?.map((item,index)=>(
                    <ArticleCard 
                      key={index}
                      pk={item.pk}
                      date={item.date_add}
                      image={item.image}
                      synthesis={item.synthesis}
                      title={item.title}
                      user={item.user.names}
                      userPk={item.user.pk}
                      refresh={()=>{getData('/pub/post-published-list')}}
                    />
                  ))
                }
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

export default Publications