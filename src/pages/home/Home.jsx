
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
  console.log(user);
  return (
    <>
        <Header/> 
        <div className=' text-xs md:text-sm md: pt-14  w-full'>
          <FrontImage/> 
          
          <ArticleList/> 
        </div>
      </> 
  )
}
export default Home