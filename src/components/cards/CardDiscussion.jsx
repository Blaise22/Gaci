import React, { useContext } from 'react'
import {  QuestionMarkCircleIcon,ChatBubbleBottomCenterIcon,TrashIcon} from '@heroicons/react/24/outline'
import { UserCircleIcon} from '@heroicons/react/24/solid' 
const CardDiscussion = ({message,date,owner,pk,question,refresh,doc,image,status}) => {
     
 
     
  return (
    <div className="block md:text-sm w-auto mt-1 border-b pb-3 text-xs">
                <div className="flex group justify-between">
                    <div className="flex items-center gap-2">
                         <UserCircleIcon className='w-10 text-gray-600' />
 
                        
                        <span className="text-secondary-2 font-bold capitalize">Blaise nhg</span>
                    </div>
                    <div className="flex items-center gap-2">
                         
                        <div className="flex gap-2 items-center z-0 cursor-pointer w-10 justify-center rounded-md"> 
                             Delete
                        </div>
                         
                    </div> 
                </div>
                <div className={"text-gray-600"}>
                      
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ab harum modi tempore illum aliquid officia quod odit. Neque provident vitae eius accusantium tempore incidunt architecto harum laboriosam ex delectus!
                                        
                </div>
                 
                <div className="flex mt-2 items-center justify-end gap-2">
                     
                    <span className="text-gray-700 text-xs">Publié il ya deux min</span> 
                </div>
            </div>
  )
}

export default CardDiscussion