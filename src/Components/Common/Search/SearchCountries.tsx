import { FC } from "react";
import {
  Button,
  FormControl,
  Grid,
  GridProps,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { SampleDatePicker } from "../DesktopDatepicker";




const SampleSelect: FC<{ label: string; matches: boolean }> = ({
  label,
  matches,
}) => (
  <FormControl fullWidth sx={{ margin: matches ? "0" : "0 1vw" }}>
    <InputLabel
      id="demo-simple-select-label"
      sx={{ backgroundColor: "background.paper" }}
    >
      {label}
    </InputLabel>
    <Select
      variant="outlined"
      labelId="demo-simple-select-label"
      id="demo-simple-select"
    >
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  </FormControl>
);

type ISearchGridProps = {
  [type in keyof GridProps]?: GridProps[type];
};

const SearchGrid: FC<ISearchGridProps> = ({ children, ...props }) => (
  <Grid lg={1} md={3} sm={3} xs={6} {...props}>
    {children}
  </Grid>
);

export const SearchCountries = () => {
  const matches = useMediaQuery((theme) =>
    (theme as any).breakpoints.down("lg")
  );

  return (
    <Stack
      direction={matches ? "column" : "row"}
      alignItems="center"
      justifyContent={matches ? "center" : "space-between"}
      sx={{
        margin: "0 auto",
        marginTop: "-3%",
        backgroundColor: "background.paper",
        zIndex: 2,
        padding: matches ? "1rem 0.1rem" : "1rem",
        overflow: "hidden",
        boxSizing: "border-box",
        /* minWidth: "900px", */
        width: matches ? "100%" : "80vw",
        boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
      }}
    >
      <Grid container columns={6} justifyContent="space-between" spacing={1}>
        <SearchGrid item>
          <SampleSelect matches label="Destination" />
        </SearchGrid>
        <SearchGrid item>
          <SampleDatePicker label="Start Date" />
        </SearchGrid>
        <SearchGrid item>
          <SampleDatePicker label="End Date" />
        </SearchGrid>
        <SearchGrid item>
          <SampleSelect matches label="Duration" />
        </SearchGrid>
        <SearchGrid
          lg={1}
          md={6}
          sm={6}
          xs={6}
          item
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{
              padding: "0 1rem",
              height: "3rem",
              color: "background.paper",
              minWidth: "6rem",
              width: "100%",
            }}
          >
            Submit
          </Button>
        </SearchGrid>
      </Grid>
    </Stack>
  );
};
