import React, { Component,useState } from 'react'

function UseStateHookThird(){
    const [items, setItems] = useState([])
    const increment = () => {
        setItems([...items,{
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return(
        <div>
            <button type="button" onClick={increment}>add</button>
            <ul>
                {
                    items.map(item => {
                        return (
                            <li key={item.id}>{item.value}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default UseStateHookThird
