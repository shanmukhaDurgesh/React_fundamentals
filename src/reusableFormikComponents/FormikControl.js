import React from 'react'
import Date from './Date'
import Input from './Input'
import Radio from './Radio'
import Select from './Select'
import Textarea from './Textarea'

function FormikControl(props){
    const {control, ...rest} = props
    switch(control){
        case 'input': return <Input {...rest}/>
            case 'textarea': return <Textarea {...rest}/>
                case 'select': return <Select {...rest}/>
                    case 'radio': return <Radio {...rest}/>
                        case 'checkbox':
                            case 'date': return <Date {...rest}/>
                                default: return null

    }
}
export default FormikControl