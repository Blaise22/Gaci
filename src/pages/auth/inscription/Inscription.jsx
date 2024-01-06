import React,{useState} from 'react' 
import Logo from '../../../assets/full_gaci_logo.png' 
import { Link } from 'react-router-dom'
import useCreate from '../../../hooks/useCreate'
import Spinner from '../../../components/extra/Spinner'
import useAuth from '../../../hooks/useAuth'
import Input from '../../../components/form/Input'
const Inscription = () => {  
  const {create,res, load, error, success}=useCreate() 
  const { login,logout,load:loadLogin,error:errorLogin}=useAuth() 
  const [mailError,setEmailError]=useState("paln")
  const [passwordError,setPasswordError]=useState("paln")
  const [email,setEmail]=useState(null)  
  const [names,setNames]=useState(null) 
  const [phone_number,setphone_number]=useState(null) 
  const [password,setPassword]=useState(null)
  const [password2,setPassword2]=useState(null)
  const submit=()=>{
    const formData={
      email:email,
      names:names,
      phone_number:phone_number,
      password:password,
      password2:password2,
      staff:false
    }
    create(`/auth/no-staff-register/`,formData)
  }
  return (
    <>
        <div className='bg-gradient-to-r flex items-center justify-center px-4 md:px-12 lg:px-16 from-green-100 via-blue-200 to-purple-100 h-screen'>
        <div className="w-full  flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="w-full flex flex-col text-center md:w-[50%]">
                  
                  <div className="px-8"><img src={Logo} className=' w-auto' alt="logo" /></div>
                </div>
                <div className="w-full flex justify-center md:w-[50%]">
                    
                  <div className="w-96 card p-4">
                    <span className='text-danger'>{error ? 'Une Erreur s\'est produite, veuillez recommencer l\'inscription.':''}</span>
                    <Input 
                        label={"Entrez votre nom complet"}
                        name={'names'}
                        onChange={setNames}
                        type={'text'}
                        value={names} 
                    />
                    <Input 
                        label={"Entrez votre adresse mail"}
                        name={'text'}
                        onChange={setEmail}
                        type={'email'}
                        value={email} 
                    />
                    {mailError ? <span className='text-red-600 text-xs'> * {mailError} </span>:'*'}
                    <Input 
                        label={"Entrez votre mot de passe"}
                        name={'password'}
                        onChange={setPassword}
                        type={'password'}
                        value={password} 
                    />
                    <Input 
                        label={"Confirmer votre mot de passe"}
                        name={'password2'}
                        onChange={setPassword2}
                        type={'password'}
                        value={password2} 
                    />
                    {passwordError ? <span className='text-red-600 text-xs'> * {passwordError} </span>:'*'}

                    <div className="mt-8 flex items-center">
                        {
                            !load ? 
                              loadLogin?
                                <button className={'w-full btn-primary flex items-center  justify-center'}>
                                    <div className="flex gap-2 ">
                                        <Spinner className={'w-6 h-6'} load={true} />
                                        Connexion
                                    </div>  
                                </button>: 
                              <button className={'w-full  btn-primary'} onClick={submit}>Inscription</button>:
                            <button className={'w-full  btn-primary flex items-center  justify-center'}>
                                <div className="flex gap-2 ">
                                    <Spinner className={'w-6 h-6'} load={true} />
                                    Inscription
                                </div> 
                            </button>
                        }
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