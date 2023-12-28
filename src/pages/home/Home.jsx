
import React, { useContext } from 'react'
import Header from '../../components/partials/Header'
import FrontImage from '../../components/containers/FrontImage'
import ArticleList from '../../components/containers/ArticleList' 
import useUser from '../../hooks/useUser'
import useFetch from '../../hooks/useFetch'
import useFetchPaginate from '../../hooks/useFetchPaginate'
const Home = () => {
  const user=useUser()
  const {data,load,error}=useFetchPaginate(`/pub/project-list`)
   
  return (
    <>
        <Header/> 
        <div className='px-4 text-xs md:text-sm md:px-12 pt-14 lg:px-16 w-full'>
          <FrontImage/> 
          <ArticleList/> 
        </div>
      </> 
  )
}
export default Home