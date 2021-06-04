import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
    name : '',
    email : '',
    company: ''
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
    company:Yup.string().required('Company field is Required')
})
function OldFormik(){
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        // validate
    })
    console.log("form values",formik.values)
    console.log("form errors",formik.errors)


    return(
        <div className="">
            <form onSubmit={formik.handleSubmit}>
                <div className="">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" 
                    onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}
                    // {...formik.getFieldProps('name')}
                    />
                    {formik.errors.name && formik.touched.name ? <div className="error">{formik.errors.name}</div> : null}
                </div>

                <div className="">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email"
                    onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
                    {formik.errors.email && formik.touched.email ? <div className="error">{formik.errors.email}</div> : null}
                </div>

                <div className="">
                    <label htmlFor="company">Company</label>
                    <input type="text" id="company" name="company"
                    onChange={formik.handleChange} value={formik.values.company} onBlur={formik.handleBlur}/>
                    {formik.errors.company && formik.touched.company ? <div className="error">{formik.errors.company}</div> : null}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default OldFormik