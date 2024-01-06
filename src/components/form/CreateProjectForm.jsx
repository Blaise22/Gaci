import React, { useEffect, useState } from 'react'
import Input from './Input'
import Button from './Button'
import PopUp from './PopUp'
import useCreate from '../../hooks/useCreate'
import {useNavigate} from 'react-router-dom'
import {BookOpenIcon,CameraIcon} from '@heroicons/react/24/outline'
const CreateProjectForm = ({onClose}) => {
  const [formError,setFormError]=useState(null)
  const [designationProject,setdesignationProject]=useState(null)
  const [descriptionProject,setdescriptionProject]=useState(null)
  const [pu,setpu]=useState(null)
  const [pub,setpub]=useState(null)
  const [devInfos,setdevInfos]=useState(null)
  const [image,setImage]=useState(null) 
  const [doc,setDoc]=useState(null) 
  const {create,res,load, error, success}=useCreate()
  const navigate=useNavigate()
  useEffect(() => {
    res?.pk && navigate('/projets')
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
      designationProject: designationProject,
      descriptionProject: descriptionProject,
      pu: pu,
      pub:pub,
      devInfos: devInfos,
      image64: image,
      doc64: doc
    }
     
    if(designationProject && descriptionProject){
      if(pu){
        if(devInfos){
          create(`pub/project-list-create/`,formData)
        }else{
          setFormError('Veuillez renseigner les informationsur le develeppeur')
        }
      }else{
        setFormError('Veuillez decrire le prix de votre projet')
      }
    }else{
      setFormError('Veuillez decrire votre projet')
    }
    setTimeout(() => {
      setFormError(null)
    }, 4000);
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
        name={'designationProject'}
        onChange={setdesignationProject}
        value={designationProject}
        label={'Designation'} 
      />
      <Input 
        type={'textarea'} 
        name={'descriptionProject'}
        onChange={setdescriptionProject}
        value={descriptionProject}
        placeholder={'Décrivez votre projet ...'}
        
        

      />
      <Input 
        type={'text'}
        placeholder={''}
        name={'pu'}
        onChange={setpu}
        value={pu}
        label={'Prix'} 
      />
      <Input 
        type={'text'}
        placeholder={''}
        name={'pub'}
        onChange={setpub}
        value={pub}
        label={'Pub'} 
      />
      <Input 
        type={'text'}
        placeholder={''}
        name={'devInfos'}
        onChange={setdevInfos}
        value={devInfos}
        label={'Développeur'} 
      />
       
       
      
       


      <div className="flex  items-center justify-between">
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

export default CreateProjectForm