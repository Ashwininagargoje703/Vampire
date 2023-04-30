import "./App.css";
import { useState } from "react";
import * as React from "react";
import ROUTES from "./Pages/routes";
import AppRoutes from "./app-routes";
import Login from "./Components/Login";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App({ isAuthenticate, setAuth }) {
  return (
    <>
      <AppRoutes routes={ROUTES} />
      {/* <Login /> */}
      {/* <JobListing /> */}
    </>
  );
}

export default App;
