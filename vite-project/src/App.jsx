import React, { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import viteSvg from "./assets/hero.png";
import vitefav from "./assets/vite.svg";
import Hero from "./component/Hero";
import Counter from "./component/Counter";
import Login from "./component/Login";
import Logout from "./component/Logout";

// function App() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className="parent">
//       <Counter
//         title="About"
//         isActive={activeIndex === 0}
//         onShow={() => {
//           setActiveIndex(0);
//         }}
//       >
//         With a population of about 2 million, Almaty is Kazakhstan's largest
//         city. From 1929 to 1997, it was its capital city.
//         <img src={viteSvg} alt={viteSvg} />
//       </Counter>

//       <Counter
//         title="Lorem"
//         isActive={activeIndex === 1}
//         onShow={() => {
//           setActiveIndex(1);
//         }}
//       >
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum est hic
//         perspiciatis ex assumenda id non, expedita, doloremque quia error
//         cupiditate iusto eveniet, ad adipisci nesciunt aperiam! Aliquam, commodi
//         dolorum.
//         <img src={vitefav} alt={vitefav} />
//       </Counter>

//       <Counter
//         title="ipsum"
//         isActive={activeIndex === 2}
//         onShow={() => {
//           setActiveIndex(2);
//         }}
//       >
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum est hic
//         perspiciatis ex assumenda id non, expedita, doloremque quia error
//         cupiditate iusto eveniet, ad adipisci nesciunt aperiam! Aliquam, commodi
//         dolorum.
//       </Counter>
//     </div>
//   );
// }

function App() {
  const [isLogin, setLogin] = useState(false);

  if (isLogin) {
    return (
      <div className="parent">
        <Login
          loginState="logOut Now"
          setLogin={() => {
            setLogin(false);
          }}
        >
          <h1 className="head-1">you are login</h1>

          <p className="para">your current state : Login </p>

          <img src={viteSvg} alt="" />

          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            doloribus sequi! Voluptatem, similique necessitatibus minima optio
            ut veritatis.
          </p>
        </Login>
      </div>
    );
  }

  return (
    <div className="parent">
      {/* {isLogin ? (
        <Login
          loginState="logOut Now"
          setLogin={() => {
            setLogin(false);
          }}
        >
          <h1 className="head-1">you are login</h1>
          <p className="para">your current state : Login </p>

          <img src={viteSvg} alt="" />
        </Login>
      ) : (
        <Logout
          title="Login First "
          state="LogOut"
          loginState="logIn Now"
          style={{ background: "#0000a0" }}
          setLogin={() => {
            setLogin(true);
          }}
        ></Logout>
      )} */}

      <Logout
        title="Login First "
        state="LogOut"
        loginState="logIn Now"
        style={{ background: "#262631" }}
        setLogin={() => {
          setLogin(true);
        }}
      ></Logout>
    </div>
  );
}

export default App;
