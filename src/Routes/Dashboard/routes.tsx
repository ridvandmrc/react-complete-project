import { MainLayout } from "@components/Layout";
import { RouteObject } from "react-router";

export const DashboardRouter: RouteObject[] = [
  { path: "/main", element: <MainLayout /> },
];
