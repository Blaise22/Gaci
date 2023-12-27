import React from 'react'

const convertImage64 = (file) => {
        var value
        const reader = new FileReader()
    
        reader.onload = () => {
            value = reader.result;
        };
    
        reader.readAsDataURL(file);
        return value
  
      
}

export default convertImage64