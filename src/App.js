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
  var [acts, setActs] = useState("");

  function activityHandler(event) {
    var activity = event.target.value;
    var acts = activities[activity];
    setActs(acts);
  }

  function emojiHandler(activity) {
    var acts = activities[activity];
    setActs(acts);
  }

  if (acts === undefined) {
    acts = "We donot have this activity in our database";
  }

  var performingActs = Object.keys(activities);

  return (
    <div className="App">
      <h1>Activities</h1>
      <input onChange={activityHandler}></input>
      <h2>{acts}</h2>
      <h3>Activities we have</h3>
      {performingActs.map(function (emoji) {
        return (
          <span
            onClick={() => emojiHandler(emoji)}
            style={{ fontSize: "30px", padding: "0.3rem", cursor: "pointer" }}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
