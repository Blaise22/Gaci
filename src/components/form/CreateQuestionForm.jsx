import React, { useEffect, useState } from 'react'
import Input from './Input'
import Button from './Button'
import PopUp from './PopUp'
import useCreate from '../../hooks/useCreate'
const CreateQuestionForm = ({refresh,onClose}) => {
  const [formError,setFormError]=useState(null)
  const [quest,setQuestion]=useState(null)
  const [image,setImage]=useState(null)
  const [doc,setDoc]=useState(null)
  const {create, load, error, success}=useCreate()
  useEffect(() => {
    if(error || success){
      refresh()
    }
    if(success){
      onClose()
    }
  }, [error, success]) 
  
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
      wording:quest,
      dte:'2023-12-05',
      image64:image, 
      doc64:doc
    }
    if(quest){
      create(`forum/question-list-create/`,formData)
    }else{
      setFormError('Veuillez decrire votre question')
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
        type={'textarea'}
        placeholder={'Entrez votre question ici ...'}
        name={'quest'}
        onChange={setQuestion}
        value={quest}

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
  )
}

export default CreateQuestionForm