import { lazy } from "react";

const QuizePageRoute = {
  path: "/quize",
  component: lazy(() => import("./index")),
};

export default QuizePageRoute;
