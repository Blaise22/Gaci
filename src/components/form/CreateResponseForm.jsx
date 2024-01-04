import React, { useEffect, useState } from 'react'
import {XMarkIcon,ChevronUpIcon} from '@heroicons/react/20/solid'
import {BookOpenIcon,CameraIcon} from '@heroicons/react/24/outline'
import useCreate from '../../hooks/useCreate'
import {useNavigate} from 'react-router-dom'
import Button from './Button'
import Input from './Input'
import PopUp from './PopUp'
const CreateResponseForm = ({questionId,refresh}) => {
    const navigate=useNavigate()
    const [isExtended,setIsextended]=useState(false)
    const [formError,setFormError]=useState(null)
    const [response,setResponse]=useState(null)
    const [image,setImage]=useState(null)
    const [doc,setDoc]=useState(null)
    const {create,res,load, error, success}=useCreate()
    useEffect(() => {
       success && refresh()
       success && 
        setTimeout(() => {
            setIsextended(false)
        }, 1000);
    }, [success])
    
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
        console.log(doc);
        const formData={
          wording:response, 
          image64:image, 
          doc64:doc,
          dte:'2023-10-01',
          question_id:questionId,
          status:false
        }
        if(response){
          create(`forum/reply-list-create/${questionId}/`,formData)
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
        <div className={`fixed w-full z-40  md:px-14 lg:px-24 md:pl-64  px-2  border-t bg-white  bottom-0 right-0 left-0 ${!isExtended?'bottom-[-200%] tran ':' tran bottom-0'} `}>
            <div className=" rounded-t-lg h-full w-full md:pl-4 ">
                <div className="flex  items-center p-1 justify-between text-md text-gray-700">
                    <span className="px-1 font-bold">Repondre à cette question</span>
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
                placeholder={'Entrez votre reponse ici ...'}
                name={'response'}
                onChange={setResponse}
                value={response}

            />
             


             <div className="flex mt-2 items-center justify-between">
        <div className="flex gap-2">
        <div className="flex flex-col w-full">
                <label htmlFor="" className='text-xs'>Image</label>
                <div className={`rounded-md border border-blue-500 bg-gray-50 p-1 hover:bg-blue-200 tran w-10 ${image && 'bg-blue-200'}`}>
                  <label htmlFor="upload" className="flex flex-col items-center gap-2 cursor-pointer">
                    <CameraIcon className='w-6 text-blue-600' /> 
                  </label>
                  <input id="upload" type="file" onChange={handleImageChange} className="hidden" />
              </div>

            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="" className='text-xs'>Document</label>
                <div className={`rounded-md border border-blue-500 bg-gray-50 p-1 hover:bg-blue-200 tran w-10 ${doc && 'bg-blue-200'}`}>
                  <label htmlFor="uploadDoc" className="flex flex-col items-center gap-2 cursor-pointer">
                    <BookOpenIcon className='w-6 text-blue-600' />
                     
                  </label>
                  <input id="uploadDoc" type="file" onChange={handleDocChange} className="hidden" />
              </div>
                 
            </div>
        </div>
        <Button
        className={'btn-primary mt-4'}
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