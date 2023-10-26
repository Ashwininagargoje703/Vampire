import { lazy } from "react";

const CometChatPageRoute = {
  path: "/chat",
  component: lazy(() => import("./index")),
};

export default CometChatPageRoute;
