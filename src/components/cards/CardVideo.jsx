import React from 'react'
import Thumbail from '../../assets/img.jpg'
import useUser from '../../hooks/useUser'
import DeletModale from '../modals/DeletModale'
import getPeriode from '../../helpers/utils/getPeriode'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
const CardVideo = ({url,date,pk,user:owner,wording,refresh,thumbnail}) => {
    const user=useUser()
  return (
    <>
        <div className="w-full h-auto shadow-md rounded-lg">
            {
              url ?
              <Link to={url}>
                     <ReactPlayer 
                      url={url}
                       
                      
                     />
               
                </Link>:
              null

            }
            <div className="p-4">
                <span>{wording}</span>
                <div className={`flex mt-2 pb-2  ${user?.user.pk==owner?.pk?'justify-between':'justify-end'}`}>
                    {
                        user?.user.pk==owner?.pk ?
                            <DeletModale  
                            buttonContent={<span className='text-red-600 cursor-pointer p-1 w-24 rounded-lg bg-red-100'>Supprimer</span>} url={`/pub/post-images-delete/${pk}`} refresh={refresh} title={'Supprimer un document'} />
                        :null
                    }
                        <h1 className='text-xs text-gray-600'>Publié {getPeriode(date)}</h1>
                    </div>
            </div>
        </div>
    </>
  )
}

export default CardVideo