
import React from 'react'
import Header from '../../components/partials/Header' 
import MainCard from '../../components/cards/MainCard'
import {QuestionMarkCircleIcon,PlusIcon} from '@heroicons/react/20/solid' 
import Spinner from '../../components/extra/Spinner' 
import PubSidebar from '../../components/partials/PubSidebar' 
import useFetch from '../../hooks/useFetch'
import {useParams} from 'react-router-dom'
import useFetchPaginate from '../../hooks/useFetchPaginate'
import NavigationPageCard from '../../components/cards/NavigationPageCard'
import DataInfo from '../../components/extra/DataInfo'
import CardDiscussion from '../../components/cards/CardDiscussion'
import CreateCommentForm from '../../components/form/CreateCommentForm' 

const PostDetails = () => {
    const {id}=useParams()
    const { data,load,error}=useFetch(`/pub/post-staff-detail/${id}`)
    const { data:comments,load:loadComments,count,prev,next, error:commentErrors,getData,nextPage,prevPage}=useFetchPaginate(`/pub/coment-post-list/${id}/`)
    console.log(comments);
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
              <div className="flex gap-4 flex-col text-gray-700">
                {
                    // for only staff (post details)
                    data && 
                    <div className="block">
                        <span className="text-lg font-bold ">{data?.title}</span>

                    </div>
                }

                 
                <Spinner 
                  load={load} 
                  className='w-14 h-14 lg:w-20 lg:w-24' 
                />
                <span className="text-lg font-bold block">Commentaires {!loadComments &&`- ${count}`}</span>
                <div className="mt-2">
                    {
                        comments?.map((item,index)=>(
                            <CardDiscussion 
                            key={index}
                            message={item?.message}
                            date={item?.date_add}
                            doc={null}
                            image={null}
                            owner={item?.user}
                            question={null}
                            refresh={()=>{getData(`/pub/coment-post-list/${id}/`)}}
                            pk={item.pk}
                            status={item.status}
                            isResPage={false}
                            deleteUrl={`/pub/coment-delete/${item.pk}/`}
                            />
                        ))
                    }
                </div>
                <DataInfo 
                    errorStatus={commentErrors}
                    len={comments?.length} 
                    load={loadComments}
                />
                <NavigationPageCard
                  load={loadComments}
                  count={count} 
                  next={next}
                  prev={prev}
                  nextPage={nextPage}
                  prevPage={prevPage}
                />
                 
                 

              </div> 
             </MainCard>
                <CreateCommentForm 
                    postId={id}
                    refresh={()=>{getData(`/pub/coment-post-list/${id}/`)}}

                />
          </div>
        </div>
    </>
  )
}

export default PostDetails