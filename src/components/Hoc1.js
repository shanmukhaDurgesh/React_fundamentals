import React, { Component } from 'react'
import UpdatedComponent from './Fundamental'

class Hoc1 extends Component {
    render(){
        const {count, onCountInc} = this.props
        return(
            <div>
                <h3 onMouseOver={onCountInc}> Hovered {count} times</h3>
            </div>
        )
    }
}
export default UpdatedComponent(Hoc1,1)