import React, { useState } from "react";
import "./App.css";
import Counter from "./component/Counter";

function App() {
  const [count, setCount] = useState(0);
  const [scaled, setScaled] = useState(false);
  function clickMe() {
    setCount(count + 1);
    setScaled(true);
  }
  return (
    <div className="parent">
      <Counter classN="children" handleClick={clickMe} text="click me">
        <h1 className={`head-1 ${scaled ? "scale-1" : ""}`}>{count}</h1>
      </Counter>
    </div>
  );
}

export default App;
