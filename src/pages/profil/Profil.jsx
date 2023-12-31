import React, { useState } from 'react'
import Header from '../../components/partials/Header' 
import MainCard from '../../components/cards/MainCard'
import {PlusIcon} from '@heroicons/react/20/solid' 
import useFetchPaginate from '../../hooks/useFetchPaginate'
import Spinner from '../../components/extra/Spinner'
import DataInfo from '../../components/extra/DataInfo'
import NavigationPageCard from '../../components/cards/NavigationPageCard' 
import PubSidebar from '../../components/partials/PubSidebar'
import ArticleCard from '../../components/cards/ArticleCard'
import PublicationModal from '../../components/modals/PublicationModal'
import MyProfil from './MyProfil'
import ProjectModal from '../../components/modals/ProjectModal'
import CardProject from '../../components/cards/CardProject'

const Profil = () => {
  const { data,load,count,prev,next, error,getData,nextPage,prevPage}=useFetchPaginate(`/pub/post-list-create/`)
  const { data:projects,load:loadProject,count:countProjects,prev:prevProject,next:nextProject, error:errorProject,getData:getProjects,nextPage:nextPageProject,prevPage:prevPageProject}=useFetchPaginate(`/pub/project-list-create/`)
  const [showPub,setShowPub]=useState(true)
  console.log(projects);
  return (
    <>
        <Header/>
        <PubSidebar />
        <div className='px-4 text-xs md:text-sm md:pl-64  md:pr-12 pt-16 lg:pr-16 w-full'>
          <div className="grid md:px-4 lg:pl-12 lg:pr-32 xl:pr-72  pt-6  gap-4">
              <MainCard 
                  className={'bg-white rounded-lg w-full md:w-96 lg:w-[80%]'}
                  mainIcon={null}
                  mainTitle={'Mon profil'}
              >
                <MyProfil />
              </MainCard>
              <div className="flex gap-2">
                <button onClick={()=>{setShowPub(true)}} className={`p-3  font-bold rounded-full hover:text-blue-600 hover:bg-blue-100 tran ${showPub?'bg-blue-100 text-blue-600':'bg-blue-600 text-white'}`}>Publications</button>
                <button onClick={()=>{setShowPub(false)}} className={`p-3  font-bold rounded-full hover:text-blue-600 hover:bg-blue-100 tran ${!showPub?'bg-blue-100 text-blue-600':'bg-blue-600 text-white'}`}>Projets</button>
              </div>
              {
                showPub ?
                <MainCard
                className={'bg-white rounded-lg w-full md:w-96 lg:w-[80%]'}
                mainIcon={null}
                mainTitle={'Mes publications'}
                sideHeaderContent={
                    <PublicationModal
                        modalTitle={'Publication'}
                        mainButton={
                            <button className='flex gap-0 text-md bg-gray-200 p-2 font-bold hover:bg-gray-300 active:shadow tran rounded-lg group items-center'>
                            <PlusIcon className='w-6 text-gray-700' />
                            Créer 
                            </button>
                        } 
                         
                        >
                              
                        </PublicationModal>
                        }
             >
              <div className="flex gap-4 flex-col">
                { !load && 
                  data?.map((item,index)=>(
                    <ArticleCard 
                      key={index}
                      pk={item.pk}
                      date={item.date_add}
                      image={item.image}
                      synthesis={item.synthesis}
                      title={item.title}
                      user={item.user.names}
                      userPk={item.user.pk}
                      refresh={()=>{ getData(`/pub/post-list-create/`) }}
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
             </MainCard>:
                 <MainCard
                 className={'bg-white rounded-lg w-full md:w-96 lg:w-[80%]'}
                 mainIcon={null}
                 mainTitle={'Projets'}
                 sideHeaderContent={
                     <ProjectModal
                         modalTitle={'Projet'}
                         mainButton={
                             <button className='flex gap-0 text-md bg-gray-200 p-2 font-bold hover:bg-gray-300 active:shadow tran rounded-lg group items-center'>
                             <PlusIcon className='w-6 text-gray-700' />
                             Créer 
                             </button>
                         } 
                          
                         >
                               
                         </ProjectModal>
                         }
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
              }
             
          </div>
        </div>
    </>
  )
}

export default Profil