import React, { useContext, useState } from "react";

import { UserContext } from "../App";

function Profile() {
  const { theme, setTheme } = useContext(UserContext);
  const [my, setCar] = useState({
    car: "bmw",
    model: "1990",
    color: "red",
  });

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    setCar((previousState) => {
      return { ...previousState, color: "blue", model: "2000", car: "Audi" };
    });
  }
  return (
    <div className="children">
      <h1 className={theme === "light" ? "c1" : "c2"}>{theme}</h1>
      <p className={theme === "light" ? "c1" : "c2"}>
        {my.car} , {my.model} , {my.color}
      </p>

      <button className="btn" onClick={toggleTheme}>
        Change
      </button>
    </div>
  );
}

export default Profile;
