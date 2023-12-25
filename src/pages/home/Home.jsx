
import React, { useContext } from 'react'
import Header from '../../components/partials/Header'
import FrontImage from '../../components/containers/FrontImage'
import ArticleList from '../../components/containers/ArticleList'
import { AuthContext } from '../../context/auth/AuthContext'
const Home = () => {
  const {user}=useContext(AuthContext)
  console.log(user);
  return (
    <>
        <Header/> 
        <div className='px-4 md:px-12 pt-14 lg:px-16 w-full'>
          <FrontImage/> 
          <ArticleList/> 
        </div>
      </> 
  )
}
export default Home