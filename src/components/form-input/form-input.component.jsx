import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ name, type, value, handleChange, label }) => (
    <div className='group'>
        <input type={type}
                name={name}
                value={value} 
                onChange={handleChange}
                label={label}
                className='form-input' required />
        {
            label ? 
            (<label className={`${value.length ? 'shrink' : ''} form-input-label`}>
                {label}
             </label>
            )
            :
            null
        }
    </div>

)

export default FormInput;