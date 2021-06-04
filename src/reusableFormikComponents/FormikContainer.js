import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function FormikContainer(){
    const dropDownOptions = [
        {key: 'Select an Option', value: ''},
        {key: 'Option 1', value: 'option1'},
        {key: 'Option 2', value: 'option2'}
    ]
    const radioOptions = [
        {key: 'Nike', value: 'nike'},
        {key: 'Puma', value: 'puma'},
    ]
    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption: '',
        dob:null
    }
    const validationSchema = Yup.object({
        email:Yup.string().email('Invalid email format').required('Email field is Required'),
        description:Yup.string().required('Description field is Required'),
        selectOption:Yup.string().required('Select Topic field is Required'),
        radioOption:Yup.string().required('Select Radio field is Required'),
        dob:Yup.date().required('Date field is Required').nullable(),

    })
    const onSubmit = values => {
        console.log(values);
    }
    return(
        <Formik initialValues ={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => (
                    <Form>
                        <FormikControl control="input" type="email" name="email" label="Email"/>
                        <FormikControl control="textarea" name="description" label="Description"/>
                        <FormikControl control="select" name="selectOption" label="Select Topic" options={dropDownOptions}/>
                        <FormikControl control="radio" name="radioOption" label="Select Radio Option" options={radioOptions}/>
                        <FormikControl control="date" name="dob" label="Select Date" />
                        <button type="submit">Submit</button>
                    </Form>
                )
            }
        </Formik>
    )
}
export default FormikContainer