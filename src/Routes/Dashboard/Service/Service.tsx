import { FC, ReactNode } from "react";
import { Typography, Stack, Grid } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";

const iconProps = {
  margin: "1rem auto",
  width: "3rem",
  height: "3rem",
  color: "secondary.main",
  border: "2px solid",
  borderColor: "secondary.main",
  borderRadius: "0.3rem",
  padding: "0.5rem",
};

const AboutContent: FC<{
  title: ReactNode;
  content: ReactNode;
  icon: ReactNode;
}> = ({ title, content, icon }) => (
  <Stack
    alignItems="center"
    sx={{
      padding: "1rem",
    }}
  >
    {icon}
    <Typography variant="h5">{title}</Typography>
    <Typography variant="h6" sx={{ width: "80%", marginTop: "0.5rem" }}>
      {content}
    </Typography>
  </Stack>
);

export const Service = () => {
  return (
    <Stack sx={{ padding: "2rem" }}>
      <Stack justifyContent="center" direction="column" alignItems="center">
        <Typography
          variant="h4"
          color="secondary.main"
          sx={{ fontSize: "calc(1rem + 2vw)" }}
        >
          SERVİCES
        </Typography>
        <Typography
          variant="h2"
          color="primary.main"
          sx={{ fontSize: "calc(1rem + 2vw)" }}
        >
          Tours & Travel Services
        </Typography>
      </Stack>
      <Grid container columns={7} justifyContent="center" marginTop="2rem">
        <Grid
          item
          lg={2}
          md={3}
          sx={{ backgroundColor: "background.paper", margin: ".5rem" }}
        >
          <AboutContent
            title="Travel Guide"
            content="Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore"
            icon={<AcUnitIcon sx={iconProps} />}
          />
        </Grid>
        <Grid
          item
          lg={2}
          md={3}
          sx={{ backgroundColor: "background.paper", margin: "1rem" }}
        >
          <AboutContent
            title="Travel Guide"
            content="Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore"
            icon={<EmojiNatureIcon sx={iconProps} />}
          />
        </Grid>
        <Grid
          item
          lg={2}
          md={3}
          sx={{ backgroundColor: "background.paper", margin: "1rem" }}
        >
          <AboutContent
            title="Travel Guide"
            content="Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore"
            icon={<WbSunnyIcon sx={iconProps} />}
          />
        </Grid>
        <Grid
          item
          lg={2}
          md={3}
          sx={{ backgroundColor: "background.paper", margin: "1rem" }}
        >
          <AboutContent
            title="Travel Guide"
            content="Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore"
            icon={<AcUnitIcon sx={iconProps} />}
          />
        </Grid>
        <Grid
          item
          lg={2}
          md={3}
          sx={{ backgroundColor: "background.paper", margin: "1rem" }}
        >
          <AboutContent
            title="Travel Guide"
            content="Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore"
            icon={<EmojiNatureIcon sx={iconProps} />}
          />
        </Grid>
        <Grid
          item
          lg={2}
          md={3}
          sx={{ backgroundColor: "background.paper", margin: "1rem" }}
        >
          <AboutContent
            title="Travel Guide"
            content="Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore"
            icon={<WbSunnyIcon sx={iconProps} />}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};
