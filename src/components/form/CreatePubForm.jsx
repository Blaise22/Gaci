import React, { useEffect, useState } from 'react'
import Input from './Input'
import Button from './Button'
import PopUp from './PopUp'
import useCreate from '../../hooks/useCreate'
import {useNavigate} from 'react-router-dom'
import {BookOpenIcon,CameraIcon} from '@heroicons/react/24/outline'
const CreatePubForm = ({onClose}) => {
  const [formError,setFormError]=useState(null)
  const [title,settitle]=useState(null)
  const [synthesis,setsynthesis]=useState(null)
  const [text,settext]=useState(null)
  const [conclusion,setconclusion]=useState(null)
  const [image,setImage]=useState(null) 
  const {create,res,load, error, success}=useCreate()
  const navigate=useNavigate()
  useEffect(() => {
     
    if(success){
      onClose()
    }
  }, [error, success,res]) 
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
        setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };
   
 
  const submit=()=>{ 
    const formData={
      title:title,
      synthesis:synthesis,
      image64:image, 
      text:text,
      conclusion:conclusion,
      repost:false,
      status: true
    }
     
    if(title){
      create(`pub/post-list-create/`,formData)
    }else{
      setFormError('Veuillez decrire votre publication')
      setTimeout(() => {
        setFormError(null)
      }, 4000);
    }
  }
  
 
  return (
    <div className='flex flex-col'>
      <PopUp
        load={load}
        errorMessage={error?'Cette question a deja été posté':null}
        successMessage={success?'La question a été posté':null}
       />
       <div className="text-red-600 text-sm">{formError}</div> 
      
       
       
      <Input 
        type={'text'}
        placeholder={''}
        name={'title'}
        onChange={settitle}
        value={title}
        label={'Titre'}


      />
      <Input 
        type={'textarea'}
        placeholder={'Entrez la synthese de la publication ...'}
        name={'synthesis'}
        onChange={setsynthesis}
        value={synthesis}
      />
      <Input 
        type={'textarea'}
        placeholder={'Entrez les details de la publication ...'}
        name={'text'}
        onChange={settext}
        value={text}
      />
      <Input 
        type={'textarea'}
        placeholder={'Entrez la conclusion de la publication ...'}
        name={'conclusion'}
        onChange={setconclusion}
        value={conclusion}
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
  )
}

export default CreatePubForm