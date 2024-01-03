import { XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import AxiosInstance from '../../axios/AxiosInstance' 
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/extra/Spinner';
const FormUpdateProf = ({close,updatingData}) => {
    const nav=useNavigate()
    const [error,setError]=useState(null)
    const [image,setImage]=useState()
    const [loading, setLoading]=useState(false)
    const [data,setData]=useState({
        kind:updatingData.kind,
        bio :updatingData.bio,
        adress:updatingData.adress,
        picture:'',
    })
    const handleChange=(e)=>{  
        setData({
          ...data,[e.target.name]:e.target.value
        })   
      }
      const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onload = () => {
            setImage(reader.result);
        };
    
        reader.readAsDataURL(file);
      };
      const create=()=>{  
            const formData= {
                kind:data?.kind,
                bio:data?.bio,
                adress:data?.adress,
                picture64:image
            } 
            if(image){
                setLoading(true)

            
            AxiosInstance.put(`auth/profile-update/${updatingData.pk}/`,formData).then(res=>{
                localStorage.setItem('profil',JSON.stringify(
                    {
                        adress:res.data.adress,
                        bio:res.data.bio,
                        kind:res.data.kind,
                        picture:res.data.picture,
                        user:res.data.user,          
                    }
                ))
                
                setLoading(false)
                close()
                nav('/publications')
            }).catch(err=>{
                
            }).finally(()=>{
                
                
            })
        }else{
            setError('Veuillez choisir une image')
        }
      } 
  return (

    <div className="w-[100%] z-40 absolute top-0 bg-white border rounded-lg p-4 ">
        <div className="flex  items-center justify-between">
            <span className="text-secondary">Modifier un profil</span>
            <XMarkIcon className='icon-danger z-0' onClick={close} />
        </div>
        <div className="mt-2">
            <span className="text-red-600">{error?error:''}</span>
            <div className="flex flex-col w-full">
                <label htmlFor="" className='text-xs'>Genre</label>
                <select  onChange={handleChange} name="kind" id="" className='form-control'>
                    <option>{updatingData.kind}</option>
                    <option value="MASCULIN">Masculin</option>
                    <option value="FEMININ">Féminin</option> 
                </select>
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="" className='text-xs'>Adresse</label>
                <input value={data.adress} onChange={handleChange} type="text"  className='form-control' name="adress" id="" />
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="" className='text-xs'>Bio</label>
                <textarea onChange={handleChange} value={data.bio} name="bio" id="" className='w-full border px-2 outline-none ring-0  h-16 rounded-lg focus:ring-1 focus:ring-blue-500' >
                </textarea>
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="" className='text-xs'>Photo de profil</label>
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
            <div className="flex justify-end w-full">
                
                {
                !loading ?
                    <button onClick={create} className='btn-primary'>Enregistrer</button>
                        :
                    <span className='bg-blue-500 block gap-2 rounded-md px-2 text-white py-1.5 flex items-center flex items-center'>
                        <Spinner load={loading} className={'w-5 h-5'} />
                        Enregistrer
                    </span>
                }
            </div>
        </div>
    </div>
  )
}
export default FormUpdateProf