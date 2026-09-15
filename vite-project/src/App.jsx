import React, { createContext, useState } from "react";
import { useEffect } from "react";
import Logger from "./component/Logger";
import Timer from "./component/Timer";
import "./App.css";
import Datafitch from "./component/Datafitch";
import Profile from "./component/Profile";
import Navbar from "./component/Navbar";
// function App() {
//   const numbs = [
//     {
//       userId: 1,
//       id: 1,
//       title:
//         "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//       body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//     },
//     {
//       userId: 1,
//       id: 2,
//       title: "qui est esse",
//       body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
//     },
//     {
//       userId: 1,
//       id: 3,
//       title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//       body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
//     },

//     {
//       userId: 1,
//       id: 1,
//       title:
//         "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//       body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//     },
//     {
//       userId: 1,
//       id: 2,
//       title: "qui est esse",
//       body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
//     },
//     {
//       userId: 1,
//       id: 3,
//       title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//       body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
//     },
//   ];

//   console.log(numbs);

//   return (
//     <div className="parent">
//       {/* <Logger/> */}
//       {/* <Timer className="children"/> */}
//       {/* <Datafitch/> */}

//       <div className="children">
//         <ul>
//           {numbs.map((n) => (
//             <li className="para" key={n.id}>
//               {n.body.toUpperCase()}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

const UserContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div
      className="parent"
      style={{ backgroundColor: theme === "light" ? "black" : "white" }}
    >
      <UserContext.Provider value={{ theme, setTheme }}>
        <Navbar />
      </UserContext.Provider>
    </div>
  );
}

export default App;

export { UserContext };
