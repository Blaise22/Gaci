 
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import MainCard from '../cards/MainCard'
import {XMarkIcon} from '@heroicons/react/20/solid'
import CreateQuestionForm from '../form/CreateQuestionForm'
import CreatePubForm from '../form/CreatePubForm'

export default function PublicationModal({mainButton,modalTitle}) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="inset-0 flex items-center justify-center">
        <div onClick={openModal}>
          {mainButton}
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
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex  justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full md:w-[80%] lg:w-[60%] transform overflow-hidden rounded-lg bg-white  text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  > 
                  </Dialog.Title>
                   <MainCard className={'w-full bg-white'} mainTitle={modalTitle} 
                      sideHeaderContent={ 
                        <XMarkIcon onClick={closeModal} className='icon-danger' />
                       } >
                      <div className="px-4">
                      <CreatePubForm  onClose={closeModal}  />
                      </div>

                   </MainCard>

                   
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
