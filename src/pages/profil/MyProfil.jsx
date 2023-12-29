import React, { useEffect, useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { Bars3BottomLeftIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { CameraIcon, XMarkIcon } from "@heroicons/react/24/outline";
import FormCreateProf from "./FormCreateProf"; 
import { Bars3CenterLeftIcon, PencilSquareIcon } from "@heroicons/react/20/solid";
import FormUpdateProf from "./FormUpdateProf"; 
import { useNavigate } from "react-router-dom"; 
import useUser from "../../hooks/useUser";
import DeletModale from "../../components/modals/DeletModale";
import useFetch from "../../hooks/useFetch";

const MyProfil = () => {
  const nav=useNavigate()
  const [modalOpen, setModalOpen] = useState(true);
  const [openCreateProf, setOpenCreateProf] = useState(false);
  const [openUpdateProf, setOpenUpdateProf] = useState(false);
  const user=useUser()
  const {data:authUserProfil}=useFetch(`/auth/profile-user-id-detail/${user?.user.pk}/`)
  const data= user?.user
  const profil= user?.profil  
  return (
    <div className=" w-[100%] flex items-center justify-center">
      <div className="bg-white w-full rounded-lg  p-4">
        <div className="flex  justify-between">
          <h2 className="text-xl text-gray-700 font-bold mb-4">Mon compte</h2>
          
        </div>
        <div className="mb-4">
          <div className="flex z-0 relative items-center">
            {
               
              profil?.picture ?
              <img src={profil?.picture} alt="" className="w-44 h-44 rounded-full object-cover border" />:
              <UserCircleIcon className="mr-2 text-gray-600 w-44 " />
            }
            <div className="absolute z-0 left-0 md:left-2 top-6">
                {
                  profil?.user ?
                  
                  <div className="w-10 p-2 group relative rounded-full ">
                      <Bars3BottomLeftIcon className="w-10 p-1 absolute top-[-100%] rounded-full border hover:bg-gray-200 active:border-blue-600 bg-white text-gray-600" />
                      <div className="hidden gap-2  p-4 text-sm group-hover:block absolute top-[100%] bg-white z-50 card flex flex-col">
                        <div className="flex  block w-full gap-2 items-center">
                          <span className="text-blue-600 w-56  block cursor-pointer tran hover:font-bold p-2 rounded-lg hover:bg-blue-100" onClick={()=>{setOpenUpdateProf(!openUpdateProf)}}>
                          Modifier mon profil 

                          </span>
                        </div>
                        <div className="flex block w-full gap-2 items-center">
                          <DeletModale title={'Supprimer mon profil'} 
                            buttonContent={<span className="text-red-600 cursor-pointer tran hover:font-bold w-56 block p-2 rounded-lg hover:bg-red-100" >Supprimer mon profil</span>} 
                            url={`/auth/profile-delete/${authUserProfil?.pk}/`} 
                            redirectUrl={'/publications'}
                            refresh={()=>{ localStorage.removeItem('profil') }}
                            
                            /> 
                           
                        </div>
                      </div>
                  </div>
                  :
                  <CameraIcon onClick={()=>{setOpenCreateProf(!openCreateProf)}} className="w-10 p-1 rounded-full border hover:bg-gray-200 active:border-blue-600 bg-white text-gray-600" />
                }
            </div>
            {
                openCreateProf ? 
                    <FormCreateProf close={()=>{setOpenCreateProf(!openCreateProf)}} />
                :null
            }  
            {
                openUpdateProf ? 
                     profil &&
                    <FormUpdateProf updatingData={profil} close={()=>{setOpenUpdateProf(!openUpdateProf)}} />
                :null
            }  
          </div>
          <p className="text-secondary">{data?.email}</p>
        </div>
        {/* Bouton pour ouvrir le modal */}
        {/* Modal */}
        <Transition
          show={modalOpen}
          enter="transition ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Disclosure>
            {({ open }) => (
              <>
                {/* Contenu du modal */}
                <Disclosure.Panel>
                  <div className="bg-white rounded-lg mt-4 mb-4">
                    
                    <p>Nom: {data?.names}</p>
                    <p>Email: {data?.email}</p>
                    <p>Téléphone: {data?.phone_number}</p>
                    <p>Staff: {data?.staff ? "Oui":"Non"} </p>
                    {
                      profil?
                      profil.user&&
                      <>

                        <p>Genre: {profil?.kind}</p>
                        <p>Adress: {profil?.adress}</p>
                        <div className="flex  flex-col ">
                            <p className="text-gray-700 font-semibold">Bio</p>
                            <p>{profil?.bio}</p>
                        </div>
                      </>
                      :null
                    }
                  </div>
                </Disclosure.Panel>

                {/* Flèche d'ouverture/fermeture du modal */}
                <Disclosure.Button className="btn-secondary">
                  {open ? "Fermer les informations" : "Afficher les informations"}
                </Disclosure.Button>
                
              </>
            )}
          </Disclosure>
        </Transition>
      </div>
      
    </div>
  );
};

export default MyProfil;