import React from 'react'
import './App.css'
import Navbar from './component/Navbar';
import Card from './component/Card';

function App() {

  return (
    <>
      <div className="parent">


        <Navbar />

        <Card name="arshid" desc="Helping businesses establish a strong online presence through modern, high-performing WordPress websites." link="https://arshidiqbal.net" style={{ "border-radius": "10px", "background": "#F6090020" }} />
        <Card name="Ali" desc="Helping businesses establish a strong online presence through modern, high-performing WordPress websites." link="https://arshidiqbal.net" style={{ "border-radius": "10px", "background": "#00a0f620" }} />
        <Card name="Zaid" desc="Helping businesses establish a strong online presence through modern, high-performing WordPress websites." link="https://arshidiqbal.net" style={{ "border-radius": "10px", "background": "#d900f620" }} />


      </div>
    </>
  );
}





export default App;



