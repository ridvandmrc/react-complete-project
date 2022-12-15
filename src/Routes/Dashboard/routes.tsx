import { Navbar } from "@components/Dashboard";
import { MainLayout } from "@components/Layout";
import { Stack} from "@mui/material";
import { useRef} from "react";
import { Outlet, RouteObject } from "react-router";
import { About } from "./About";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { Service } from "./Service";


const NavbarWithoutMainLayout = () => {
  const headerRef = useRef<HTMLElement>();
  
  return (
    <>
  <Stack ref={headerRef}>
    <Navbar />
  </Stack>
  <Stack width={1} sx={{ marginTop: "2rem", backgroundColor: "grey.900" }}>
        <Outlet />
  </Stack>
  </>
  )
}
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
  {
    path: "/main",
    element: <NavbarWithoutMainLayout />,
    children: [
      { path: "contact", element: <Contact /> }
    ],
  }
];
