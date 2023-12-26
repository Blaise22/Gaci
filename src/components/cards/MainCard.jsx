import { HomeModernIcon } from '@heroicons/react/20/solid'
import React from 'react'

const MainCard = ({children,className, mainTitle, mainIcon,sideHeaderContent}) => {
  return (
    <div className={className}>
         <div className="p-2 flex justify-between border-b">
            <div className="flex gap-2 items-center">
                {mainIcon}
                <span className="text-lg font-bold"> {mainTitle}</span>
            </div>
            {sideHeaderContent}
         </div>
         <div className="p-4 flex flex-col gap-4">
            {children}
         </div>
      </div>
  )
}

export default MainCard