import { FC, useEffect, useRef, useState } from "react";
import { Stack, Typography, Button, useMediaQuery } from "@mui/material";
import { Navbar } from "@components/Dashboard";
import { Loader, SearchCountries, Notification } from "@components/Common";
import { Outlet } from "react-router";
import { HeaderBackground } from "@assets";
import { useSelector } from "react-redux";
import { useLoader } from "@store";
import { addMessage, useNotification } from "src/Store/notification-slice";

export const MainLayout: FC = () => {
  const loader = useSelector(useLoader);
  const notification = useSelector(useNotification);
  const headerRef = useRef<HTMLElement>();
  const matches = useMediaQuery((theme) =>
    (theme as any).breakpoints.down("lg")
  );
  const [showSearchCountries, setShowSearchCountries] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      const { scrollY } = window;
      if (
        headerRef.current?.clientHeight &&
        scrollY >= headerRef.current?.clientHeight
      ) {
        setShowSearchCountries(true);
      } else {
        setShowSearchCountries(false);
      }
    });
  }, []);

  return (
    <>
      <Loader show={loader > 0} />
      <Notification
        message={notification.message}
        severity={notification.notificationType}
      />
      <Stack ref={headerRef}>
        <Navbar />
        <Stack
          sx={{
            width: "100vw",
            height: "40vw",
            position: "relative",
            minHeight: "18rem",
          }}
        >
          <HeaderBackground />
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,.5)",
            }}
          >
            <Typography
              variant="h3"
              sx={{ color: "background.paper", fontSize: "calc(1rem + 3vw)" }}
            >
              TOURS & TRAVEL
            </Typography>
            <Typography
              variant="h1"
              sx={{ color: "background.paper", fontSize: "calc(1rem + 4vw)" }}
            >
              Let's Discover The
            </Typography>
            <Typography
              variant="h1"
              sx={{ color: "background.paper", fontSize: "calc(1rem + 4vw)" }}
            >
              World Together
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                width: "10rem",
                height: "3rem",
                marginTop: "3rem",
                color: "background.paper",
              }}
              onClick={() => addMessage("Book now")}
            >
              BOOK NOW
            </Button>
          </Stack>
        </Stack>
        <SearchCountries />
      </Stack>

      <Stack
        sx={{
          display: "initial",
          transform: showSearchCountries
            ? `translateY(0px) translateX(${matches ? "0" : "50%"})`
            : `translateY(-55px) translateX(${matches ? "0" : "50%"})`,

          opacity: showSearchCountries ? "1" : "0",
          transition: "opacity,transform ease 300ms",
          position: "fixed",
          top: matches ? "0" : "35px",
          right: matches ? "0" : "50%",
        }}
      >
        <SearchCountries />
      </Stack>
      <Stack width={1} sx={{ marginTop: "1rem", backgroundColor: "grey.900" }}>
        <Outlet />
      </Stack>
    </>
  );
};
