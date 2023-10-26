import { lazy } from "react";

const ApplyPageRoute = {
  path: "/apply-for-job",
  component: lazy(() => import("./index")),
};

export default ApplyPageRoute;
