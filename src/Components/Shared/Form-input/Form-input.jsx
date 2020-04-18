import React from 'react';

import './Form-input.scss';
import { Grid, Icon } from "semantic-ui-react";

const FormInput = ({ handleChange, label, icon, ...otherProps }) => (

    // <div className='group' >
    //   <input className='form-input' onChange={handleChange} {...otherProps} />
    //   {label ? (
    //     <label
    //       className={`${
    //         (otherProps.value.length || otherProps.type === 'file' || otherProps.type === 'date') ? 'shrink' : ''
    //       } form-input-label`}
    //     >
    //       {label}
    //     </label>
    //   ) : null}
    // </div>

    <div className="form-input">
        {label ? (
            <label
                className={`pb-1`}
            >
                {label}
            </label>
        ) : null}
        <div className="input-group input-group-merge">
        {icon ? (
                <div className="input-icon">
                <Icon name={icon} />
            </div>
        ) : null}
            
            <input className='form-control' onChange={handleChange} {...otherProps} />
        </div>
    </div>
);

export default FormInput;