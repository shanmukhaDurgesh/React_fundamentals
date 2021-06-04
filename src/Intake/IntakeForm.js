import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../reusableFormikComponents/FormikControl'

const initialValues = {
    firstName : '',
    lastName : '',
    dob : null,
    company: '',
    locstion: '',
    race: '',
    sex: '',
    email : '',
    phoneNumber : '',
    addressOne : '',
    addressTwo : '',
    city : '',
    zipCode : '',
    state: '',
    resultSharing: '',
    initials : '',
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
    firstName:Yup.string().required('This field is Required'),
    // lastName:Yup.string().required('This field is Required'),
    // dob:Yup.date().required('Date field is Required').nullable(),
    // company:Yup.string().required('This field is Required'),
    // location:Yup.string().required('This field is Required'),
    // race:Yup.string().required('This field is Required'),
    // sex:Yup.string().required('This field is Required'),
    // email:Yup.string().email('Invalid email format').required('Email field is Required'),
    // phoneNumber:Yup.string().required('This field is Required'),
    // addressOne:Yup.string().required('This field is Required'),
    // addressTwo:Yup.string().required('This field is Required'),
    // city:Yup.string().required('This field is Required'),
    // state:Yup.string().required('This field is Required'),
    // zipCode:Yup.string().required('This field is Required'),
    // resultSharing:Yup.string().required('This field is Required'),
    // initials:Yup.string().required('This field is Required'),
})
// const companyList = [
//     {key: '1', value: 'Mahathi Tech'}
// ]
// const locationList = [
//     {key: '2', value: 'KKD'}
// ]
const raceList = [
    {key: 'Select', value: ''},
    {key: 'Asian', value: 'Asian'},
    {key: 'Black', value: 'Black'},
    {key: 'Caucasian', value: 'Caucasian'},
    {key: 'Hispanic', value: 'Hispanic'},
    {key: 'Native American', value: 'Native American'},
    {key: 'Other', value: 'Other'},
    {key: 'N/A – Prefer not to Answer', value: 'N/A – Prefer not to Answer'}
]
const sexList = [
    {key: 'Select', value: ''},
    {key: 'Male', value: 'Male'},
    {key: 'Female', value: 'Female'},
    {key: 'Prefer not to Answer', value: 'Prefer not to Answer'},
]
const stateList = [
    {key: '5', value: 'AP'}
]
const resultSharingList = [
    {key: 'Select', value: ''},{key: 'Only Me', value: 'Only Me'},{key:'Me and the Company Listed above', value:'Me and the Company Listed above'}
]

function IntakeForm(props){
    const {itemsList} = props
    console.log(props);
    const companyList = itemsList.map(elem => (
        {
          key: elem.accountName,
          value: elem.id
        } 
      ));  
    const [option, setTitle] = useState()
    const [location, setLocation] = useState([{key: 'Select', value: ''}])
    function handleTitleChange(evt) {
        setTitle(evt.target.value)
    }
    useEffect(() => {
        itemsList.map(elem => { 
            if(elem.id === parseInt(option)){
                const dlist = elem.locations.map(e => (
                    {
                        key: e.accountCity,
                        value:e.id
                    }
                ))
               setLocation(dlist)
            }
        })
    },[option])
    return(
        <Formik initialValues ={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => (
                    <Form>
                        <div className="col-md-12 row">
                        <div className="col-md-6"><FormikControl control="input" name="firstName" label="First Name"/></div>
                        <div className="col-md-6"><FormikControl control="input" name="lastName" label="Last Name"/></div>
                        <div className="col-md-6"><FormikControl control="date" name="dob" label="Select Date" /></div>
                        <div className="col-md-6"><FormikControl control="select" name="company" label="Company" options={companyList} onChange={handleTitleChange}/></div>
                        <div className="col-md-6"><FormikControl control="select" name="location" label="Location" options={location} onChange={handleTitleChange}/></div>
                        <div className="col-md-6"><FormikControl control="select" name="race" label="Race" options={raceList} onChange={handleTitleChange}/></div>
                        <div className="col-md-6"><FormikControl control="select" name="sex" label="Sex" options={sexList} onChange={handleTitleChange}/></div>
                        <div className="col-md-6"><FormikControl control="input" name="email" label="Email"/></div>
                        <div className="col-md-6"><FormikControl control="input" name="phoneNumber" label="Phone Number"/></div>
                        <div className="col-md-6"><FormikControl control="input" name="addressOne" label="Address 1"/></div>
                        <div className="col-md-6"><FormikControl control="input" name="addressTwo" label="Address 2"/></div>
                        <div className="col-md-6"><FormikControl control="input" name="city" label="City"/></div>
                        <div className="col-md-6"><FormikControl control="select" name="state" label="State" options={stateList} onChange={handleTitleChange}/></div>
                        <div className="col-md-6"><FormikControl control="input" name="zipCode" label="Zip Code"/></div>
                        <div className="col-md-6"><FormikControl control="select" name="resultSharing" label="Result Sharing Consent" options={resultSharingList} onChange={handleTitleChange}/></div>
                        <div className="col-md-6"><FormikControl control="input" name="initials" label="By Typing My Initials"/></div>
                        <button type="submit">Submit</button>
                        </div>
                    </Form>
                )
            }
        </Formik>
    )
}
export default IntakeForm