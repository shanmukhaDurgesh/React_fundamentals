import React, { Component } from 'react'


const UpdatedComponent = (OriginalComponent,inc) => {
    class NewComponent extends Component {
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    onCountInc = () => {
        this.setState(previous => {
           return {count : previous.count + inc}
        })
    }
        render() {
            return <OriginalComponent count={this.state.count} onCountInc={this.onCountInc}/>
        }
    }
    return NewComponent
}

export default UpdatedComponent

// class Fundamental extends Component {
//     constructor(){
//         super()
//         this.state = {
//             count : 0
//         }
//     }

//     onCountInc = () => {
//         this.setState(previous => {
//            return {count : previous.count + 1}
//         })
//     }

//     render(){
//         console.log(this.state.count);
//         const {count} = this.state
//         return(
//             <div>
//                 <button type="button" onClick={this.onCountInc}>Clicked {count} times</button>
//             </div>
//         )
//     }
// }
// export default Fundamental