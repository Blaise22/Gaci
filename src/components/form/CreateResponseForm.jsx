import React, { useState } from 'react'
import {XMarkIcon,ChevronUpIcon} from '@heroicons/react/20/solid'
import useCreate from '../../hooks/useCreate'
import {useNavigate} from 'react-router-dom'
import Button from './Button'
import Input from './Input'
import PopUp from './PopUp'
const CreateResponseForm = ({questionId}) => {
    const navigate=useNavigate()
    const [isExtended,setIsextended]=useState(false)
    const [formError,setFormError]=useState(null)
    const [response,setResponse]=useState(null)
    const [image,setImage]=useState(null)
    const [doc,setDoc]=useState(null)
    const {create,res,load, error, success}=useCreate()
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onload = () => {
            setImage(reader.result);
        };
    
        reader.readAsDataURL(file);
      };
      const handleDocChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onload = () => {
            setDoc(reader.result);
        };
    
        reader.readAsDataURL(file);
      }; 
      const submit=()=>{
        const formData={
          wording:response,
          dte:'2023-12-05',
          image64:image, 
          doc64:doc,
          question_id:questionId,
          status:true
        }
        if(quest){
          create(`forum/reply-list-create/`,formData)
        }else{
          setFormError('Veuillez decrire votre reponse')
          setTimeout(() => {
            setFormError(null)
          }, 4000);
        }
      }
    return (
        <>
        {!isExtended && 
        <button onClick={()=>{setIsextended(true)}} className=' fixed bottom-4 right-4 flex font-bold   p-2 bg-blue-600 text-lg group text-white rounded-lg gap-2 items-center'>
            <ChevronUpIcon  className='w-7' />
            Repondre
        </button> 
        }
        <div className={`fixed w-full z-50  md:px-14 lg:px-24 px-6   bottom-0 right-0 left-0 ${!isExtended?'bottom-[-200%] tran ':' tran bottom-0'} `}>
            <div className="bg-white rounded-t-lg h-full w-full border-t border-l border-r">
                <div className="flex  items-center p-1 justify-between text-md text-gray-700">
                    <span className="px-1 font-bold">Repondre à cette question</span>
                    {isExtended && <XMarkIcon onClick={()=>{setIsextended(false)}} className='icon-danger' />}
                    
                </div>
            
            <div className='flex flex-col p-2'>
            <PopUp
                load={load}
                errorMessage={error?'Cette question a deja été posté':null}
                successMessage={success?'La question a été posté':null}
            />
            <div className="text-red-600 text-sm">{formError}</div>
            <Input 
                type={'textarea'}
                placeholder={'Entrez votre question ici ...'}
                name={'quest'}
                onChange={setResponse}
                value={response}

            />
            <div className="flex flex-col w-full">
                <label htmlFor="" className='text-xs'>Image</label>
                <input onChange={handleImageChange}
                    type="file"
                    name='picture'
                    className="block w-full text-sm text-blue-500
                    file:mr-4 file:py-2 file:px-4 file:rounded-md
                        file:border-0 file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100"
                />
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="" className='text-xs'>Document</label>
                <input onChange={handleDocChange}
                    type="file"
                    
                    className="block w-full text-sm text-blue-500
                    file:mr-4 file:py-2 file:px-4 file:rounded-md
                        file:border-0 file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100"
                />
            </div>


            <div className="flex mt-2 justify-between">
                 <div className="flex gap-2">

                    </div>
                <Button
                className={'btn-primary '}
                click={submit}
                icon={null}
                load={load}
                title={'Publier'}
            />

            </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default CreateResponseForm