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
function App() { 
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/connexion' element={<Connexion/>}/> 
            <Route path='/inscription' element={<Inscription/>}/> 
            <Route path='/' element={<Home/>}/> 

            <Route element={<ProtectedRoutes/>}> 
              <Route path='/forum' element={<Forum/>}/> 
              <Route path='/forum/questions' element={<Questions/>}/> 

              <Route path='/profil' element={<Profil/>}/> 
              <Route path='/publications' element={<Publications/>}/> 
            </Route>
             
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
