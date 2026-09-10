import React, { useEffect, useState } from "react";

function Timer(props) {
  const [seconds, setSeconds] = useState(0);
  const [miliSeconds, setmiliSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Set interval");
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, [1000]);

    const intervalId2 = setInterval(() => {
      console.log("Set interval");
      setmiliSeconds((prevSeconds) => prevSeconds + 1);
    }, [100]);

    return () => {
      console.log("time to stop");
      clearInterval(intervalId);
      clearInterval(intervalId2);
    };
  }, []);

  return (
    <div className={props.className}>
      <h1 className="head-1">{seconds} </h1>
      <p className="para">{miliSeconds}</p>
    </div>
  );
}

export default Timer;
