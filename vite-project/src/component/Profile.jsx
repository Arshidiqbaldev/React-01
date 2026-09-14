import React, { useContext } from "react";

import { UserContext } from "../App";

function Profile() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="children">
      <h1 className="head-1">{user.name}</h1>
      <p className="para">{user.lorem}</p>
      <button
        className="btn"
        onClick={() => {
          setUser({
            name: "Ahmed",
            rollNo: "12",
            lorem:
              "Lnsectetur adipisicing elit. Debitis, aut itaque quidem dolor adipisci incidunt temporibus, inventore doloribus voluptatibus consequuntur officiis aliquam, aspernatur non! Neque nemo dicta exercitationem voluptatum culpa.",
          });
        }}
      >
        Click
      </button>
    </div>
  );
}

export default Profile;
