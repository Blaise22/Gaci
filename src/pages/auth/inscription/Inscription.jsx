
import { EnvelopeIcon, EyeIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import React,{useState} from 'react' 
import Logo from '../../../assets/full_gaci_logo.png' 
import { Link } from 'react-router-dom'
const Inscription = () => {
  const [loading,setLoading]=useState(false) 
  const [error,setError]=useState(false) 
  const [visiblePass,setVisiblePass]=useState(false) 
  const [email,setEmail]=useState('') 
  const [password,setPassword]=useState('')
  return (
    <>
        <div className='bg-gradient-to-r flex items-center justify-center px-4 md:px-12 lg:px-16 from-green-100 via-blue-200 to-purple-100 h-screen'>
        <div className="w-full  flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="w-full flex flex-col text-center md:w-[50%]">
                  
                  <div className="px-8"><img src={Logo} className=' w-auto' alt="logo" /></div>
                </div>
                <div className="w-full flex justify-center md:w-[50%]">
                    
                  <div className="w-96 card p-4">
                    <span className='text-danger'>{error ? 'Erreur d\'identifiants':''}</span>
                    
                    <div className="mt-8 flex items-center">
                         <button className={'w-full  btn-primary'}>Inscription</button>
                    </div>
                    <div className="mt-8 text-center">
                         <span className='text-link font-semibold'>Mot de passe oublié ? </span>
                    </div>
                    <div className="mt-2 flex gap-2 items-center justify-center text-center w-full"> 
                         <div className="w-full">
                         <span className='text-primary'>Avez-vous deja un compte ? </span><Link to='/connexion' className='text-link'>Connectez-vous</Link>
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

export default Inscription