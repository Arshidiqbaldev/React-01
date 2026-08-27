import React, { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import viteSvg from "./assets/hero.png";
import vitefav from "./assets/vite.svg";
import Hero from "./component/Hero";

function App() {
  return (
    <div className="parent">
      <Navbar>
        <img src={viteSvg} alt={viteSvg} className="logo" />

        <ul className="list">
          <li>
            <a href="#Home">Home</a>
          </li>

          <li>
            <a href="About">About</a>
          </li>

          <li>
            <a href="Contact">Contact</a>
          </li>

          <li>
            <a href="Email">Email</a>
          </li>
        </ul>

        <button className="btn">Contact</button>
      </Navbar>

      <Hero/>


    </div>
  );
}

export default App;
