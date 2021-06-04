import React from 'react'
import {ErrorMessage, Field} from 'formik'
import TextError from './TextError'
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function Date(props){
    const {label,name, ...rest} = props
    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <Field name={name} id={name} {...rest}>
                {
                    ({form, field}) => {
                        const {setFieldValue} = form
                        const {value} = field
                        return (
                            <DateView name={name} {...field} {...rest} selected={value} autoComplete="off"
                            onChange={val => setFieldValue(name,val)}/>
                        )

                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}
export default Date