import React from 'react'
import { Link } from 'react-router-dom'
import { ChatBubbleLeftIcon, ChevronRightIcon, FlagIcon, MegaphoneIcon, UserCircleIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import { BookOpenIcon, ChatBubbleBottomCenterIcon, InboxIcon } from '@heroicons/react/24/outline'

const MainLinks = () => {
  return (
    <>
                <div className="flex flex-col md:flex-row gap-1 ">
                        <Link to={'/publications'}>
                        <div className="flex gap-2 w-full py-3  md:w-28  group hover:bg-blue-600 tran hover:text-white p-1 rounded-lg cursor-pointer md:gap-2 items-center">
                            <InboxIcon className='w-6 group-hover:text-white text-gray-600 hover:scale-110 tran active:text-blue-600 p-0'/>
                            <span className='group-hover:text-link text-secondary group-hover:text-white '>
                                Publications
                            </span>
                        </div>
                        </Link>
                        <Link to={'/forum'}>
                        <div className="flex gap-2 w-full py-3  md:w-28  group hover:bg-blue-600 tran hover:text-white p-1 rounded-lg cursor-pointer md:gap-2 items-center">
                            <ChatBubbleBottomCenterIcon className='w-6 group-hover:text-white text-gray-600 hover:scale-110 tran active:text-blue-600 p-0'/>
                            <span className='group-hover:text-link text-secondary group-hover:text-white '>
                                Forum
                            </span>
                        </div>
                        </Link>
                         
                         </div>
    </>
  )
}

export default MainLinks