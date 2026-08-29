import React, { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import viteSvg from "./assets/hero.png";
import vitefav from "./assets/vite.svg";
import Hero from "./component/Hero";
import Counter from "./component/Counter";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="parent">
      <Counter 
        title="About"
        isActive={activeIndex === 0}
        onShow={() => {
          setActiveIndex(0);
        }}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Counter>

      <Counter
        title="Lorem"
        isActive={activeIndex === 1}
        onShow={() => {
          setActiveIndex(1);
        }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum est hic
        perspiciatis ex assumenda id non, expedita, doloremque quia error
        cupiditate iusto eveniet, ad adipisci nesciunt aperiam! Aliquam, commodi
        dolorum.
      </Counter>
    </div>
  );
}

export default App;
