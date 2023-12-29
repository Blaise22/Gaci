import React from 'react'
import ArticleCard from '../cards/ArticleCard'
import Spinner from '../extra/Spinner'
import DataInfo from '../extra/DataInfo'
import useFetchPaginate from '../../hooks/useFetchPaginate'

const ArticleList = () => {
  const { data,load,count,prev,next, error,getData,nextPage,prevPage}=useFetchPaginate(`/pub/post-published-list`)
  return (
    <>
    
        <div className='flex flex-col items-center w-full'>
        <span className="text-lg text-left block w-full  md:w-96 lg:w-[80%] font-bold text-blue-600">Publications recentes</span>
        <div className="grid grid-cols-1 w-full md:w-96 lg:w-[80%] mt-4 gap-4">
        { !load && 
                  data?.slice(0,6).map((item,index)=>(
                    <ArticleCard 
                      key={index}
                      pk={item.pk}
                      date={item.date_add}
                      image={item.image}
                      synthesis={item.synthesis}
                      title={item.title}
                      user={item.user.names}
                      userPk={item.user.pk}
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
    </div>
    </>
  )
}

export default ArticleList