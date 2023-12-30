
import React from 'react'
import Header from '../../components/partials/Header'
import ForumSidebar from '../../components/partials/ForumSidebar'
import MainCard from '../../components/cards/MainCard'
import {QuestionMarkCircleIcon,PlusIcon} from '@heroicons/react/20/solid'
import QuestionCard from '../../components/cards/QuestionCard'
import QuestionModal from '../../components/modals/QuestionModal' 
import useFetch from '../../hooks/useFetch'
import CardDiscussion from '../../components/cards/CardDiscussion'
import Spinner from '../../components/extra/Spinner'
import DataInfo from '../../components/extra/DataInfo'
import useFetchPaginate from '../../hooks/useFetchPaginate'
import NavigationPageCard from '../../components/cards/NavigationPageCard'

const Forum = () => {
  const { data,load,count,prev,next, error,getData,nextPage,prevPage}=useFetchPaginate(`/forum/reply-list/`)
  return (
    <>
        <Header/>
        <ForumSidebar />
        <div className='px-4 text-xs md:text-sm md:pl-64  md:pr-12 pt-16 lg:pr-16 w-full'>
          <div className="grid md:px-4 pt-2 lg:grid-cols-2  gap-4">
               
             <MainCard
                className={'bg-white rounded-lg w-full'}
                mainIcon={<QuestionMarkCircleIcon className='w-4 text-white' />}
                mainTitle={'Reponses aux questions'}
                  
             >
              <div className="flex gap-4 flex-col">
                {
                    data?.map((item,index)=>(
                      <CardDiscussion
                        key={index}
                        message={item?.wording}
                        date={item?.date_add}
                        doc={item?.doc}
                        image={item?.image}
                        owner={item?.user}
                        question={item?.question}
                        refresh={()=>{getData(`/forum/reply-list/`)}}
                        pk={item.pk}
                        status={item.status}
                        isResPage={false}
                        deleteUrl={`/forum/reply-delete/${item.pk}/`}
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

export default Forum