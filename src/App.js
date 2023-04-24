import "./App.css";
import { useState } from "react";
import * as React from "react";

import HomeMainPage from "./Pages/home-page";
import Footer from "./Components/before-login-home/footer";
import FindJob from "./Components/Find-Job";
import IconButton from "@mui/material/IconButton";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App({ isAuthenticate, setAuth }) {
  return (
    <>
      <HomeMainPage />
    </>
  );
}

export default App;
