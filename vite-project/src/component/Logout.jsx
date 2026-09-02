import React from "react";

function Logout(props) {
  return (
    <div className="children" style={props.style}>
      <h1 className="head-1">{props.title}</h1>
      <p className="para">your current state : {props.state}</p>

      <button className="btn" onClick={props.setLogin}>
        {props.loginState}
      </button>
    </div>
  );
}

export default Logout;
