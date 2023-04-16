import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import AppRoutes from "./app-routes";
import ROUTES from "./Pages/routes";

function App() {
  return (
    <div className="App">
      <>
        <AppRoutes routes={ROUTES} />
      </>
    </div>
  );
}

export default App;
