import { lazy } from "react";

const SavedPageRoute = {
  path: "/saved",
  component: lazy(() => import("./index")),
};

export default SavedPageRoute;
