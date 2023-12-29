 
import React, { useState } from 'react'
import MyProfile from '../../../components/containers/MyProfile'
import ConfigLinks from '../../../components/partials/ConfigLinks'
import Header from '../../../components/partials/Header'
import Sidebar from '../../../components/partials/Sidebar'
import { Link } from 'react-router-dom'
import { ChevronUpIcon,ChevronDownIcon } from '@heroicons/react/24/outline'
import ChangePasswordForm from '../../../components/containers/ChangePasswordForm'
const AccountSecurity = () => {
  const [changerPasswordContainer, setShowChangePassword] = useState(localStorage.getItem('changerPasswordContainer')?localStorage.getItem('changerPasswordContainer'):'0')
  function toggleShowChangePassword(value){
    if(localStorage.getItem('changerPasswordContainer')){
      setShowChangePassword(value)
      localStorage.setItem('changerPasswordContainer',value)
    }else{
      setShowChangePassword(value)
      localStorage.setItem('changerPasswordContainer',value)
    }
  }
  return (
    <>
        <Sidebar/>
        <Header title='Configuration' />
        <div className='ml-0 h-full first-line: p-4  md:ml-60 '>
            <div className="flex gap-4  flex-col md:flex-row">
                 <ConfigLinks/>
                <div className="p-4   w-full"> 
                     <div className="flex justify-between">
                        <span className='text-gray-700 font-bold'>Securité du compte</span>
                        <Link to={'/configuration/profil'}> <button className='btn-secondary'>Retour</button> </Link>
                     </div>
                     {/** Option number 1 change password */}
                     
                        <div className='w-full flex items-center text-gray-700 gap-2 flex hover:bg-gray-200 cursor-pointer rounded-md p-2  mt-2' onClick={()=>{ changerPasswordContainer=='0'?toggleShowChangePassword('1'):toggleShowChangePassword('0') }} >
                             
                            {
                              changerPasswordContainer=='0'?
                              <ChevronDownIcon className='w-7 text-gray-700' />:
                              <ChevronUpIcon className='w-7 text-gray-700' />
                              
                            }
                            Changer mon mot de passe
                        </div>
                      
                     {/** End Option number 1 change password */}
                     {
                       changerPasswordContainer=='1' ?
                       <div className="card">
                         <ChangePasswordForm/>
                      </div>:null
                     }
                </div>
            </div>
        </div> 
    </>
  )
}

export default AccountSecurity