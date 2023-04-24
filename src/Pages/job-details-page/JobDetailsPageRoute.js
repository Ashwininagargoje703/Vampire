import { lazy } from "react";

const JobDetailsPageRoute = {
  path: "/jobdetails/:id",
  component: lazy(() => import("./index")),
};

export default JobDetailsPageRoute;
