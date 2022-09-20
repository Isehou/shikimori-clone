import React, { useState } from "react";
import "./testStyle.css";

function UseStateTest(props) {
  function increment() {
    props.setCounter(props.counter + 1);
  }
  function decrement() {
    props.setCounter(props.counter - 1);
  }

  return (
    <div className="someDiv">
      <h1>Value: {props.counter}</h1>
      <button onClick={increment} className="SomeButton">
        Plus
      </button>
      <button onClick={decrement} className="SomeButton">
        Minus
      </button>
    </div>
  );
}

export default UseStateTest;
