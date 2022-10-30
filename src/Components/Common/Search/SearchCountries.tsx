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
import { useService } from "@hooks";
import { JsonPlaceholder, jsonPlaceholder } from "@service";

const SampleSelect: FC<{
  label: string;
  matches: boolean;
  data: JsonPlaceholder[];
}> = ({ label, matches, data }) => (
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
      {data?.slice(0, 10).map((item, index) => (
        <MenuItem
          key={`index-${index}-${item.id}`}
          disabled={item?.isCompleted()}
          value={item.id}
        >
          {item.title}
        </MenuItem>
      ))}
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

  const { data } = useService<JsonPlaceholder[]>(
    jsonPlaceholder.getPlaceholder(),
    JsonPlaceholder
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
          <SampleSelect data={data} matches label="Destination" />
        </SearchGrid>
        <SearchGrid item>
          <SampleDatePicker label="Start Date" />
        </SearchGrid>
        <SearchGrid item>
          <SampleDatePicker label="End Date" />
        </SearchGrid>
        <SearchGrid item>
          <SampleSelect data={data} matches label="Duration" />
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
