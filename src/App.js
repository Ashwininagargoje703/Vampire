import "./App.css";
import AppRoutes from "./app-routes";
import ROUTES from "./Pages/routes";
import { CometChatUI } from "./cometchat-pro-react-ui-kit/CometChatWorkspace/src";
import useMakeCometChatProfile from "./hooks/useMakeCometChatProfile";
import { useEffect } from "react";

function App() {
  const { createCommetChatUser, loginCommetChatUser } =
    useMakeCometChatProfile();
  const user = {
    username: "shaan",
    First_Name: "Shahnawaz",
    last_name: "Mohd",
    userpic_url:
      "https://static.vecteezy.com/system/resources/previews/009/398/577/original/man-avatar-clipart-illustration-free-png.png",
  };

  useEffect(() => {
    createCommetChatUser(user);
    // loginCommetChatUser(user);
  }, []);

  return (
    <div className="App">
      <>
        <div style={{ width: "800px", height: "600px" }}>
          <CometChatUI />
        </div>
        {/* <AppRoutes routes={ROUTES} /> */}
      </>
    </div>
  );
}
export default App;
