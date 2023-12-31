import { useState } from 'react' 
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom' 
import Home from './pages/home/Home'
import Connexion from './pages/auth/connection/Connection'
import Inscription from './pages/auth/inscription/Inscription'
import ProtectedRoutes from './protected/ProtectedRoutes'
import Forum from './pages/forum/Forum'
import Profil from './pages/profil/Profil'
import Publications from './pages/publication/Publications'
import Questions from './pages/forum/Questions'
import Responses from './pages/forum/Responses'
import Projects from './pages/publication/Projects'
import PostDetails from './pages/publication/PostDetails'
import Favorites from './pages/publication/Favorites'
import PostsDocuments from './pages/publication/PostsDocuments'
import PostsPhotos from './pages/publication/PostsPhotos'
function App() { 
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/connexion' element={<Connexion/>}/> 
            <Route path='/inscription' element={<Inscription/>}/> 
            <Route path='/' element={<Home/>}/> 

            <Route element={<ProtectedRoutes/>}> 
              <Route path='/profil' element={<Profil/>}/> 

              <Route path='/forum' element={<Forum/>}/> 
              <Route path='/forum/questions' element={<Questions/>}/> 
              <Route path='/forum/question/:id/reponses' element={<Responses/>}/> 

              <Route path='/profil' element={<Profil/>}/> 
              <Route path='/publications' element={<Publications/>}/> 
              <Route path='/favoris' element={<Favorites/>}/> 
              <Route path='/publication/:id' element={<PostDetails/>}/> 
              <Route path='/publication/:id/documents' element={<PostsDocuments/>}/> 
              <Route path='/publication/:id/photos' element={<PostsPhotos/>}/> 
              <Route path='/projets' element={<Projects/>}/> 
            </Route>
             
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
