import React from "react";

const Panel = ({ title, isActive, children, onShow }) => {
  return (
    <div>
      <h3>{title}</h3>

      {isActive ? children : <button onClick={onShow}>Click</button>}
    </div>
  );
};

export default Panel;
