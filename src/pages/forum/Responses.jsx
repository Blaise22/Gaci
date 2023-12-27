import React from 'react'
import Header from '../../components/partials/Header'
import {QuestionMarkCircleIcon,PlusIcon} from '@heroicons/react/20/solid'
import MainCard from '../../components/cards/MainCard'
import CardDiscussion from '../../components/cards/CardDiscussion'
import {useParams} from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Spinner from '../../components/extra/Spinner'
import getPeriode from '../../helpers/utils/getPeriode'
import useFetchPaginate from '../../hooks/useFetchPaginate'
import NavigationPageCard from '../../components/cards/NavigationPageCard'
import DataInfo from '../../components/extra/DataInfo'
const Responses = () => {
  const {id}=useParams()
  const {data:question,load:questionLoad,error:questionError}=useFetch(`/forum/question-detail/${id}/`)
  const {data,load,count,prev,next, error,getData,nextPage,prevPage}=useFetchPaginate(`/forum/reply-list/`)
  return (
    <>
        <Header/>
        <div className="pt-16 px-6 text-xs md:text-sm text-gray-700  w-full">
        <div className=" py-2 md:px-14 lg:px-24 "> 
                
                    { question?.wording ?
                      <span className="text-blue-700 block w-full bg-blue-100 p-2 rounded-lg font-semibold">
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
        <div className="fixed w-full py-2 md:px-14 lg:px-24 px-6 bg-white h-20 border-t bottom-0 right-0 left-0">
            hello
        </div>
        </div>
    </>
  )
}

export default Responses