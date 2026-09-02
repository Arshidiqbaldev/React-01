import React from "react";

function Login(props) {
  return (
    <div className="children">
      {props.children}

      <button className="btn" onClick={props.setLogin}>
        {props.loginState}
      </button>
    </div>
  );
}

export default Login;
