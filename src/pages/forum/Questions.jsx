
import React from 'react'
import Header from '../../components/partials/Header'
import ForumSidebar from '../../components/partials/ForumSidebar'
import MainCard from '../../components/cards/MainCard'
import {QuestionMarkCircleIcon,PlusIcon} from '@heroicons/react/20/solid'
import QuestionCard from '../../components/cards/QuestionCard'
import MainModal from '../../components/modals/MainModal'
import useFetchPaginate from '../../hooks/useFetchPaginate'
import Spinner from '../../components/extra/Spinner'
import DataInfo from '../../components/extra/DataInfo'

const Questions = () => {
    const { data,load,count,prev,next, error,getData,nextPage,prevPage}=useFetchPaginate(`/forum/question-list-create/`)
    console.log(data);
    return (
    <>
        <Header/>
        <div className=' pt-12 px-6 text-xs md:text-sm text-gray-700  w-full'>
          <div className=" py-2 md:px-14 lg:px-24 ">
               
             <MainCard
                className={'bg-white rounded-lg w-full'}
                mainIcon={null}
                mainTitle={'Questions'}
                sideHeaderContent={
                    <MainModal
                        modalTitle={'Question'}
                        mainButton={
                            <button className='flex gap-0 text-md bg-gray-200 p-2 font-bold hover:bg-gray-300 active:shadow tran rounded-lg group items-center'>
                            <PlusIcon className='w-6 text-gray-700' />
                            Créer 
                            </button>
                        } 
                        >
                                H
                        </MainModal>
                        }
             >
              <div className="flex gap-4 flex-col">
                { !load && 
                  data?.map((item,index)=>(
                    <QuestionCard 
                      authUserIsOwner={false}
                      data={null}
                      refresh={()=>{}}
                      key={index}
                      
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

              </div>


             </MainCard>
          </div>
        </div>
    </>
  )
}

export default Questions