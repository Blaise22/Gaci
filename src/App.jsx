import { useState } from 'react' 
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom' 
import Home from './pages/home/Home'
import Connexion from './pages/auth/connection/Connection'
import Inscription from './pages/auth/inscription/Inscription'
import Classroom from './pages/classroom/Classroom'
import Forum from './pages/forum/Forum'
import Profil from './pages/profil/Profil'
import Publications from './pages/publication/Publications'
import ProtectedRoutes from './protected/ProtectedRoutes'
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
              <Route path='/profil' element={<Profil/>}/> 
              <Route path='/publications' element={<Publications/>}/> 
            </Route>
             
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
