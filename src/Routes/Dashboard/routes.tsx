import { MainLayout } from "@components/Layout";
import { RouteObject } from "react-router";
import { About } from "./About";
import { Home } from "./Home";
import { Service } from "./Service";

export const DashboardRouter: RouteObject[] = [
  {
    path: "/main",
    element: <MainLayout />,
    children: [
      { path: "/main/home", element: <Home /> },
      { path: "/main/about", element: <About /> },
      { path: "/main/service", element: <Service /> },
    ],
  },
];
