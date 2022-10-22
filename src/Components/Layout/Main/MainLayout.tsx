import { FC } from "react";
import { Stack, Typography, Button } from "@mui/material";
import { Navbar } from "@components/Dashboard";
import { SearchCountries } from "@components/Common";

export const MainLayout: FC = () => {
  return (
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
        <img
          src="./carousel-1.jpg"
          alt="carousel1"
          style={{ width: "100%", height: "100%" }}
        />
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
          >
            BOOK NOW
          </Button>
        </Stack>
      </Stack>
      <SearchCountries />
    </Stack>
  );
};
