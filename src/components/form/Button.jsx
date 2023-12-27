import React from 'react' 
import Spinner from '../extra/Spinner'
const Button = ({click,className,icon,load,title}) => {
   
  return (
    <>  
        
        {
            !load ?
            <button onClick={click} className={className+' flex justify-center items-center gap-2'}>{icon} {title}</button>
            :
            <button  className={className+'-light '+' cursor-not-allowed flex justify-center items-center gap-2'}><Spinner load={load} className={'w-6 h-6'} />  {title}</button>
        }
    </>
  )
}

export default Button