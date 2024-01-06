
import { EnvelopeIcon, EyeIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import React,{useEffect, useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Logo from '../../../assets/full_gaci_logo.png' 
import useAuth from '../../../hooks/useAuth'
import Spinner from '../../../components/extra/Spinner'
const Connexion = () => {
   
  const navigate=useNavigate()
  const {login,load,error}=useAuth() 
  const [visiblePass,setVisiblePass]=useState(false) 
  const [email,setEmail]=useState('') 
  const [password,setPassword]=useState('')
  const userData=localStorage.getItem('accessToken')
  useEffect(() => {
    userData ? navigate('/'):null
  },[userData])
  
  const handleLogin= async ()=>{ 
      
      const credentials={
        email:email,
        password:password
      }
      login(credentials)
       
  }
  return (
    <>
        <div className='bg-gradient-to-r flex items-center justify-center px-4 md:px-12 lg:px-16 from-green-100 via-blue-100 to-purple-100 h-screen'>
        <div className="w-full  flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="w-full flex flex-col text-center md:w-[50%]">
                 
                  <div className="px-8"><img src={Logo} className=' w-auto' alt="logo" /></div>
                </div>
                <div className="w-full flex justify-center md:w-[50%]">
                    
                  <div className="w-96 card p-4">
                    <span className='text-danger'>{error ? 'Erreur d\'identifiants':''}</span>
                    <div className="mt-4 flex items-center">
                        <div className="w-12 h-10 border rounded-l-lg border-t flex items-center justify-center border-b">
                            <EnvelopeIcon className='w-8 text-gray-700'/>
                        </div>
                        <div className="w-full h-10   border-r rounded-r-lg ">
                            <input type="email" placeholder='Entrez votre adresse mail' onChange={(e)=>setEmail(e.target.value)} className='w-full border-t focus:bg-gray-100 border-b px-2 outline-none ring-0  h-10 rounded-r-lg ' />
                        </div> 
                    </div>
                    <div className="mt-8 flex items-center">
                        <div className="w-12 h-10 border border-t rounded-l-lg flex items-center justify-center border-b">
                            <LockClosedIcon className='w-8 text-gray-700'/>
                        </div>
                        <div className="w-full h-10 ">
                            <input type={visiblePass ?"text":"password"}  onChange={(e)=>setPassword(e.target.value)} placeholder='Entrez votre mot de passe' className='w-full  focus:bg-gray-100 border-t border-b px-2 outline-none ring-0  h-10' />
                        </div> 
                        <div onClick={()=>{setVisiblePass(!visiblePass)}} className="w-12 rounded-r-lg h-10 group border border-t flex items-center justify-center border-b">
                            <EyeIcon className='w-6 group-hover:text-blue-600 tran text-gray-700'/>
                        </div>
                    </div>
                    <div className="mt-8 flex items-center">
                        {
                            !load ? 
                            <button className={'w-full  btn-primary'} onClick={handleLogin}>Connexion</button>:
                            <button className={'w-full  btn-primary flex items-center  justify-center'}>
                                <div className="flex gap-2 ">
                                    <Spinner className={'w-6 h-6'} load={true} />
                                    Connexion
                                </div> 
                                 
                            </button>
                        }
                    </div>
                    <div className="mt-8 text-center">
                         <span className='text-link font-semibold'>Mot de passe oublié ? </span>
                    </div>
                    <div className="mt-2 flex gap-2 items-center justify-center text-center w-full"> 
                         <div className="w-full">
                            <span className='text-primary'>N'avez-vous pas un compte ? </span><Link to='/inscription' className='text-link'>Creer un compte</Link>
                         </div>
                    </div>
                    <div className="mt-2 text-center">
                         <Link to={'/'} className='text-link'>Retour à l'accueil</Link>
                    </div>
                </div>
                </div>

            </div>

        </div>
         
        
    </>
  )
}

export default Connexion