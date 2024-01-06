import React, { useEffect, useState } from 'react'
import Input from './Input'
import Button from './Button'
import PopUp from './PopUp'
import useCreate from '../../hooks/useCreate'
import {useNavigate} from 'react-router-dom'
import {BookOpenIcon,CameraIcon} from '@heroicons/react/24/outline'
const CreateDocumentForm = ({onClose,postId,onCreate}) => {
  const [formError,setFormError]=useState(null)
  const [wording,setWording]=useState(null) 
  const [doc,setDoc]=useState(null)
  const [filename,setFilename]=useState(null)
  const {create,res,load, error, success}=useCreate()
  const navigate=useNavigate()
  useEffect(() => {
    success && onCreate()
    if(success){
      onClose()
    }
  }, [error, success,res]) 
  
   
  const handleDocChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    setFilename(file.name);
    reader.onload = () => {
        setDoc(reader.result);
    };

    reader.readAsDataURL(file);
  };
  const submit=()=>{ 
    //console.log(image);
    const formData={
      wording:wording, 
      post_id:postId, 
      docs64:doc
    }
     
    if(doc){
      create(`/pub/post-docs-list-create/`,formData)
    }else{
      setFormError('Veuillez electionner un fichier')
      setTimeout(() => {
        setFormError(null)
      }, 4000);
    }
  }
  
 
  return (
    <div className='flex flex-col'>
      <PopUp
        load={load}
        errorMessage={error?'Veuillez decrire le document':null}
        successMessage={success?'Le document a été posté':null}
       />
       <div className="text-red-600 text-sm">{formError}</div>
      <Input 
        type={'text'} 
        name={'worfing'}
        onChange={setWording}
        value={wording}
        label={'Description'}

      />
       


      <div className="flex  items-center justify-between">
        <div className="flex gap-2"> 
            <div className="flex flex-col w-full">
                <label htmlFor="" className='text-xs text-blue-600'>{filename}</label>
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
        className={'btn-primary font-bold mt-2'}
        click={submit}
        icon={null}
        load={load}
        title={'Publier'}
      />

      </div>
      
    </div>
  )
}

export default CreateDocumentForm