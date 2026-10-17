import React from "react";
import Navbar from "./component/Navbar";
import { Hero } from "./component/Hero";

const App = () => {
  return (
    <main className="flex relative flex-col pt-4 items-center ">
      <Navbar />
      <Hero />
    </main>
  );
};

export default App;
