import { useState } from "react";
import "./App.css";
import AppRoutes from "./app-routes";
import ROUTES from "./Pages/routes";
import { Router } from "react-router-dom";

function App() {
  // const [chatWithcometChatUser, setChatWithCometChatUser] = useState("kevin");
  // const { loginCommetChatUser, logoutCommetChatUser } =
  //   useMakeCometChatProfile();
  // const [isCometLoggedIn, setIsCometLoggedIn] = useState(false);

  // const loginForCometChat = (expert_username) => {
  //   loginCommetChatUser("kevin")
  //     .then((res) => {
  //       console.log(res, "cometchat user loggedin");
  //       setIsCometLoggedIn(true);
  //       setChatWithCometChatUser(expert_username);
  //     })
  //     .catch((e) => {
  //       setIsCometLoggedIn(false);
  //     });
  // };

  // const logoutForCometChat = () => {
  //   logoutCommetChatUser().then((res) => {
  //     console.log("logout from cometchat", res);
  //     setChatWithCometChatUser(null);
  //   });
  //   setIsCometLoggedIn(false);
  // };
  return (
    <div className="App">
      <AppRoutes routes={ROUTES} />
    </div>
  );
}

export default App;
