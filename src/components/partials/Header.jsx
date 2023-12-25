
import { ChatBubbleLeftIcon, ChevronRightIcon, FlagIcon, MegaphoneIcon, UserCircleIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import { BookOpenIcon, ChatBubbleBottomCenterIcon, InboxIcon } from '@heroicons/react/24/outline'

import {Link} from 'react-router-dom'
import Logo from '../../assets/gaci_logo.png' 
import ProfilCard from './ProfilCard'
const Header =  () => { 
    
    const session={
        user:{
            name:null
        }
    }
    
    return (
    <div className='h-14 z-50 bg-white border-b w-full fixed flex px-4 md:px-12 lg:px-16 top-0 '>
        <div className="w-96   flex items-center ">
        <Link to={'/'}>
            <img src={Logo} className='h-12 w-auto' alt="logo" />
        </Link>
        </div> 
            {
                session?.user?.name ? 
                <div className="w-full  flex justify-end"> 
                <div className="flex w-full justify-end gap-4 pr-14   items-center">  
                         <div className="flex gap-1">
                         <Link to={'/publications'}>
                        <div className="flex md:flex-row flex-col group hover:bg-blue-600 tran hover:text-white p-1 rounded-lg cursor-pointer md:gap-2 items-center">
                            <InboxIcon className='w-8 group-hover:text-white text-gray-600 hover:scale-110 tran active:text-blue-600 p-0'/>
                            <span className='group-hover:text-link text-secondary group-hover:text-white '>
                                Publications
                            </span>
                        </div>
                        </Link>
                        <Link to={'/forum'}>
                        <div className="flex md:flex-row flex-col group hover:bg-blue-600 tran hover:text-white p-1 rounded-lg cursor-pointer md:gap-2 items-center">
                            <ChatBubbleBottomCenterIcon className='w-8 group-hover:text-white text-gray-600 hover:scale-110 tran active:text-blue-600 p-0'/>
                            <span className='group-hover:text-link text-secondary group-hover:text-white '>
                                Forum
                            </span>
                        </div>
                        </Link>
                        <Link to={'/classroom'}>
                            <div className="flex md:flex-row flex-col group hover:bg-blue-600 tran hover:text-white p-1 rounded-lg cursor-pointer md:gap-2 items-center">
                                <BookOpenIcon className='w-8 group-hover:text-white text-gray-600 hover:scale-110 tran active:text-blue-600 p-0'/>
                                <span  className='group-hover:text-link text-secondary group-hover:text-white'>
                                    Classroom
                                </span>
                            </div>
                        </Link>
                         </div>
                            
                        <ProfilCard/>
                        
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