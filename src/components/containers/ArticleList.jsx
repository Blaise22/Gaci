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
        <div className='px-4 text-xs md:text-sm flex justify-center   pt-16  w-full'>
          <div className="grid sm:max-w-lg  ">
        <span className="text-lg text-left block w-full  font-bold text-blue-600">Publications recentes</span>
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
    </div>
    </>
  )
}

export default ArticleList