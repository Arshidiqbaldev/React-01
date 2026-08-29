import React, { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import viteSvg from "./assets/hero.png";
import vitefav from "./assets/vite.svg";
import Hero from "./component/Hero";
import Counter from "./component/Counter";

function App() {
  const [count, setCount] = useState("");

  return (
    <div className="parent">
      <div className="children">
        <Counter title="title-1: " count={count} setCount={setCount} />

        <Counter title="title-2: " count={count} setCount={setCount} />
      </div>
    </div>
  );
}

export default App;
