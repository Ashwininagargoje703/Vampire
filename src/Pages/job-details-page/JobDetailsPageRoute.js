import { lazy } from "react";

const JobDetailsPageRoute = {
  path: "/joblisting",
  component: lazy(() => import("./index")),
};

export default JobDetailsPageRoute;
