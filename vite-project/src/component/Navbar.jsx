import React from 'react';
import "./Navbar.css"


function Navbar(props) {
  return (
    <header className='header' >

        {props.children}
      
    </header>
  )
}

export default Navbar

