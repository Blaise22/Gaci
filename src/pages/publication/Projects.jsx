import ArticleCard from '../../components/cards/ArticleCard'
import Header from '../../components/partials/Header'
import React from 'react'
import PubSidebar from '../../components/partials/PubSidebar'

const Projects = () => {
  return (
    <>
        <Header/>
        <PubSidebar />
        <div className='px-4 text-xs md:text-sm md:pl-64  md:pr-12 pt-16 lg:pr-16 w-full'>
          <div className="grid md:px-4 lg:pl-12 lg:pr-32 xl:pr-72  pt-6  gap-4">
              Projects
          </div>
        </div>
    </>
  )
}

export default Projects