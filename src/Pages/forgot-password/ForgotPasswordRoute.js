import { lazy } from "react";

const ForgotPasswordRoute = {
  path: "/forgot-password",
  component: lazy(() => import("./index")),
};

export default ForgotPasswordRoute;
