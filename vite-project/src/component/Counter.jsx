import React from "react";

function Counter({ title, isActive, children, onShow }) {
  return (
    <div className="children">
      <h3 className="head-1">{title}</h3>
      {isActive ? (
        <div className="para">{children}</div>
      ) : (
        <button className="btn" onClick={onShow}>
          Show
        </button>
      )}
    </div>
  );
}

export default Counter;
