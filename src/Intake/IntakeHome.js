import React, { useState, useEffect } from 'react'
import './intakeStyles.css'
import kwokman from './../assets/images/new-kd-logo.png'
import newKwokman from './../assets/images/new-kd-emp-logo.png'
import { FaChevronCircleRight } from 'react-icons/fa'
import IntakeForm from './IntakeForm'
import axios from 'axios'



// JS Functions
function IntakeHome(){
    const [clickState, setClickState] = useState(true)
    const clickHere = () => {setClickState(false)}
    const [itemsList,setCompanyList] = useState([])
    useEffect(() => {
        let mounted = true;
        axios
			.get('https://dev.kdpassport.com:9090/mdapp/registration/location/companies').then(items => {
            if(mounted) {
                console.log(items);
                // const launchOptimistic = items.data.map(elem => (
                //     {
                //       key: elem.accountName,
                //       value: elem.id
                //     } 
                //   ));  
                //   console.log(launchOptimistic);                
                setCompanyList(items.data)
            }
          })
        return () => mounted = false;
      }, [])
    return (
        <div>
            <div className="toolbar">
                <img src={kwokman} width="100px" />
                <h5>KD PASSPORT</h5>
                <div className="spacer"></div>
            </div>
            { clickState ?
                <div className="content1">
                    <div className="load-page card highlight-card card-small">
                        <img src={newKwokman} width="120px"/>
                        <span>Testing Intake and Consent Form</span>
                        <button type="button" className="custom-button" onClick={clickHere}>Click Here {' '} <FaChevronCircleRight /></button>
                    </div>
                </div>
                :
                <div className="content">
                    <IntakeForm itemsList={itemsList}/>                    
                </div>
            }
        </div>
        
    )
}
// ES6 Arrow function Syntax
// const First = (props) => <h1>hii {props.name}</h1>
export default IntakeHome