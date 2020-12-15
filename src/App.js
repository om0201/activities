import React, { useState } from "react";
import "./styles.css";

const activities = {
  "🤺": "fencing",
  "🏇": "horse racing",
  "⛷️": "skiing",
  "🏂": "snowboarding",
  "🏌️": "golf",
  "🏄": "surfing",
  "🚣": "boating",
  "🏊": "swimming",
  "🏋️ ": "weight lifting",
  "🚴": "cycling",
  "🤼": "wrestling"
};

export default function App() {
  const [input, setInput] = useState("");

  function activityHandler() {
    var name = event.target.value;
    var act = activities[name];

    setInput(act);
  }

  return (
    <div className="App">
      <h1>Activities</h1>
      <input onChange={activityHandler}></input>
      <h2>{input}</h2>
    </div>
  );
}
