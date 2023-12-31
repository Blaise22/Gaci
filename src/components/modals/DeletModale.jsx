
import { Dialog, Transition } from '@headlessui/react'
import { FireIcon, QuestionMarkCircleIcon, TrashIcon } from '@heroicons/react/20/solid'
import { Fragment, useState } from 'react'
import AxiosInstance from '../../axios/AxiosInstance' 
import PopUp from '../form/PopUp'
import {useNavigate} from 'react-router-dom'
export default function DeletModale({url,title,refresh,buttonContent,redirectUrl}) {
  let [isOpen, setIsOpen] = useState(false)   
  let [loading, setLoading] = useState(false)  
  let [deleting, setDeleting] = useState(false)  
  let [success, setsuccess] = useState(false)  
  let [error, setError] = useState(false)  
  const navigate=useNavigate()
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const deletItem=()=>{
    setDeleting(true) 
    AxiosInstance.delete(url).then(res=>{
      setsuccess(true)
      
      setTimeout(() => {
        setsuccess(false)
      }, 4000);
      closeModal()
      refresh()
       
    }).catch(err=>{ 
      console.log(err);
      setError(true)  
      setTimeout(() => {
        setError(false)  
        closeModal()
        refresh()
      }, 3000);
    
    }).finally(()=>{ 
      setDeleting(false)
      redirectUrl && navigate(redirectUrl)
      

     })
  } 
  return (
    <>
      
      {/** End Loading component */}
       <PopUp
        successMessage={success ?'Suppresson reussie.':null}
        errorMessage={error?'Erreur de suppression':null}  
       />
      <div className=" inset-0 flex z-50 items-center justify-center  group">
        <div  className='text-left w-full' onClick={openModal} >
            {buttonContent}
        </div>
      </div> 
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 " />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[80%] z-50 md:w-[50%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <div className="flex relative  gap-4 items-center">
                        
                        <QuestionMarkCircleIcon className='w-12 text-red-600'/>
                        <span>{title}</span>
                    </div>
                  </Dialog.Title>
                  <div className="mt-2">
                    { <p className='text-red-600'>{error?'Une erreur est survenue lors de la suppression':''}</p> }
                    <p className="text-sm text-gray-500">
                       Voulez-vous vraiment supprimer cet element ? il vous sera impossible de le recuperer.
                    </p>
                  </div>

                  <div className="mt-4 flex gap-4">
                    {
                        loading ?  null:
                        <>
                          { 
                            deleting ?
                            <button type='button'  className="h-9 rounded-lg px-2  bg-red-400 w-full text-white hover:bg-red-300 transition-all duration-300  active:bg-red-400 active:shadow-lg" >  Suppression ... </button>
                            :
                            <button type='button'  className="btn-danger w-full" onClick={deletItem} >  Supprimer </button>
                          }
                          <button type="button" className="btn-secondary w-full" onClick={closeModal} > Annuler </button>
                        </>
                    }
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
