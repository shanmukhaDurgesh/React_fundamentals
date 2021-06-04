import React, { Component } from 'react'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

class Form extends Component{
    constructor(){
        super()
        this.state = {
            userName : '',
            role : "undefined"
        }
        // this.changeUser = this.changeUser.bind(this)
    }
    changeUser = (event) => {
        this.setState({
            userName : event.target.value
        })
        console.log(this.state.userName);
    }
    changeRole = (event) => {
        this.setState({
            role : event.target.value
        })
        console.log(this.state.role);
    }
    render(){
        let rolesList = [
            {
                name : "User",
                id : 1
            },
            {
                name : "Admin",
                id : 2
            }
        ]
        let jhh = rolesList.map((value,i) => <option key={value.id}>{value.name}</option>)
        return (
            <form>
            <div className="form-control">
                <label>User Name</label>
                <input type="text" value={this.state.userName} onChange={this.changeUser}/>
            </div>
            <div className="form-control">
                <label>roles</label>
                <select value={this.state.role} onChange={this.changeRole}>
                    <option key="undefined">Select</option>{jhh}
                </select>
            </div>
            <button type="button" className="btn btn-primary">Submit</button>
            </form>

        )
    }
}
export default Form