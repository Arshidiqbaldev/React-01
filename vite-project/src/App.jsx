import React, { useState } from "react";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handelClick() {
     setCount(count + 1);
  }

  useEffect(() => {
    alert("Count Render" + count);
    console.log("render");

    return () => {
      alert("Count Unmounted" + count);
      console.log("un render");
    };
  }, [count]);

  return (
    <div className="parent">
      <h1>hello</h1>
      <button onClick={handelClick}>Click</button>
      <p>{count}</p>
    </div>
  );
}

export default App;
