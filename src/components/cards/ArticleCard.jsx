
import React, { useEffect } from 'react' 
import Thumbail from '../../assets/img.jpg' 
import getPeriode from '../../helpers/utils/getPeriode'
import {QuestionMarkCircleIcon,EllipsisHorizontalIcon} from '@heroicons/react/20/solid'
import {ChatBubbleLeftIcon,EyeIcon} from '@heroicons/react/24/outline'
import DeletModale from '../modals/DeletModale'
import useUser from '../../hooks/useUser'
import { Link,useNavigate } from 'react-router-dom'
import useCreate from '../../hooks/useCreate'
import PopUp from '../form/PopUp'
const ArticleCard = ({date,image,synthesis,title,user:names,userPk,pk,refresh}) => {
  const user=useUser() 
  const navigate=useNavigate()
  const {create,res,load, error,success:favoritesCreated }=useCreate()
  useEffect(() => {
    favoritesCreated && 
      setTimeout(() => {
        navigate('/favoris')
      }, 1500);
  }, [favoritesCreated])
  
  const addToFavorites=(pk)=>{
    const dataFavorite={
      post_id:pk,
      status:true
    }
    create(`/pub/favorite-list-create/`,dataFavorite)
  }
  return (
   <>
        <PopUp
          successMessage={favoritesCreated?'Ajouts aux favoris':null} 
        
        />
        <div className="w-full flex shadow-md rounded-lg flex-col">
          
            
             
            <div className="flex  pb-4 flex-col">
                <div className="flex items-center pt-4 px-4 justify-between">
                  <h1 className='text-gray-700 block text-md font-semibold'>Publié par {names}</h1>
                  <div className="relative z-0 group py-2">
                          <div className="flex p-2 rounded-lg hover:bg-gray-100 items-center gap-1">
                          <EllipsisHorizontalIcon className='w-5 text-gray-600' />
                            
                          </div>
                          <div className="absolute hidden group-hover:block top-[80%]  bg-white text-left shadow-md p-4 rounded-lg right-0 w-56">
                          <span onClick={()=>{addToFavorites(pk)}} className='text-gray-600 cursor-pointer block w-full text-xs font-bold p-4 hover:bg-gray-100 rounded-md'>Ajouter aux favrories</span>
                            {
                              user?.user?.pk==userPk &&
                                <DeletModale 
                                  buttonContent={ <span className='text-red-600 text-xs font-bold cursor-pointer block w-full p-4 hover:bg-red-100 rounded-md'>Supprimer</span> }
                                  redirectUrl={null}
                                  title={'Supprimer une publication'}
                                  url={`/pub/post-delete/${pk}/`}
                                  refresh={refresh}

                                />
                              }
                              
                          </div>
                        </div>
                </div>
                  <div className="px-4">
                    <h1 className='text-blue-600 text-lg font-semibold'>{title}</h1>
                    <h1 className='text-sm text-gray-600 pb-2'>{synthesis}</h1>
                  </div>
                  {
                    image ?
                    <Link to={image}>
                      <img src={image} className=' w-full h-56 object-cover ' alt="logo" />
                    </Link>
                    
                    :
                    null

                  }
                  <div className="flex w-full items-center mt-2 px-4 justify-between">
                    <div className="flex gap-2 items-center"> 
                        <Link to={'/publication/'+pk} className='hover:bg-blue-100 rounded-lg tran hover:text-blue-600 p-1.5 text-gray-700 group flex items-center gap-2'>
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

export default ArticleCard