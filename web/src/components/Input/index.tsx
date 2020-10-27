import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string;
  name: string;
}

const Input: React.FC<InputProps> = ({label, name, ...rest}) =>{
  return(
    <div className="input-container">
      <div className="input-content">
        <label htmlFor={name}>{label}</label>
        <input type="text" id={name} {...rest}/>
      </div>
    </div>
  )
}

export default Input;