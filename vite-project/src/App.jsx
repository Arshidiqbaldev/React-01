import React, { useState } from "react";
import { useEffect } from "react";
import Logger from "./component/Logger";
import Timer from "./component/Timer";
import "./App.css"
import Datafitch from "./component/Datafitch";
function App() {

  return (
    <div className="parent">
     {/* <Logger/> */}
     {/* <Timer className="children"/> */}
     <Datafitch/>
     
    </div>
  );
}

export default App;
