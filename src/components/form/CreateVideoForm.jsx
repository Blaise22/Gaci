import React, { useEffect, useState } from 'react'
import Input from './Input'
import Button from './Button'
import PopUp from './PopUp'
import useCreate from '../../hooks/useCreate'
import {useNavigate} from 'react-router-dom'
import {BookOpenIcon,VideoCameraIcon} from '@heroicons/react/24/outline'
const CreateVideoForm = ({onClose,postId,onCreate}) => {
  const [formError,setFormError]=useState(null)
  const [wording,setWording]=useState(null) 
  const [vid,setVideo]=useState(null)
  const [filename,setFilename]=useState(null)
  const {create,res,load, error,errorDetails, success}=useCreate()
  const navigate=useNavigate()
  useEffect(() => {
    console.log(errorDetails);
    success && onCreate()
    if(success){
      onClose()
    }
  }, [error, success,res]) 
  
   
  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    setFilename(file.name);
    reader.onload = () => {
        //setVideo(reader.result);
    };

    reader.readAsDataURL(file);
  };
  const submit=()=>{ 
    //console.log(image);
    const formData={
      wording:wording, 
      post_id:postId, 
      url:vid
    }
     
    if(vid){
      create(`/pub/post-video-list-create/`,formData)
    }else{
      setFormError('Veuillez selectionner une video')
      setTimeout(() => {
        setFormError(null)
      }, 4000);
    }
  }
  
 
  return (
    <div className='flex flex-col'>
      <PopUp
        load={load}
        errorMessage={error?'Veuillez decrire la video':null}
        successMessage={success?'La video a été posté':null}
       />
       <div className="text-red-600 text-sm">{formError}</div>
      <Input 
        type={'text'} 
        name={'worfing'}
        onChange={setWording}
        value={wording}
        label={'Description'}

      />
      <Input 
        type={'text'} 
        name={'url'}
        onChange={setVideo}
        value={vid}
        label={'URL de la video'}

      />
       


      <div className="flex  items-center justify-between">
        {
          /**
        <div className="flex gap-2"> 
            <div className="flex flex-col w-full">
                <label htmlFor="" className='text-xs text-blue-600'>{filename}</label>
                <label htmlFor="" className='text-xs'>Video</label>
                <div className={`rounded-md border border-blue-500 bg-gray-50 p-1 hover:bg-blue-200 tran w-10 ${vid && 'bg-blue-200'}`}>
                  <label htmlFor="upload" className="flex flex-col items-center gap-2 cursor-pointer">
                    <VideoCameraIcon className='w-6 text-blue-600' /> 
                  </label>
                  <input id="upload" type="file" onChange={handleVideoChange} className="hidden" />
              </div>
                 
            </div>
        </div> */
        }
        <Button
        className={'btn-primary mt-2 font-bold'}
        click={submit}
        icon={null}
        load={load}
        title={'Publier'}
      />

      </div>
      
    </div>
  )
}

export default CreateVideoForm