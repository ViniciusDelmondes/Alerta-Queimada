import React, { SelectHTMLAttributes } from 'react'

import './styles.css'

interface SelectConsultProps extends SelectHTMLAttributes<HTMLSelectElement>{
    label?: string;
    name: string;
    options: Array<{
        value: string;
        label: string,
    }>
}

const SelectConsult: React.FC<SelectConsultProps> = ({label, name, options, ...rest}) => {
    return(
        <div className="selectconsult-container">
            <label htmlFor={name}> {label} </label>
            <select value="" id={name} {...rest}>
                <option value="" disabled hidden> Selecione um estado </option>
                {
                    options.map(option => {
                    return <option key={option.value} value={option.value}> {option.label} </option>
                    })
                }
            </select>

        </div>
    )
}

export default SelectConsult;