import { FC } from "react";
import { Stack, Typography, Button } from "@mui/material";
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

  return (
    <>
      <Loader show={loader > 0} />
      <Notification message={notification.message} />
      <Stack>
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
      <Stack width={1} sx={{ marginTop: "1rem", backgroundColor: "grey.900" }}>
        <Outlet />
      </Stack>
    </>
  );
};
