
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
import CreateQuestionForm from '../../components/form/CreateQuestionForm'

const Questions = () => {
    const { data,load,count,prev,next, error,getData,nextPage,prevPage}=useFetchPaginate(`/forum/question-list-create/`)
    
    return (
    <>
        <Header/>
        <div className='px-4 text-xs md:text-sm md:pl-64  md:pr-12 pt-16 lg:pr-16 w-full'>
          <div className="grid md:px-4 lg:pl-12 lg:pr-32 xl:pr-72">
               
             <MainCard
                className={'rounded-lg w-full '}
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
                              
                        </MainModal>
                        }
             >
              <div className="flex gap-4 flex-col">
                { !load && 
                  data?.map((item,index)=>(
                    <QuestionCard  
                      key={index}
                       
                      pk={item.pk}
                      owner={item.user}
                      message={item.wording}
                      image={item.image}
                      doc={item.doc}
                      dateUpdate={item.date_update}
                      dateAdd={item.date_add}

                      
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
                    message={'Auccune question pour l\'instant'}
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

export default Questions