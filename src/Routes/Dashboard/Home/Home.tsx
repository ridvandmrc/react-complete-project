import { AboutImage, MosqueImage, ShipImage } from "@assets";
import { Button, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { FC } from "react";

export const Home: FC = () => {
  const matches = useMediaQuery((theme) =>
    (theme as any).breakpoints.down("sm")
  );

  console.log("loo: ", matches);
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          width: "fit-content",
          margin: "1rem auto",
          color: "primary.main",
        }}
      >
        Your Vacation
      </Typography>
      <Stack
        direction={matches ? "column" : "row"}
        sx={{
          width: "90%",
          margin: "2rem auto",
          boxSizing: "border-box",
        }}
      >
        <Stack sx={{ width: 1, maxHeight: "60rem" }}>
          <AboutImage />
        </Stack>
        <Stack sx={{ width: 1, marginLeft: matches ? "0" : "-10rem" }}>
          <Stack
            sx={{
              backgroundColor: "background.paper",
              margin: matches ? "0 auto" : "0",
              marginTop: matches ? "-10rem" : "10rem",
              padding: "2rem",
              width: matches ? "80%" : "initial",
            }}
          >
            <Typography variant="h6" color="secondary.main">
              Your Vacation
            </Typography>
            <Typography variant="h3" color="primary.main">
              We Provide Best Tour Packages In Your Budget
            </Typography>
            <Typography variant="h6" color="primary.100">
              Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore
              sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet
              dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed
              diam duo
            </Typography>
            <Grid container columns={2} columnSpacing={4} rowSpacing={4}>
              <Grid item lg={1} md={1}>
                <MosqueImage />
              </Grid>
              <Grid item lg={1} md={1}>
                <ShipImage />
              </Grid>
            </Grid>
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
              Book Now
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
