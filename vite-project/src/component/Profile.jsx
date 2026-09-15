import React, { useContext } from "react";

import { UserContext } from "../App";

function Profile() {
  const { theme, setTheme } = useContext(UserContext);

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <div className="children">
      <h1 className={theme==="light"? "c1" : "c2"} >{theme}</h1>
      <p className={theme==="light"? "c1" : "c2"} ></p>
      <button className="btn" onClick={toggleTheme}>
        Change
      </button>
    </div>
  );
}

export default Profile;
