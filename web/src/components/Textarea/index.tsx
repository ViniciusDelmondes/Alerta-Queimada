import React, { TextareaHTMLAttributes } from 'react'

import './styles.css'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    label: string;
    name: string;
}

const Textarea: React.FC<TextAreaProps> = ({label, name, ...rest}) => {
    return (
        <div className="textarea-container">
            <label htmlFor={name}> {label} </label>
            <textarea id={name} {...rest}/>
        </div>
    )   
}

export default Textarea;