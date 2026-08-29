import React from "react";


function Counter(props) {
  return (
    <>

      <input type="text" name="input" id="input" onChange={(e)=>{
        props.setCount(e.target.value.toString());
      }} />

     <p className="para" >{props.title}{props.count}</p>
    
    </>
  );
}

export default Counter;
