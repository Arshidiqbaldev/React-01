import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [uName, usetName] = useState("");

  function handleCLick(e) {
    
    usetName(e.target.value);
  }

  return (
    <div className="parent">
      <div className="children">
        <input type="text" value={uName} onChange={handleCLick} />

        <h3>Name: {uName}</h3>
      </div>
    </div>
  );
};

export default App;
