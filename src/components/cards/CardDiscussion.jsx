import React, { useContext, useState } from 'react'
import {  QuestionMarkCircleIcon,ChatBubbleBottomCenterIcon,TrashIcon} from '@heroicons/react/24/outline'
import { UserCircleIcon} from '@heroicons/react/24/solid' 
import useUser from '../../hooks/useUser'
import DeleteItem from '../containers/DeleteItem'
const CardDiscussion = ({message,date,owner,pk,question,refresh,doc,image,status}) => {
     const user=useUser()
     
     
  return (
    <div className="block md:text-sm w-auto mt-1 border-b pb-3 text-xs">
                <div className="flex group ">
                    <div className="flex w-full items-center gap-2">
                         <UserCircleIcon className='w-10 text-gray-600' />
 
                        
                        <span className="text-secondary-2 font-bold capitalize">{owner?.names} </span>
                    </div>
                     
                </div>
                <div className={"text-gray-600"}>
                      {message}
                                        
                </div>
                 
                <div className="flex mt-2 items-center justify-between gap-2">
                    <div className=" gap-2 items-center z-0 cursor-pointer w-10 justify-center rounded-md"> 
                             { user?.user?.pk==owner?.pk ? 
                                <DeleteItem url={`/forum/reply-delete/${pk}/`} refresh={refresh} />
                             
                             :'' }
                             
                     </div>
                    <span className="text-gray-700 text-xs">Publié il ya deux min</span> 
                </div>
            </div>
  )
}

export default CardDiscussion