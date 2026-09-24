import React, { useState } from "react";
import "./App.css";
import Datafitch from "./component/Datafitch";
import Panel from "./component/Panel";

const App = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="parent">
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => {
          setActiveIndex(0);
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          soluta?
        </p>
      </Panel>

      <Panel
        title="Contact"
        isActive={activeIndex === true}
        onShow={() => {
          setActiveIndex(true);
        }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          provident sapiente omnis expedita est inventore.
        </p>
      </Panel>
    </div>
  );
};

export default App;
