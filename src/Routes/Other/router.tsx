import { FC } from "react";
import { RouteObject } from "react-router";
import { MainLayout } from "@components/Layout";

export const OtherRouters: RouteObject[] = [
  { path: "*", element: <MainLayout /> },
];
