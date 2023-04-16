import "./App.css";
import { useState } from "react";
import { CometChatUI } from "./cometchat-pro-react-ui-kit/CometChatWorkspace/src";
import useMakeCometChatProfile from "./hooks/useMakeCometChatProfile";
import AppRoutes from "./app-routes";
import ROUTES from "./Pages/routes";
import Navbar from "./Components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes routes={ROUTES} />
    </div>
  );
}

export default App;
