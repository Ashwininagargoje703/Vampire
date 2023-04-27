import { lazy } from "react";

const JobSearchPageRoute = {
  path: "/jobsearch",
  component: lazy(() => import("./index")),
};

export default JobSearchPageRoute;
