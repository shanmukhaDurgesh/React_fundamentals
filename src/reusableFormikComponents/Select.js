import React, { useState } from 'react'
import {ErrorMessage, Field} from 'formik'
import TextError from './TextError'

function Select(props){
    const {label,name,options, ...rest} = props
    return(
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Field as='select' className="form-control" placeholder={label} name={name} id={name} {...rest} 
            value={props.selectedOption} onChange={props.onChange}>
                {
                    options.map((option) => {
                        return(
                            <option key={option.value} value={option.value}>{option.key}</option>
                        )
                    })
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}
export default Select