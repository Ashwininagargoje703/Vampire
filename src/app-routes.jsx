import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = ({ routes }) => {
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
      {/* Add a fallback route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

AppRoutes.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      component: PropTypes.elementType.isRequired,
    })
  ).isRequired,
};

export default AppRoutes;
