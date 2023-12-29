import { XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import AxiosInstance from '../../axios/AxiosInstance' 
import { useNavigate } from 'react-router-dom';
const FormUpdateProf = ({close,updatingData}) => {
    const nav=useNavigate()
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
        if(image){
            const mainShop=JSON.parse(localStorage.getItem('mainShop'))
            const mainShopId=mainShop.pk
            const formData= new FormData()
            formData.append('kind',data?.kind)
            formData.append('bio' ,data?.bio)
            formData.append('adress',data?.adress,)
            formData.append('picture64',image)
            setLoading(true)
            AxiosInstance.put(`auth/profile-update/${updatingData.pk}/`,formData).then(res=>{
                const profil= {user: res.data.user, kind: res.data.kind, bio: res.data.bio, adress: res.data.adress, picture: res.data.picture}
                localStorage.setItem('profil', JSON.stringify(profil))
                 
                
            }).catch(err=>{
                 
            }).finally(()=>{
                setTimeout(() => {
                    setLoading(false)
                    close()
                    nav('/configuration/')
                }, 1500);
            })
        }else{
            toast.error("Selectionner une photo !", {
                position: toast.POSITION.TOP_RIGHT
            });
        }
      } 
  return (

    <div className="w-[100%] absolute top-4 bg-white border rounded-lg p-4 ">
        
        <div className="flex  items-center justify-between">
            <span className="text-secondary">Modifier un profil</span>
            <XMarkIcon className='icon-danger z-0' onClick={close} />
        </div>
        <div className="mt-2">
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
                <textarea onChange={handleChange} value={data.bio} name="bio" id="" className='w-full border px-2 outline-none ring-0  h-16 rounded-lg focus:ring-1 focus:ring-green-500' >
                </textarea>
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="" className='text-xs'>Photo de profil</label>
                <input onChange={handleImageChange}
                    type="file"
                    name='picture'
                    className="block w-full text-sm text-green-500
                    file:mr-4 file:py-2 file:px-4 file:rounded-md
                        file:border-0 file:text-sm file:font-semibold
                        file:bg-green-50 file:text-green-700
                        hover:file:bg-green-100"
                />
            </div>
            <div className="flex justify-end w-full">
                
                {
                !loading ?
                <button onClick={create} className='btn-primary'>Enregistrer</button>
                        :
                    <span className='bg-green-500 rounded-md px-2 text-white py-1.5 flex items-center'>Enregistrement en cours ...</span>
                }
            </div>
        </div>
    </div>
  )
}
export default FormUpdateProf