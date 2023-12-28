import ArticleCard from '../../components/cards/ArticleCard'
import Header from '../../components/partials/Header'
import React from 'react'
import PubSidebar from '../../components/partials/PubSidebar'

const Projects = () => {
  return (
    <>
        <Header/>
        <PubSidebar />
        <div className='px-4 md:pl-64  md:pr-12 pt-20 lg:pr-16 w-full'>
          <div className="grid px-4 lg:grid-cols-2  gap-4">
              Projects
          </div>
        </div>
    </>
  )
}

export default Projects