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
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "service", element: <Service /> },
    ],
  },
];
