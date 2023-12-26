
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon,FireIcon,PowerIcon,UserCircleIcon,UserIcon } from '@heroicons/react/20/solid'

 import {useNavigate} from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useUser from '../../hooks/useUser'
 
export default function ProfilCard() { 
    const router=useNavigate()
    const {logout}=useAuth() 
    const user=useUser()  
  return (
    <div className=" z-50 right-4 top-0  text-right">
      <Menu as="div" className="relative z-50 inline-block text-left">
        <div>
          <Menu.Button className="inline-flex  mt-2 w-full justify-center   bg-opacity-20  items-center text-sm font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <div className="flex items-center  w-full rounded-md  group">
            <div className="items-center w-10 flex">
              {
                user?.profil?.picture ?
                <img src={user?.profil?.picture} className='w-10 hover:shadow-lg active:border-blue-300 h-10 border object-cover rounded-full' alt="" />
                :
                <UserCircleIcon className='w-10  text-gray-600 hover:scale-110 tran active:text-blue-600 p-0'/>   
              }

              
            </div>
            <div className="rounded-full  bg-gray-500 group-hover:scale-110 transition-all duration-200 hover:bg-gray-400 hover:ring-green-500 hover:ring-1 active:shadow-md">
              
          </div>
          </div> 
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0  w-44 origin-top-right divide-y  divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
               <div className="text-center text-sm py-2 font-bold text-gray-600">
                    <span>{user?.user?.names}</span>
                </div>   
              </Menu.Item>
               
               
              <Menu.Item>
                {({ active }) => (
                  
                  <button onClick={logout} className={`${ active ? 'bg-gray-300 text-white' : 'text-gray-700' } transition-colors duration-300 group gap-2 flex w-full items-center justify-center rounded-md px-2 py-2 text-sm`}>
                    <PowerIcon className='w-8 group-hover:text-red-600' />
                    Déconnexion
                  </button>
                )}
              </Menu.Item>
               
            </div>
             
             
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

 
 
 

 