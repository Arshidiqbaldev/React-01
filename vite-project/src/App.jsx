import React, { useState } from "react";
import "./App.css";
import Datafitch from "./component/Datafitch";
import Panel from "./component/Panel";

const App = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="parent">
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => {
          setActiveIndex(0);
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        harum.
      </Panel>

      <Panel
        title="Contact"
        isActive={activeIndex === 1}
        onShow={() => {
          setActiveIndex(1);
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident
        sapiente omnis expedita est inventore.
      </Panel>
    </div>
  );
};

export default App;
