import React, { useEffect, useState } from "react";

function Logger() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Component randered: ${count}`, count);
  });

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >Click</button>
    </div>
  );
}

export default Logger;
