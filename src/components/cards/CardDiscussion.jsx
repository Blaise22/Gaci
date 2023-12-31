import React, { useContext, useState } from 'react'
import {  QuestionMarkCircleIcon,ChatBubbleBottomCenterIcon,TrashIcon} from '@heroicons/react/24/outline'
import { UserCircleIcon} from '@heroicons/react/24/solid' 
import useUser from '../../hooks/useUser'
import DeleteItem from '../containers/DeleteItem'
import useFetch from '../../hooks/useFetch'
import sliceString from '../../helpers/utils/sliceString'
import { Link,useNavigate } from 'react-router-dom'
import getPeriode from '../../helpers/utils/getPeriode'
import DeletModale from '../modals/DeletModale'
const CardDiscussion = ({message,date,owner,pk,question,refresh,doc,image,status,isResPage,deleteUrl}) => {
     const user=useUser()
     const {data:profil}=useFetch(`auth/profile-user-id-detail/${owner?.pk}/`)  
     const nav=useNavigate()
  return (
    <div className="block shadow-md p-2 md:p-4 rounded-lg md:text-sm w-auto mt-1 border-b pb-3 text-xs">
                <div className="flex group ">
                    {
                        user?.user?.pk!=owner?.pk ?
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
                    </div>:<div className="flex w-full justify-end items-center gap-2">
                        <span className="text-secondary-2 font-bold capitalize">Moi</span>
                        {
                            profil ? 
                            <div className='w-10  h-10'>
                                <img src={profil?.picture} className='w-10 h-10 object-cover border rounded-full' alt="" />
                            </div>
                            :
                            <UserCircleIcon className='w-10 text-gray-600' />
                        }
 
                        
                        
                    </div>
                    }
                     
                </div>
                <div className={"text-gray-700 flex flex-col gap-1  border-b  "}>
                    <div className={`block w-auto   px-2 rounded-lg ${user?.user?.pk==owner?.pk ?' text-blue-600':' text-gray-600'}`}>
                        {message} 
                    </div> 
                    {
                    image ?
                    <Link to={image}>
                        <img src={image} className=' w-auto h-28 object-cover shadow-md border rounded-lg' alt="logo" />
                    </Link>
                    :
                    null

                    }  
                    <div className="flex justify-between mt-1 gap-2">
                        {
                            doc &&
                            <button className='p-1 rounded-md text-blue-600  hover:bg-blue-200'>Lire le document</button>
                        }
                         
                    </div>                  
                </div>
                {
                    question &&
                    !isResPage &&
                    <div className="w-full flex flex-col mt-1 gap-1">
                        <span className='text-blue-600'>Question</span>
                        <span className='text-gray-500'>
                        {sliceString(question?.wording,150)}<br/><br/>
                        <Link className='p-1 bg-gray-100  rounded-lg text-gray-700 hover:bg-gray-200' to={'/forum/question/'+question?.pk+'/reponses/'}>Afficher la question</Link>
                        </span>
                        
                    </div>
                }
                <div className="flex mt-2 items-center justify-between gap-2">
                    <div className=" gap-2 items-center z-0 cursor-pointer  justify-center rounded-md"> 
                             { user?.user?.pk==owner?.pk ? 
                                <DeletModale 
                                  buttonContent={ <span className='text-red-600 cursor-pointer block w-full p-3 hover:bg-red-100 rounded-md'>Retirer</span> }
                                   
                                  title={'Supprimer'}
                                  url={deleteUrl}
                                  refresh={refresh}
                                  
                                />  
                             :'' }
                             
                     </div>
                    <span className="text-gray-700 text-xs">Publié {getPeriode(date)}</span> 
                </div>
            </div>
  )
}

export default CardDiscussion