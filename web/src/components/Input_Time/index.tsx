import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface DataProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string;
  name: string;
}

const Time: React.FC<DataProps> = ({label, name, ...rest}) =>{
  return(
    <div className="input-time-container">
      <div className="input-time-content">
        <label htmlFor={name}>{label}</label>
        <input type="time" id={name} {...rest}/>
      </div>
    </div>
  )
}

export default Time;