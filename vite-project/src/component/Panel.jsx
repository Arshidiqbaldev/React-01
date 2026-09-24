import React from "react";

const Panel = ({ title, isActive, children, onShow }) => {
  return (
    <div className="children" >
      <h2>{title}</h2>

      {isActive ? children : <button onClick={onShow}>Click</button>}
    </div>
  );
};

export default Panel;
