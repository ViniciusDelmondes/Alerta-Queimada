import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string;
  name: string;
}

const InputImage: React.FC<InputProps> = ({label, name, ...rest}) =>{
  return(
    <div className="input-image-container">
      <div className="input-image-content">
        <label htmlFor={name}>{label}</label>
        <input type="text" id={name} {...rest}/>
      </div>
    </div>
  )
}

export default InputImage;