import ArticleCard from '../../components/cards/ArticleCard'
import Header from '../../components/partials/Header'
import React from 'react'
import PubSidebar from '../../components/partials/PubSidebar'
import NavigationPageCard from '../../components/cards/NavigationPageCard'
import DataInfo from '../../components/extra/DataInfo'
import CardProject from '../../components/cards/CardProject'
import MainCard from '../../components/cards/MainCard'
import useFetchPaginate from '../../hooks/useFetchPaginate'
import Spinner from '../../components/extra/Spinner'

const Projects = () => {
  const { data:projects,load:loadProject,count:countProjects,prev:prevProject,next:nextProject, error:errorProject,getData:getProjects,nextPage:nextPageProject,prevPage:prevPageProject}=useFetchPaginate(`/pub/project-list-create/`)
  return (
    <>
        <Header/>
        <PubSidebar />
        <div className='px-4 text-xs md:text-sm md:pl-64   md:pr-32 pt-16  w-full'>
          <div className="grid md:px-4 lg:pl-12 lg:pr-32 xl:pr-72  pt-6  gap-4">
          <MainCard
                 className={'bg-white rounded-lg w-full'}
                 mainIcon={null}
                 mainTitle={'Projets'}
                 sideHeaderContent={ null }
              >
               <div className="flex gap-4 flex-col">
                 { !loadProject && 
                   projects?.map((item,index)=>(
                     <CardProject 
                        date={item.date_add}
                        description={item.descriptionProject}
                        designation={item.designationProject}
                        dev={item.devInfos}
                        doc={item.doc}
                        image={item.image}
                        pk={item.pk}
                        pu={item.pu}
                        pub={item.pub}
                        user={item.user}
                        key={index}
                        refresh={()=>{getProjects(`/pub/project-list-create/`)}}
                     />
                   ))
                 }
                 <Spinner 
                   load={loadProject} 
                   className='w-14 h-14 lg:w-20 lg:w-24' 
                 />
                 <DataInfo 
                     errorStatus={errorProject}
                     len={projects?.length} 
                     load={loadProject}
                     message={'Auccun projet pour l\'instant'}
                 />
                 <NavigationPageCard
                   load={loadProject}
                   count={countProjects} 
                   next={nextProject}
                   prev={prevProject}
                   nextPage={nextPageProject}
                   prevPage={prevPageProject}
                 />
 
               </div> 
              </MainCard>
          </div>
        </div>
    </>
  )
}

export default Projects