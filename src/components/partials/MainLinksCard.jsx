
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import {Bars3Icon} from '@heroicons/react/20/solid'
import { BookOpenIcon, ChatBubbleBottomCenterIcon, InboxIcon } from '@heroicons/react/24/outline'
import {useNavigate} from 'react-router-dom'
 
export default function MainLinksCard() { 
      const nav=useNavigate()
    return (
    <div className=" z-50 right-4 top-0  text-right">
      <Menu as="div" className="relative z-50 inline-block text-left">
        <div>
          <Menu.Button className="inline-flex  mt-2 w-full justify-center   bg-opacity-20  items-center text-sm font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <div className="flex items-center  w-full rounded-md  group">
            <div className="items-center  flex">
               
                <Bars3Icon className='icon-primary'/>   
              

              
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
            <div className="px-1 py-1  w-full ">
              <Menu.Item>
              {({ active }) => (
                  
                  <button className='w-full group rounded-lg flex py-3 hover:bg-blue-600 tran hover:text-white p-1 items-center gap-2' onClick={()=>{nav('/publications')}} >
                      <InboxIcon className='w-6 group-hover:text-white text-gray-600 hover:scale-110 tran active:text-blue-600 p-0'/>
                      <span className='group-hover:text-link text-secondary group-hover:text-white '>
                        Publications
                      </span>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
              {({ active }) => (
                  
                  <button className='w-full group rounded-lg flex py-3 hover:bg-blue-600 tran hover:text-white p-1 items-center gap-2' onClick={()=>{nav('/forum')}} >
                      <ChatBubbleBottomCenterIcon className='w-6 group-hover:text-white text-gray-600 hover:scale-110 tran active:text-blue-600 p-0'/>
                      <span className='group-hover:text-link text-secondary group-hover:text-white '>
                         Forum
                      </span>
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

 
 
 

 