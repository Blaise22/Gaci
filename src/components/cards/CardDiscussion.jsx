import React, { useContext, useState } from 'react'
import {  QuestionMarkCircleIcon,ChatBubbleBottomCenterIcon,TrashIcon} from '@heroicons/react/24/outline'
import { UserCircleIcon} from '@heroicons/react/24/solid' 
import useUser from '../../hooks/useUser'
import DeleteItem from '../containers/DeleteItem'
import useFetch from '../../hooks/useFetch'
import sliceString from '../../helpers/utils/sliceString'
import { Link } from 'react-router-dom'
import getPeriode from '../../helpers/utils/getPeriode'
const CardDiscussion = ({message,date,owner,pk,question,refresh,doc,image,status}) => {
     const user=useUser()
     const {data:profil}=useFetch(`auth/profile-user-id-detail/${owner?.pk}/`)  
  return (
    <div className="block shadow-md p-2 md:p-4 rounded-lg md:text-sm w-auto mt-1 border-b pb-3 text-xs">
                <div className="flex group ">
                    <div className="flex w-full items-center gap-2">
                        {
                            profil ? 
                            <div className='w-10  h-10'>
                                <img src={profil?.picture} className='w-10 h-10 object-cover border rounded-full' alt="" />
                            </div>
                            :
                            <UserCircleIcon className='w-10 text-gray-600' />
                        }
 
                        
                        <span className="text-secondary-2 font-bold capitalize">{owner?.names} </span>
                    </div>
                     
                </div>
                <div className={"text-gray-700 p-1 border mt-1 rounded-lg"}>
                    {message}    
                    <div className="flex justify-between mt-1 gap-2">
                        {
                            doc &&
                            <button className='p-1 rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200'>Lire le document</button>
                        }
                        {
                            image &&
                            <button className='p-1 rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200'>Voir l'image</button>
                        }
                    </div>                  
                </div>
                 <div className="w-full flex flex-col mt-1 gap-1">
                    <span className='text-blue-600'>Question</span>
                    <span className='text-gray-500'>
                    {sliceString(question?.wording,150)}<br/><br/>
                    <Link className='p-1 bg-gray-100  rounded-lg text-gray-700 hover:bg-gray-200' to={'/forum/question/'+question?.pk+'/reponses/'}>Afficher la question</Link>
                    </span>
                    
                 </div>
                <div className="flex mt-2 items-center justify-between gap-2">
                    <div className=" gap-2 items-center z-0 cursor-pointer w-10 justify-center rounded-md"> 
                             { user?.user?.pk==owner?.pk ? 
                                <DeleteItem url={`/forum/reply-delete/${pk}/`} refresh={refresh} />
                             
                             :'' }
                             
                     </div>
                    <span className="text-gray-700 text-xs">Publié il y'a {getPeriode(date)}</span> 
                </div>
            </div>
  )
}

export default CardDiscussion