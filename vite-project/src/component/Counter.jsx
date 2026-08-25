import React from "react";


function Counter(props) {
  return (
    <div className={props.classN}>
      {props.children}
      <button onClick={props.handleClick} className="btn">
        {props.text}
      </button>
    </div>
  );
}

export default Counter;
