import React from 'react'
import {ErrorMessage, Field} from 'formik'
import TextError from './TextError'

function Radio(props){
    const {label,name,options, ...rest} = props
    return(
        <div>
            <label>{label}</label>
            <Field name={name} {...rest}>
                {
                    ({ field }) => {
                        console.log(field);
                        return options.map(
                            option => {
                                return (
                                    <React.Fragment key={option.value}>
                                    <input name={option.value} type="radio" id={option.value} 
                                    {...field} value={option.value} checked={field.value == option.value}/>
                                    <label htmlFor={option.key}>{option.value}</label>
                                </React.Fragment>
                                )
                            }
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}
export default Radio