import React, { Component } from 'react'
import UpdatedComponent from './Fundamental'

class Hoc2 extends Component {
    render(){
        const {count, onCountInc} = this.props
        return(
            <div>
                <button type="button" onClick={onCountInc}>Clicked {count} times</button>
            </div>
        )
    }
}
export default UpdatedComponent(Hoc2,5)