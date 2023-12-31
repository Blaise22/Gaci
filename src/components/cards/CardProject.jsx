import Thumbail from '../../assets/img.jpg' 
import getPeriode from '../../helpers/utils/getPeriode'
import {QuestionMarkCircleIcon,EllipsisHorizontalIcon} from '@heroicons/react/20/solid'
import {ChatBubbleLeftIcon,EyeIcon} from '@heroicons/react/24/outline'
import DeletModale from '../modals/DeletModale'
import useUser from '../../hooks/useUser'
import { Link,useNavigate } from 'react-router-dom'
import useCreate from '../../hooks/useCreate'
const CardProject = ({date,description,designation,dev,doc,image,pu,pk,pub,user:owner,refresh}) => {
    const user=useUser()
  return (
    <>
        <div className="w-full flex shadow-md rounded-lg flex-col">
          
          {
            image ?
            <img src={image} className=' w-full h-56 object-cover rounded-t-lg' alt="logo" />:
            null

          }
           
          <div className="flex px-4 pb-4 flex-col">
              <div className="flex items-center pt-4 justify-between">
                <div className="flex flex-col gap-2">
                    <h1 className='text-gray-700 block py-2 text-md font-semibold'>Publié par {owner?.names}</h1> 
                </div>
                         
                          {
                            user?.user?.pk==owner?.pk &&
                            <div className="relative z-0 group py-2">
                            <div className="flex p-2 rounded-lg hover:bg-gray-100 items-center gap-1">
                            <EllipsisHorizontalIcon className='w-5 text-gray-600' />
                            
                            </div>
                            <div className="absolute hidden group-hover:block top-[80%]  bg-white text-left shadow-md p-4 rounded-lg right-0 w-44">
                                <DeletModale 
                                    buttonContent={ <span className='text-red-600 text-xs font-bold cursor-pointer block w-full p-3 hover:bg-red-100 rounded-lg'>Supprimer</span> }
                                    redirectUrl={null}
                                    title={'Supprimer un projet'}
                                    url={`/pub/project-delete/${pk}/`}
                                    refresh={refresh}

                                />
                            </div>
                                </div>
                                }
                                
                            </div>
              <h1 className='text-gray-700 block pt-4 pb-2 block border-t text-md font-semibold flex flex-col'>Développeur <span className='text-sm font-normal'>{dev}</span></h1>
                <h1 className='text-blue-600 text-lg font-semibold '>{designation}</h1> 
                <h1 className='text-gray-700 text-md flex flex-col font-semibold blck mt-2'>Prix unitaire<span className='text-sm font-normal'>{pu}</span></h1> 
                <div className="flex w-full items-center mt-2 justify-between">
                  <div className="flex gap-2 items-center"> 
                      <Link to={'/projet/'+pk} className='hover:bg-blue-100 rounded-lg tran hover:text-blue-600 p-1.5 text-gray-700 group flex items-center gap-2'>
                          <EyeIcon className='w-6' />
                          <span>Voir plus</span>
                      </Link>
                    
                  </div>
                  <span className="text-xs block flex justify-end">Publié {getPeriode(date)}</span>
                </div>
          </div>

      </div>
    </>
  )
}

export default CardProject