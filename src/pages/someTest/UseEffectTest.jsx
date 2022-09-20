import React, { useState, useEffect } from "react";
import "./testStyle.css";

function UseEffectTest() {
  const [type, setType] = useState("users");
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [type]);
  return (
    <div className="someDiv">
      <h1>Resource: {type}</h1>
      <button className="SomeButton" onClick={() => setType("users")}>
        Users
      </button>
      <button className="SomeButton" onClick={() => setType("todos")}>
        Todos
      </button>
      <button className="SomeButton" onClick={() => setType("posts")}>
        Post
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default UseEffectTest;
