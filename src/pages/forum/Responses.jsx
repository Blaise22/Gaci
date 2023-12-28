import React from 'react'
import Header from '../../components/partials/Header'
import {QuestionMarkCircleIcon,EllipsisHorizontalIcon} from '@heroicons/react/20/solid'
import MainCard from '../../components/cards/MainCard'
import CardDiscussion from '../../components/cards/CardDiscussion'
import {useParams} from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Spinner from '../../components/extra/Spinner'
import getPeriode from '../../helpers/utils/getPeriode'
import useFetchPaginate from '../../hooks/useFetchPaginate'
import NavigationPageCard from '../../components/cards/NavigationPageCard'
import DataInfo from '../../components/extra/DataInfo'
import CreateResponseForm from '../../components/form/CreateResponseForm'
import ForumSidebar from '../../components/partials/ForumSidebar'
const Responses = () => {
  const {id}=useParams()
  const {data:question,load:questionLoad,error:questionError}=useFetch(`/forum/question-detail/${id}/`)
  const {data,load,count,prev,next, error,getData,nextPage,prevPage}=useFetchPaginate(`/forum/reply-list/`)
  return (
    <>
        <Header/>
        <ForumSidebar />
        <div className='px-4 md:pl-64  md:pr-12 pt-16 lg:pr-16 w-full'>
          <div className="grid md:px-4 pt-2 lg:grid-cols-2  gap-4">
        <div className=" py-2  "> 
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <QuestionMarkCircleIcon className='w-8 text-white' />
                          <span className="text-lg text-blue-600">Question</span>
                        </div>
                        <div className="relative group py-2">
                          <div className="flex p-2 rounded-lg hover:bg-gray-100 items-center gap-1">
                          <EllipsisHorizontalIcon className='w-5 text-gray-600' />
                            
                          </div>
                          <div className="absolute hidden group-hover:block bg-white  shadow-md p-4 rounded-lg right-0 w-44">
                                Hello
                          </div>
                        </div>
                    </div>
                    <span className='font-bold py-2 block text-md'>Posée par { question?.user?.names }</span>
                    { question?.wording ?
                      <span className="text-blue-600 block w-full bg-blue-100 p-2 rounded-lg font-semibold">
                        {question?.wording} 
                      </span>
                    : <p className='block text-center w-full'>En attente de la question</p> }
                
                <Spinner load={questionLoad}  className={'spinner mt-2'}/>
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
                    {count} réponse{count>1?'s':''} 
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
                        isResPage={true}
                      />
                    ))
                }


               
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
          <CreateResponseForm 
            questionId={question?.pk} 
            refresh={()=>{getData('/forum/reply-list/')}}
          />
        </div>
        </div>
    </>
  )
}

export default Responses