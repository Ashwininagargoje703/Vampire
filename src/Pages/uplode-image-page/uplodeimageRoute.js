import { lazy } from "react";

const UplodeImagPageRoute = {
  path: "/uplode-image",
  component: lazy(() => import("./index")),
};

export default UplodeImagPageRoute;
