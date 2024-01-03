import React, { useEffect } from 'react'
import Header from '../../components/partials/Header'
import {QuestionMarkCircleIcon,EllipsisHorizontalIcon} from '@heroicons/react/20/solid'
import MainCard from '../../components/cards/MainCard'
import CardDiscussion from '../../components/cards/CardDiscussion'
import {useParams,useNavigate, Link} from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Spinner from '../../components/extra/Spinner'
import getPeriode from '../../helpers/utils/getPeriode'
import useFetchPaginate from '../../hooks/useFetchPaginate'
import NavigationPageCard from '../../components/cards/NavigationPageCard'
import DataInfo from '../../components/extra/DataInfo'
import CreateResponseForm from '../../components/form/CreateResponseForm'
import ForumSidebar from '../../components/partials/ForumSidebar'
import DeletModale from '../../components/modals/DeletModale'
import useUser from '../../hooks/useUser'
const Responses = () => {
  const {id}=useParams() 
  const {data:question,load:questionLoad,error:questionError,getData:getQuestionsData}=useFetch(`/forum/question-detail/${id}/`)
  const {data,load,count,prev,next, error,getData,nextPage,prevPage}=useFetchPaginate(`/forum/reply-list-create/${id}/`)
  const user=useUser()
  return (
    <>
        <Header/>
        <ForumSidebar />
        <div className='px-4 text-xs md:text-sm md:pl-64  md:pr-12 pt-16 lg:pr-16 w-full'>
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
                          <div className="absolute hidden group-hover:block top-[80%]  bg-white text-left shadow-md p-4 rounded-lg right-0 w-44">
                              {
                                user?.user.pk==question?.user.pk &&
                                <DeletModale 
                                  buttonContent={ <span className='text-red-600 cursor-pointer block w-full p-2 hover:bg-red-100 rounded-md'>Supprimer ma question</span> }
                                  redirectUrl={'/forum'}
                                  title={'Supprimer une question'}
                                  url={`/forum/question-delete/${id}/`}
                                  refresh={()=>{}}
                                />
                              }
                          </div>
                        </div>
                    </div>
                    <span className='font-bold py-2 block text-md'>Posée par { question?.user?.names }</span>
                    { question?.wording ?
                    <>
                      <span className="text-blue-600 block w-full pb-4 rounded-lg font-semibold">
                        {question?.wording} 
                      </span>
                      {
                      question?.image ?
                      <Link to={question?.image}>
                        <img src={question?.image} className=' w-full h-56 object-cover rounded-lg' alt="logo" />
                      </Link>
                      
                      :
                      null

                    }
                    </>
                    : <p className='block text-center w-full'>En attente de la question</p> }
                
                <Spinner load={questionLoad}  className={'spinner mt-2'}/>
                <div className="flex justify-between mt-1 gap-2">
                        {
                            question?.doc &&
                            <button className='p-1 rounded-md text-gray-600 bg-gray-100 hover:bg-gray-200'>Lire le document</button>
                        }
                         
                    </div> 
               <div className="flex mt-2 justify-between">
                    {count} réponse{count>1?'s':''} 
                    <p className="text-gray-700 text-xs block ">
                      {
                        question?.date_add &&
                        <span>Publié {getPeriode(question?.date_add)}</span>
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
                        refresh={()=>{getData(`/forum/reply-list-create/${id}/`)}}
                        pk={item.pk}
                        status={item.status}
                        isResPage={true}
                        deleteUrl={`/forum/reply-delete/${item.pk}/`}
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
            refresh={()=>{getData(`/forum/reply-list-create/${id}/`)}}

          />
        </div>
        </div>
    </>
  )
}

export default Responses