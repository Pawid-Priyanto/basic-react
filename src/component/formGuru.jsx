import React from 'react';
import FormHandler from '../helper/formHandler';

const FormGuru = (props) => {
    return (
       <div> 
        <label>Form nama Guru : </label>
        <input 
            onChange={(e)=>props.changeName(e.target.value)}
            value={props.name}
        />
        <p style={{color:props.color}}>{props.name}</p>
       </div> 
    )
}

export default FormHandler(FormGuru);