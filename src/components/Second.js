import React, {Component} from 'react'

class Second extends Component {
    constructor(){
        super()
        this.state = {
            msg : "jdfhjdhfgngkj"
        }
    }
    onfdv(f){
        console.log(f);
        this.setState({
            msg : "heygjhbjkbkjbjkkjbbbhbhbh"
        })
    }
    render(){
        return (
            <div>
        <h1>jsdh {this.props.name}</h1>
        <h1>jsdh {this.props.name}</h1>
        <h1>jsdh {this.state.msg}</h1>
        <button type="button" onClick={() => this.onfdv(this)}>sub</button>
        </div>
        )
    }
}
export default Second