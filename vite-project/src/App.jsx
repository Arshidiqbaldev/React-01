import React, { useState } from "react";
import { useEffect } from "react";
import Logger from "./component/Logger";
import Timer from "./component/Timer";
import "./App.css"
function App() {

  return (
    <div className="parent">
     {/* <Logger/> */}
     <Timer className="children"/>
    </div>
  );
}

export default App;
