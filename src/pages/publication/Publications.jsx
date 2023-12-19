import ArticleCard from '../../components/cards/ArticleCard'
import Header from '../../components/partials/Header'
import React from 'react'

const Publications = () => {
  return (
    <>
        <Header/>
        <div className='px-4 md:px-12 pt-20 lg:px-16 w-full'>
          <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-4">
              <ArticleCard data={''} />
              <ArticleCard data={''} />
              <ArticleCard data={''} />
              <ArticleCard data={''} />
              <ArticleCard data={''} />
              <ArticleCard data={''} />
              <ArticleCard data={''} />
              <ArticleCard data={''} />
              <ArticleCard data={''} />
          </div>
        </div>
    </>
  )
}

export default Publications