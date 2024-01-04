

import React, { useState } from 'react'
import Header from '../../components/partials/Header' 
import MainCard from '../../components/cards/MainCard'
import {QuestionMarkCircleIcon,PlusIcon,UserCircleIcon,ChevronUpIcon,ChevronDownIcon,BookmarkIcon} from '@heroicons/react/20/solid' 
import {DocumentIcon} from '@heroicons/react/24/outline' 
import Spinner from '../../components/extra/Spinner' 
import PubSidebar from '../../components/partials/PubSidebar' 
import useFetch from '../../hooks/useFetch'
import {useParams,useNavigate, Link} from 'react-router-dom'
import useFetchPaginate from '../../hooks/useFetchPaginate'
import NavigationPageCard from '../../components/cards/NavigationPageCard'
import DataInfo from '../../components/extra/DataInfo'
import CardDiscussion from '../../components/cards/CardDiscussion'
import CreateCommentForm from '../../components/form/CreateCommentForm' 
import useUser from '../../hooks/useUser'
import Thumbail from '../../assets/img.jpg'
import getPeriode from '../../helpers/utils/getPeriode'
import DeletModale from '../../components/modals/DeletModale'
import PubOptionsLinks from '../../components/partials/PubOptionsLinks'
import DocumentModal from '../../components/modals/DocumentModal'
import CardDocument from '../../components/cards/CardDocument'
import ImageModal from '../../components/modals/ImageModal'
import CardPicture from '../../components/cards/CardPicture'
const PostsPhotos = () => {
    const {id}=useParams()
    const navigate=useNavigate()
    const [showDetails,setShowDetails]=useState(false)
    const user=useUser()
    const isStaff=user?.user?.staff; 
    const { data,load,error}=useFetch(!isStaff?`/pub/post-no-staff-detail/${id}`:`/pub/post-no-staff-detail/${id}`)
    const { data:pictures,load:loadPictures,count,prev,next, error:picturesErrors,getData,nextPage,prevPage}=useFetchPaginate(`/pub/post-images-post-list/${id}/`)
    const {data:profil}=useFetch(`auth/profile-user-id-detail/${data?.user?.pk}/`) 
    console.log(pictures);
    return (
    <>
        <Header/>
        <PubSidebar />
        <div className='px-4 text-xs md:text-sm md:pl-64  md:pr-12 pt-16 lg:pr-16 w-full'>
          <div className="grid md:px-4 lg:pl-12 lg:pr-32 xl:pr-72  ">
            
               
             <MainCard
                className={'bg-white rounded-lg mt-10  w-full md:w-96 lg:w-[80%]'}
                mainIcon={<DocumentIcon className='w-8 text-gray-700' />}
                mainTitle={'Photos de la publication'}
                sideHeaderContent={
                    user?.user.pk==data?.user.pk ?
                    <ImageModal
                        onCreate={()=>{getData(`/pub/post-images-post-list/${id}/`)}} 
                        postId={id}
                        modalTitle={'Photo'}
                        mainButton={
                            <button className='flex gap-0 text-md bg-gray-200 p-2 font-bold hover:bg-gray-300 active:shadow tran rounded-lg group items-center'>
                            <PlusIcon className='w-6 text-gray-700' />
                            Créer 
                            </button>
                        } 
                         
                        >
                              
                        </ImageModal>:null
                        }
             >
                <PubOptionsLinks postId={id} />
              <div className="flex gap-4 flex-col text-gray-700">
                {
                    // for only staff (post details)
                    data && 
                    <div className="block">
                        <span className="text-lg font-bold ">{data?.title}</span>
                        {
                        data?.image ?
                        <Link to={data?.image}>
                            <img src={data?.image} className=' w-full h-56 object-cover rounded-t-lg' alt="logo" />
                        </Link>:
                        null

                        }
                        <div className="flex items-center justify-between mt-2">
                        <div className="flex w-full items-center gap-2">
                        {
                            profil ? 
                            <div className='w-10  h-10'>
                                <img src={profil?.picture} className='w-10 h-10 object-cover border rounded-full' alt="" />
                            </div>
                            :
                            <UserCircleIcon className='w-10 text-gray-600' />
                        }
 
                        
                        <span className="text-secondary-2 font-bold capitalize">{data?.user?.names} </span>
                    </div>
                            <span className="block w-full flex justify-end">
                                Publié { getPeriode(data?.date_add) }
                            </span>
                        </div>
                        <div className="flex flex-col mt-2">
                            <div onClick={()=>{setShowDetails(!showDetails)}} className="flex hover:rounded-lg cursor-pointer items-center p-2 tran hover:bg-gray-200 active:bg-gray-200 gap-2 w-full border-b">
                                {
                                    !showDetails ? <ChevronDownIcon className='w-7 text-gray-600' /> :<ChevronUpIcon className='w-7 text-gray-600' />
                                }
                                {
                                    !showDetails ? "Afficher les details" : "Cacher les details" 
                                } 
                            </div>
                            {
                                showDetails &&
                                <div className="mt-4 flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <span className='text-md font-bold text-blue-600 flex gap-2 items-center'> 
                                            <BookmarkIcon className='w-4' /> 
                                            Synthèse
                                        </span> 
                                        <p>{data?.synthesis}</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className='text-md font-bold text-blue-600 flex gap-2 items-center'> 
                                            <BookmarkIcon className='w-4' /> 
                                            Contenu 
                                        </span> 
                                        <p>{data?.text}</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className='text-md font-bold text-blue-600 flex gap-2 items-center'> 
                                            <BookmarkIcon className='w-4' /> 
                                            Conclusion 
                                        </span> 
                                        <p>{data?.conclusion}</p>
                                    </div>
                                     
                                    
                                </div>
                            }

                        </div>

                    </div>
                }

                 
                <Spinner 
                  load={load} 
                  className='w-14 h-14 lg:w-20 lg:w-24' 
                />
                <span className="text-lg font-bold block">Photo {!loadPictures &&`- ${count}`}</span>
                <div className="mt-2 flex flex-col gap-4">
                    {
                        pictures?.map((item,index)=>(
                             <CardPicture 
                                key={index}
                                image={item.images}
                                date={item.date_add}
                                pk={item.pk}
                                user={item.user}
                                wording={item.wording}
                                refresh={()=>{getData(`/pub/post-images-post-list/${id}/`)}}

                             
                             />
                        ))
                    }
                </div>
                <DataInfo 
                    errorStatus={picturesErrors}
                    len={pictures?.length} 
                    load={loadPictures}
                />
                <NavigationPageCard
                  load={loadPictures}
                  count={count} 
                  next={next}
                  prev={prev}
                  nextPage={nextPage}
                  prevPage={prevPage}
                />
                 
                 

              </div> 
             </MainCard>
                 
          </div>
        </div>
    </>
  )
}

export default PostsPhotos