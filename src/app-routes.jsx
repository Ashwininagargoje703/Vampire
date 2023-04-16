import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/home";

function App() {
  const routes = [
    { path: "/", component: HomePage },
    // ...
  ];

  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <route.component />
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
}

export default App;
