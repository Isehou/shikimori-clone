import React, { useState } from "react";
import "./testStyle.css";

function UseStateTest() {
    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter + 1)
    }
    function decrement() {
        setCounter(counter - 1)
    }
    return (
        <div className="someDiv">
        <h1>Value: {counter}</h1>
        <button onClick={increment} className='SomeButton'>Plus</button>
        <button onClick={decrement} className='SomeButton'>Minus</button>
        </div>
    )
}

export default UseStateTest