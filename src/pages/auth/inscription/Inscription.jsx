import React,{useEffect, useState} from 'react' 
import Logo from '../../../assets/full_gaci_logo.png' 
import { Link } from 'react-router-dom'
import useCreate from '../../../hooks/useCreate'
import Spinner from '../../../components/extra/Spinner'
import useAuth from '../../../hooks/useAuth'
import Input from '../../../components/form/Input'
import PhoneInput from 'react-phone-number-input'
import ReactPhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
const Inscription = () => {  
  const {create,res, load, error, success,errorDetails}=useCreate() 
  const { login,logout,load:loadLogin,error:errorLogin}=useAuth() 
  const [mailError,setEmailError]=useState(null)
  const [passwordError,setPasswordError]=useState(null)
  const [globalError,setGlobalError]=useState(null)
  const [email,setEmail]=useState(null)  
  const [names,setNames]=useState(null) 
  const [phoneNumber, setPhoneNumber] = useState(null) 
  const [password,setPassword]=useState(null)
  const [password2,setPassword2]=useState(null)
  useEffect(() => {
    if(error){
      if(errorDetails?.errors?.email){
        setEmailError("Cette adresse mail est deja utilisée.");
      }
      if(errorDetails?.errors?.phone_number){
        setGlobalError("Cet numéro de telephone est deja utilisé ou est invalide");
      }
      setTimeout(() => {
        setGlobalError(null)
        setEmailError(null)
      }, 10000);   
    }
    if(success){
      const credentials={
        email:email,
        password:password
      }
      login(credentials)
    }
  
     
  }, [error,success])
  
  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };
  const submit=()=>{
    const formData={
      email:email,
      names:names,
      phone_number:phoneNumber,
      password:password,
      password2:password2,
      staff:false
    }
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    } 
    if(names){
      if(email){
        if(validateEmail(email)){
          if(password==password2){
            create(`/auth/no-staff-register/`,formData)
          }else{
            setPasswordError('Les mots de passe ne correspondent pas.')
            setTimeout(() => {
              setPasswordError(null) 
            }, 10000);
          }
        }else{
          setEmailError('cette adresse n\'est pas valide')
        }
      }else{
        setEmailError('Veuillez completez votre adresse mail')
      }
    }else{
      setGlobalError('Veuillez renseigner votre nom complet.')
      setTimeout(() => {
        setGlobalError(null)
      }, 10000);
    }
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
                    <p className='text-danger'>{error ? 'Une Erreur s\'est produite, veuillez recommencer l\'inscription.':''}</p>
                    <p className='text-danger'>{globalError ? globalError:''}</p>
                    <Input 
                        label={"Entrez votre nom complet"}
                        name={'names'}
                        onChange={setNames}
                        type={'text'}
                        value={names} 
                    />
                    <label htmlFor="" className='text-sm text-gray-700'>Entrez votre numéro de telephone</label>
                    <ReactPhoneInput
                          international
                          defaultCountry="CD"
                          value={phoneNumber}

                          onChange={handlePhoneChange}
                          className="py-2 px-4 border outline-none right-0 z-0 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    <Input 
                        label={"Entrez votre adresse mail"}
                        name={'email'}
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

                    <div className="flex items-center">
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