import "./App.css";
import { useState } from "react";
import * as React from "react";
import HomePage from "./Components/home";
import JobListing from "./Components/JobListing";
import ROUTES from "./Pages/routes";
import AppRoutes from "./app-routes";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App({ isAuthenticate, setAuth }) {
  return (
    <>
      <AppRoutes routes={ROUTES} />
      {/* <JobListing /> */}
    </>
  );
}

export default App;
