
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useRef } from "react";
import { Dialog } from "@headlessui/react";
import ArticleCard from '../cards/ArticleCard';
const SearchBar = ({ isOpen, onClose }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onClose={onClose} initialFocus={inputRef}>
        <Dialog.Overlay className="fixed inset-0 bg-blue-800  opacity-20" />

        <div className=" z-50 fixed top-6 w-full  p-8 h-full  ">
      <div className='flex  justify-center'>
          <div className="bg-white rounded-md w-full md:w-[70%] lg:w-[50%] px-4 pb-4 h-full  shadow-lg " >
            <div className="flex items-center justify-between py-2">
                <Dialog.Title className="text-lg font-bold">
                    Recherche
                </Dialog.Title>
                <button 
                    onClick={onClose}>
                    <XMarkIcon className='icon-danger'/>
                </button>
            </div>

          <input
            ref={inputRef}
            type='search'
            className="form-control-x"
            placeholder="Rechercher ici .."
          /> 
          <div className="overflow-y-auto mt-2 grid md:grid-cols-2  gap-2 " style={{'height':'470px'}}>
            <ArticleCard data={''} />
            <ArticleCard data={''} />
            <ArticleCard data={''} />
            <ArticleCard data={''} />
            <ArticleCard data={''} />
            <ArticleCard data={''} />
            <ArticleCard data={''} />
            <ArticleCard data={''} />
            <ArticleCard data={''} />
          </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default SearchBar;