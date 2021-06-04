import React from 'react'
import {ErrorMessage, Field} from 'formik'
import TextError from './TextError'

function Textarea(props){
    const {label,name, ...rest} = props
    return(
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Field as='textarea' className="form-control" placeholder={label} name={name} id={name} {...rest}></Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}
export default Textarea