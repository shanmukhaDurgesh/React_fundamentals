import React, { Component,useState } from 'react'

function UseStateHookOne(){
    const [state, setSate] = useState(0)
    const increment = () => (
        setSate(state + 2)
    )
    return(
        <div>
            <button type="button" onClick={increment}>COUNT {state}</button>
        </div>
    )
}
export default UseStateHookOne

// what are Hooks
// hooks are allows you to use react feature without having to write a class
// example : state of component
// Hooks doesn't work inside classes

// why Hooks
// 1.
// uderstand how THIS keyword works in JS
// remember to bind event event handlers in class component
// Classes don't minify very well and make hot reloading very unreliable
// 2.
// their is particular way to reuse stateful component logic
// HOC and render props patterns do address this problem but makes the code harder to follow
// 3.

// noteworthy points
// CLASSES WON'T BE REMOVED FROM REACT
// CAN'T USE HOOKS IN CLASS COMPONENT
// HOOKS PROVIDE A MORE DIRECT API'S TO THE REACT CONCEPTS YOU ALREADY KNOW

// USE STATE HOOK
// only call Hooks at the top level
// only call hooks from react functions
// useState does not automatically merge and update the object but setState will merge
// ...state -- hey copy every object in state object and just ovverite field with updatd value

// USE EFFECT HOOK
// Effect Hook lets you perform side effect in functional components
// it is a close replacement for componentDidMount,componentDidUpdate and componentwillUnmount
// useEffect runs after every render()

// USE CONTEXT HOOK
// cONTEXT provides a way to pass data through the component tree without having to pass props down manually at every level

// USE REDUCER HOOK
// use reduces is a hook that is used for state management
// it is alternative for useState
// usestate is built using useReduces

// useReducer --
// useReducer(reducer,initialState)
// newState = reducer(currentState, action)
// useReducer returns pair of values ["neState",dispatch -- (action)]