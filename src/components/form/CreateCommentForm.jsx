import React, { useEffect, useState } from 'react'
import {XMarkIcon,ChevronUpIcon} from '@heroicons/react/20/solid'
import {BookOpenIcon,ChatBubbleLeftIcon} from '@heroicons/react/24/outline'
import useCreate from '../../hooks/useCreate'
import {useNavigate} from 'react-router-dom'
import Button from './Button'
import Input from './Input'
import PopUp from './PopUp'
const CreateCommentForm = ({postId,refresh}) => {
    const navigate=useNavigate()
    const [isExtended,setIsextended]=useState(false)
    const [formError,setFormError]=useState(null)
    const [response,setResponse]=useState(null)
    const {create,res,load, error, success}=useCreate()
    useEffect(() => {
       success && refresh()
       success && 
        setTimeout(() => {
            setIsextended(false)
        }, 1000);
        success && setResponse(null)
    }, [success])
    
     
      const submit=()=>{
        const formData={
          message:response, 
          response:'', 
          post_id:postId,
          status:true
        }
        if(response){
          create(`pub/coment-list-create/`,formData)
          setResponse(null)
        }else{
          setFormError('Veuillez decrire votre commentaire')
          setTimeout(() => {
              setFormError(null)
            }, 4000);
        }
        
      }
    return (
        <>
        {!isExtended && 
        <div className=" fixed bottom-4 right-4 xl:right-8  md:pl-64 lg:pr-44 xl:pr-80  md:pr-12 pt-16 ">
          <button onClick={()=>{setIsextended(true)}} className=' flex font-bold   p-2 bg-blue-600 text-lg group text-white rounded-lg gap-2 items-center'>
              <ChatBubbleLeftIcon  className='w-7' />
              Commenter
          </button> 
        </div>
        }
        <div className={`fixed w-full z-40   md:pl-64  md:pr-12 pt-16 lg:pr-16  p-4      bottom-0 right-0 left-0 ${!isExtended?'bottom-[-200%] tran ':' tran bottom-0'} `}>
        <div className="grid md:px-4 lg:pl-12 lg:pr-32 xl:pr-72">
            <div className=" rounded-lg border h-full w-full  bg-white">
                <div className="flex  items-center p-1 justify-between text-md text-gray-700">
                    <span className="px-1 font-bold">Votre commentaire</span>
                    {isExtended && <XMarkIcon onClick={()=>{setIsextended(false)}} className='icon-danger' />}
                    
                </div>
            
            <div className='flex flex-col p-2'>
            <PopUp
                load={load}
                errorMessage={error?'Cette reponse a deja été posté':null}
                successMessage={success?'La reponse a été posté':null}
            />
            <div className="text-red-600 text-sm">{formError}</div>
            <Input 
                type={'textarea'}
                placeholder={'Entrez votre commentaire ici ...'}
                name={'response'}
                onChange={setResponse}
                value={response}

            />
             


             <div className="flex  items-center justify-end">
         
        <Button
        className={'btn-primary mt-2 font-bold'}
        click={submit}
        icon={null}
        load={load}
        title={'Commenter'}
      />

      </div>
      </div>
      </div>
            </div>
            </div>
         
        </>
    )
}

export default CreateCommentForm