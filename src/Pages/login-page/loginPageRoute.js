import { lazy } from "react";

const LoginPageRoute = {
  path: "/login",
  component: lazy(() => import("./index")),
};

export default LoginPageRoute;
