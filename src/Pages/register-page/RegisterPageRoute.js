import { lazy } from "react";

const RegisterPageRoute = {
  path: "/register",
  component: lazy(() => import("./index")),
};

export default RegisterPageRoute;
