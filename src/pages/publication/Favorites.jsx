
import React from 'react'
import Header from '../../components/partials/Header' 
import MainCard from '../../components/cards/MainCard'
import {StarIcon} from '@heroicons/react/24/outline' 
import useFetchPaginate from '../../hooks/useFetchPaginate'
import Spinner from '../../components/extra/Spinner'
import DataInfo from '../../components/extra/DataInfo'
import NavigationPageCard from '../../components/cards/NavigationPageCard' 
import PubSidebar from '../../components/partials/PubSidebar' 
import FavoritesArticleCard from '../../components/cards/FavoritesArticleCard'

const Favorites = () => {
  const { data,load,count,prev,next, error,getData,nextPage,prevPage}=useFetchPaginate(`/pub/favorite-list-create/`)
     
    return (
    <>
        <Header/>
        <PubSidebar />
        <div className='px-4 text-xs md:text-sm md:pl-64  md:pr-12 pt-16 lg:pr-16 w-full'>
          <div className="grid md:px-4 lg:pl-12 lg:pr-32 xl:pr-72  pt-6  gap-4">
               
             <MainCard
                className={'bg-white rounded-lg w-full '}
                mainIcon={<StarIcon className='w-8 text-gray-700' />}
                mainTitle={'Favories'}
                sideHeaderContent={  null }
             >
              <div className="flex gap-4 flex-col">
                { !load && 
                  data?.map((item,index)=>(
                    <FavoritesArticleCard 
                      key={index}
                      pk={item.pk}
                      date={item.date_add}
                      synthesis={item.post.synthesis}
                      title={item.post.title}
                      user={item.user.names}
                      userPk={item.user.pk}
                      postPk={item.post.pk}
                      refresh={()=>{getData('/pub/favorite-list-create/')}}
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

export default Favorites