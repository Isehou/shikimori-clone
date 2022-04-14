import React, { useState } from "react";

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
        <h1>Счетчик: {counter}</h1>
        <button onClick={increment} className='SomeButton_acces'>Добавить</button>
        <button onClick={decrement} className='SomeButton_dange'>Убавить</button>
        </div>
    )
}

export default UseStateTest