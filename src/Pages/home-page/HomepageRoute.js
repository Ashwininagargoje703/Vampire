import { lazy } from "react";

const HomePageRoute = {
  path: "/",
  component: lazy(() => import("./index")),
};

export default HomePageRoute;
