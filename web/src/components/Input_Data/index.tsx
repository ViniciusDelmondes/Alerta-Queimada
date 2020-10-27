import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface DataProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string;
  name: string;
}

const Data: React.FC<DataProps> = ({label, name, ...rest}) =>{
  return(
    <div className="inputdate-container">
      <div className="inputdate-content">
        <label htmlFor={name}>{label}</label>
        <input type="date" id={name} {...rest}/>
      </div>
    </div>
  )
}

export default Data;