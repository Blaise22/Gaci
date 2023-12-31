import Thumbail from '../../assets/img.jpg' 
import getPeriode from '../../helpers/utils/getPeriode'
import {QuestionMarkCircleIcon,EllipsisHorizontalIcon,HandThumbUpIcon} from '@heroicons/react/20/solid'
import {ChatBubbleLeftIcon,EyeIcon} from '@heroicons/react/24/outline'
import DeletModale from '../modals/DeletModale'
import useUser from '../../hooks/useUser'
import { Link,useNavigate } from 'react-router-dom'
import useCreate from '../../hooks/useCreate'
import useFetch from '../../hooks/useFetch'
import useFetchPaginate from '../../hooks/useFetchPaginate'
import abbreviateNumber from '../../helpers/utils/abbreviateNumber'
import useDelete from '../../hooks/useDelete'
const CardProject = ({date,description,designation,dev,doc,image,pu,pk,pub,user:owner,refresh}) => {
    const {data:likes,load,error,getData:getLikes}=useFetchPaginate(`/pub/like-project-project-list/${pk}`)
    const {create:likeProject,res,success,error:errorCreateLik}=useCreate()
    const {del:disLikeProject, load:deleteLoading, error:deleteError, success:deleteSucess}=useDelete()
    const user=useUser()
    
    
    const handleLike=(pk)=>{
        if(likes.filter(item=> item.user.pk==user?.user.pk)?.length>0){
            // delete
            const likeId=likes.filter(item=> item.user.pk==user?.user.pk)[0]?.pk;
            disLikeProject(`/pub/like-project-delete/${likeId}/`);
            getLikes(`/pub/like-project-project-list/${pk}`)
        }else{
            //create
            const formData={
                project_id:!load ? pk : null,
                status:true
            }
            likeProject('/pub/like-project-list-create/',formData)
            getLikes(`/pub/like-project-project-list/${pk}`)
        }
        
    }
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
              <h1 className='text-gray-700 block pt-4 px-1.5 pb-2 block border-t text-md font-semibold flex flex-col'>Développeur <span className='text-sm font-normal'>{dev}</span></h1>
                <h1 className='text-blue-600 px-1.5 text-lg font-semibold '>{designation}</h1> 
                <h1 className='text-gray-700 px-1.5 text-md flex flex-col font-semibold blck mt-2'>Prix unitaire<span className='text-sm font-normal'>{pu}</span></h1> 
                      
                      <div className={`mt-2 rounded-full inline  p-1.5 flex items-center gap-2 ${likes.filter(item=> item.user.pk==user?.user.pk)?.length>0?'text-blue-600 ':'text-gray-600 '} `}>
                          <HandThumbUpIcon onClick={()=>{handleLike(pk)}} className='w-8 p-0.5 active:border rounded-full tran cursor-pointer' />
                          {
                              !load &&
                              <span>{abbreviateNumber(likes?.length)} j'aimes</span>
                          }
                      </div>
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