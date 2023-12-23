import React from 'react' 
import PopUp from './PopUp'
const Button = ({errorMessage,successMessage,click,className,text,loadingMessage,icon}) => {
   
  return (
    <>  
        {
            
            <PopUp  successMessage={successMessage}  errorMessage={errorMessage} />
        }
        {
            !loadingMessage ?
            <button onClick={click} className={className+' flex justify-center items-center gap-2'}>{icon} {text}</button>
            :
            <button  className={className+'-light '+' cursor-not-allowed flex justify-center items-center gap-2'}> {icon} {loadingMessage}</button>
        }
    </>
  )
}

export default Button