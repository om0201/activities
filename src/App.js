import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");

  function activityHandler() {
    var input = event.target.value;
    setInput(input);
  }

  return (
    <div className="App">
      <h1>Activities</h1>
      <input onChange={activityHandler}></input>
      <div>{input}</div>
    </div>
  );
}
