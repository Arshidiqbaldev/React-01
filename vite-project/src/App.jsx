import React from 'react'
import './App.css'
import Navbar from './component/Navbar';
import Card from './component/Card';
import Counter from './component/Counter';
import Clock from './component/Clock';
import vite from './assets/hero.png';
import react from './assets/react.svg';
import viteSvg from './assets/vite.svg';



function App() {

  return (
    <>
      <div className="parent">


        <Navbar />
        <Card name="arshid" image={vite} desc="Helping businesses establish a strong online presence through modern, high-performing WordPress websites." link="https://arshidiqbal.net" style={{ "border-radius": "12px", "background": "#0067f620" }} />
        <Card name="Ali" image={react} desc="Helping businesses establish a strong online presence through modern, high-performing WordPress websites." link="https://arshidiqbal.net" style={{ "border-radius": "12px", "background": "#00a0f620" }} />
        <Card name="Zaid" image={viteSvg} desc="Helping businesses establish a strong online presence through modern, high-performing WordPress websites." link="https://arshidiqbal.net/contact.html" style={{ "border-radius": "12px", "background": "#ea5bfc20" }} />
        <Counter />
        <Clock />

      </div>

    </>
  );
}






export default App;



