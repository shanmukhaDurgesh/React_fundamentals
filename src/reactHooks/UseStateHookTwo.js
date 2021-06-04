import React, { Component,useState } from 'react'

function UseStateHookTwo(){
    const [state, setSate] = useState({firstName: '',lastName: ''})

    return(
        <form>
            <input type="text" value={state.firstName} onChange={e => setSate({...state, firstName : e.target.value})} />
            <input type="text" value={state.lastName} onChange={e => setSate({...state, lastName : e.target.value})} />
            <h1>{state.firstName}</h1>
            <h1>{state.lastName}</h1>
        </form>
    )
}
export default UseStateHookTwo
