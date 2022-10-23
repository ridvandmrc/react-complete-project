import { Navigate, RouteObject } from "react-router";

export const OtherRouters: RouteObject[] = [
  { path: "*", element: <Navigate to="/main/home" /> },
];
