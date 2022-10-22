import { useRoutes } from "react-router";
import { DashboardRouter } from "./Dashboard";
import { OtherRouters } from "./Other";

export const Route = () => {
  return useRoutes([...DashboardRouter, ...OtherRouters]);
};
