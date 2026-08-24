import React, { useState } from "react";

import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="Counter-div">
        <h1 className="head-1">Hi Click to count</h1>
        <p id="count" className="counter">
          the count is <span className="red-tag">{count}</span>
        </p>

        <div className="btns-div">
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className="btn"
          >
            Click me
          </button>

          <button
            onClick={() => {
              setCount(0);
            }}
            className="btn-1"
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
