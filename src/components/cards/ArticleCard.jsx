
import React from 'react' 
import Thumbail from '../../assets/img.jpg' 
import getPeriode from '../../helpers/utils/getPeriode'
import {QuestionMarkCircleIcon,EllipsisHorizontalIcon} from '@heroicons/react/20/solid'
import DeletModale from '../modals/DeletModale'
import useUser from '../../hooks/useUser'
import { Link } from 'react-router-dom'
const ArticleCard = ({date,image,synthesis,title,user:names,userPk,pk}) => {
  const user=useUser()
  return (
    <Link to={'/publication/'+pk}>
        <div className="w-full flex shadow-md rounded-lg flex-col">
            {
              image ?
              <img src={image} className=' w-auto rounded-t-lg' alt="logo" />:
              <img src={Thumbail} className=' w-auto rounded-t-lg' alt="logo" />

            }
            <div className="flex px-2 pb-2 flex-col">
                <div className="flex items-center justify-between">
                  <h1 className='text-gray-700 text-lg font-semibold'>Publié par {names}</h1>
                  <div className="relative group py-2">
                          <div className="flex p-2 rounded-lg hover:bg-gray-100 items-center gap-1">
                          <EllipsisHorizontalIcon className='w-5 text-gray-600' />
                            
                          </div>
                          <div className="absolute hidden group-hover:block top-[80%]  bg-white text-left shadow-md p-4 rounded-lg right-0 w-44">
                              {
                                user?.user.pk==userPk &&
                                <DeletModale 
                                  buttonContent={ <span className='text-red-600 cursor-pointer block w-full p-2 hover:bg-red-100 rounded-lg'>Supprimer</span> }
                                  redirectUrl={null}
                                  title={'Supprimer une publication'}
                                  url={`/forum/question-delete/${pk}/`}

                                />
                              }
                          </div>
                        </div>
                </div>
                <h1 className='text-blue-600 text-lg font-semibold'>{title}</h1>
                <h1 className='text-sm'>{synthesis}</h1>
                <span className="text-xs block flex justify-end">publié {getPeriode(date)}</span>
            </div>

        </div>
    </Link>
  )
}

export default ArticleCard