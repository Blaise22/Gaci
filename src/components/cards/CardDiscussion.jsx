import React, { useContext } from 'react'
import {  QuestionMarkCircleIcon,ChatBubbleBottomCenterIcon,TrashIcon} from '@heroicons/react/24/outline'
import { UserCircleIcon} from '@heroicons/react/24/solid'
import { AuthContext } from '../../context/AuthContext'
import AxiosInstance from '../../api/axios'
import useFetch from '../../hooks/useFetch'
import getPeriode from '../../helpers/utils/getPeriode'
import DeletModale from '../modals/DeletModale'
const CardDiscussion = ({message,date,owner,id,refresh}) => {
    const {user}=useContext(AuthContext)
    const {data,loading}=useFetch('auth/users/'+owner)
     
  return (
    <div className="block w-auto mt-1 border-b pb-3 text-sm">
                <div className="flex group justify-between">
                    <div className="flex items-center gap-2">
                        {
                            data?.profil?
                            <img src={data?.profil.pic} className='w-10 h-10 object-cover bg-gray-200 rounded-full'  alt="" />
                            : <UserCircleIcon className='w-10 text-gray-600' />
 
                        }
                        <span className="text-secondary-2 font-bold capitalize">{ data?.first_name} {data?.last_name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                         
                        <div className="flex gap-2 items-center z-0 cursor-pointer w-10 justify-center rounded-md"> 
                            {
                                owner && user &&
                                <div  className={owner==user?.id?"block":"hidden"} >
                                    <DeletModale endPoint={`courses/video-comments/${id}`} refresh={refresh} />
                                </div> 
                            }
                        </div>
                         
                    </div> 
                </div>
                <div className={owner==user?.id?"text-violet-600":"text-gray-600"}>
                      
                        {message}
                                        
                </div>
                 
                <div className="flex mt-2 items-center justify-end gap-2">
                     
                    <span className="text-gray-700 text-xs">Publié { getPeriode(date) }</span> 
                </div>
            </div>
  )
}

export default CardDiscussion