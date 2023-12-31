import React from 'react'

const Input = ({type,value,label,onChange,name,placeholder}) => {
    
    const handleInput=(type,value,name,placeholder)=>{
        if(type=='text'){
            return <input type='text'name={name?name:''} placeholder={placeholder?placeholder:''}  onChange={(e)=>{onChange(e.target.value)}} className='form-control w-full' value={value?value:''} />
        }else if(type=='date'){
            return <input type='date'name={name?name:''} placeholder={placeholder?placeholder:''}  onChange={(e)=>{onChange(e.target.value)}} className='form-control w-full' value={value?value:''} />
        }
        else if(type=='file'){
            return <input type='file'name={name?name:''} placeholder={placeholder?placeholder:''}  onChange={(e)=>{onChange(e.target.files[0])}} className='form-control w-full' value={value?value:""} />
        }
        else if(type=='check'){
            return <input type='checkbox'name={name?name:''} placeholder={placeholder?placeholder:''}  onChange={(e)=>{onChange(e.target.value)}} className='form-control w-full' value={value?value:""} />
        }
        else if(type=='radio'){
            return <input type='radio'name={name?name:''} placeholder={placeholder?placeholder:''}  onChange={(e)=>{onChange(e.target.value)}} className='form-control w-full' value={value?value:""} />
        }
        else if(type=='number'){
            return <input type='number'name={name?name:''} placeholder={placeholder?placeholder:''}  onChange={(e)=>{onChange(e.target.value)}} className='form-control w-full' value={value?value:""} />
        }
        else if(type=='email'){
            return <input type='email'name={name?name:''} placeholder={placeholder?placeholder:''}  onChange={(e)=>{onChange(e.target.value)}} className='form-control w-full' value={value?value:""} />
        }
        else if(type=='password'){
            return <input type='password'name={name?name:''} placeholder={placeholder?placeholder:''}  onChange={(e)=>{onChange(e.target.value)}} className='form-control w-full' value={value?value:""} />
        }
        else if(type=='textarea'){
            return <textarea defaultValue={value?value:""} placeholder={placeholder?placeholder:''} type='password'name={name?name:''}  onChange={(e)=>{onChange(e.target.value)}} className='form-control-textarea w-full'  >
                    </textarea>
        }
         
    }
  return (
    <>
        <div className="flex flex-col items-start gap-1">
            <label htmlFor={name} className='text-sm text-gray-700'>{label}</label>
            {  handleInput(type,value,name,placeholder) }
        </div>
    </>
  )
}

export default Input