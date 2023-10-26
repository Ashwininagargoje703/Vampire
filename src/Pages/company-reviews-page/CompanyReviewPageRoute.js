import { lazy } from "react";

const CompanyReviewPageRoute = {
  path: "/company-review",
  component: lazy(() => import("./index")),
};

export default CompanyReviewPageRoute;
