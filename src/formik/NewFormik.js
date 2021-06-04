import React from 'react'
// import { useFormik } from 'formik'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import ErrorMsg from './ErrorMsg.js'

const initialValues = {
    name : '',
    email : '',
    company: '',
    comment: '',
    address: '',
}
const onSubmit = values => {
    console.log("values",values);
}
const validate = values => {
    let errors = {}
    if(!values.name){
        errors.name = 'Name field is Required'
    }
    if(!values.email){
        errors.email = 'Email field is Required'
    }else if(!/^[A-Z0-9._%-]+@[A-Z0-9._%-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = "Invalid email format"
    }
    if(!values.company){
        errors.company = 'Company field is Required'
    }
    return errors
}
const validationSchema = Yup.object({
    name:Yup.string().required('Name field is Required'),
    email:Yup.string().email('Invalid email format').required('Email field is Required'),
    company:Yup.string().required('Company field is Required'),
    // address:Yup.string().required('Address field is Required')

})
function NewFormik(){

    return(
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form>
                <div className="">
                    <label htmlFor="name">Name</label>
                    <Field type="text" id="name" name="name" />
                    <ErrorMessage name="name" component={ErrorMsg}/>
                </div>

                <div className="">
                    <label htmlFor="email">Email</label>
                    <Field type="email" id="email" name="email"/>
                    <ErrorMessage name="email" component={ErrorMsg}/>
                </div>

                <div className="">
                    <label htmlFor="company">Company</label>
                    <Field type="text" id="company" name="company"/>
                    <ErrorMessage name="company" component={ErrorMsg}/>
                </div>

                <div className="">
                    <label htmlFor="comment">Comment</label>
                    <Field as='textarea' id="comment" name="comment"/>
                    <ErrorMessage name="comment" component={ErrorMsg}/>
                </div>

                <div className="">
                    <label htmlFor="address">Address</label>
                    <Field  name="address">
                        {
                            (props) => {
                                const { field, form, meta } = props
                                return (
                                    <div>
                                        <input type="text" id="address" type="text" {...field}/>
                                        {meta.errors && meta.touched ? <div>{meta.errors}</div> : null}
                                    </div>
                                )
                            }
                        }
                    </Field>
                    <ErrorMessage name="comment" component={ErrorMsg}/>
                </div>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}
export default NewFormik