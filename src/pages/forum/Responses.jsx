import React from 'react'
import Header from '../../components/partials/Header'
import {QuestionMarkCircleIcon,PlusIcon} from '@heroicons/react/20/solid'
import MainCard from '../../components/cards/MainCard'
import CardDiscussion from '../../components/cards/CardDiscussion'

const Responses = () => {
  return (
    <>
        <Header/>
        <div className="pt-16 px-6 text-xs md:text-sm text-gray-700  w-full">
        <div className=" py-2 md:px-14 lg:px-24 "> 
                <span className="text-blue-700 font-semibold">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat quae illum nobis a, dolorum, quaerat sint sed, cum commodi obcaecati corrupti nulla corporis consectetur dolores esse fuga ea deserunt non?
                </span>
                <p className="text-gray-700 text-xs block mt-2">
                    Publiéil ya 20 min

                </p>
             <MainCard
                className={'bg-white rounded-lg w-full'}
                mainIcon={<QuestionMarkCircleIcon className='w-8 text-gray-700' />}
                mainTitle={'Reponses'}
             >
              <div className="flex pb-16 gap-4 flex-col">
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />
                <CardDiscussion  />

              </div>


            </MainCard>
        </div>
        <div className="fixed w-full py-2 md:px-14 lg:px-24 px-6 bg-white h-20 border-t bottom-0 right-0 left-0">
            hello
        </div>
        </div>
    </>
  )
}

export default Responses