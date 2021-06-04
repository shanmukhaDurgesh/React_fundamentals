import { useReducer } from "react"
import React from 'react'

const initialState = 0
const reducer = (state,action) => {
    switch(action){
        case 'inc':
            return state + 1
            case 'dec':
                return state - 1
                case 'reset':
                    return initialState
                    default:
                        return state
    }
}
function UseReducerHookOne(){
    const [count, dispatch] = useReducer(reducer,initialState)
    return(
        <div>
            {count}
            <button type="button" onClick={() => dispatch('inc')}>inc</button>
            <button type="button" onClick={() => dispatch('dec')}>dec</button>
            <button type="button" onClick={() => dispatch('reset')}>reset</button>
        </div>
    )
}
export default UseReducerHookOne