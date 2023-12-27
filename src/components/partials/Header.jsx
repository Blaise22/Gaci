
import { ChatBubbleLeftIcon, ChevronRightIcon, FlagIcon, MegaphoneIcon, UserCircleIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import { BookOpenIcon, ChatBubbleBottomCenterIcon, InboxIcon } from '@heroicons/react/24/outline'

import {Link} from 'react-router-dom'
import Logo from '../../assets/gaci_logo.png' 
import ProfilCard from './ProfilCard'
import useUser from '../../hooks/useUser'
import MainLinks from './MainLinks'
import MainLinksCard from './MainLinksCard'
import HeaderSearchBar from './HeaderSearchBar'
const Header =  () => { 
    const user=localStorage.getItem('accessToken') 
    return (
    <div className='h-14 z-50  right-0 left-0 bg-white border-b w-full fixed flex px-4 md:px-12 lg:px-16 top-0 '>
        <div className="w-96   flex items-center ">
        <Link to={'/'}>
            <img src={Logo} className='h-10 md:h-12 w-auto' alt="logo" />
        </Link>
        </div> 
            {
                user ?
                <div className="w-full  flex justify-end"> 
                <div className="flex  w-full justify-end    items-center">  
                        <HeaderSearchBar />
                        <div className="md:block hidden px-0.5 md:px-2">
                            <MainLinks /> 
                        </div>
                        <div className="md:hidden block px-0.5 md:px-2">
                            <MainLinksCard />
                        </div>

                            
                        <ProfilCard />
                        
                    </div> 
                </div> 
                :
                <>
                    <div className="w-full flex justify-end  group ">

                    <div className="flex gap-10 items-center">
                        <div className="flex  cursor-pointer items-center  gap-2">
                            <span className='hidden md:block first-letter:text-primary'>Connectez-vous entant que membre de gaci.</span>
                            <ChevronRightIcon className='w-10 hidden md:block text-gray-600 group-hover:animate-ping '/>
                        </div>
                        <Link to='/connexion'><button className='btn-primary pb-0.5 flex items-center'>Connexion</button></Link> 
                    </div>
                    </div>
                </>

            }
        </div>
     
  )
}

export default Header