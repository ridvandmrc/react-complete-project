import { FC } from "react";
import { TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const SampleDatePicker: FC<{ label: string }> = ({ label }) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DesktopDatePicker
      onChange={(d) => console.log(d)}
      value={Date.now()}
      label={label}
      inputFormat="MM/DD/YYYY"
      renderInput={(params) => <TextField {...params} sx={{ width: "100%" }} />}
    />
  </LocalizationProvider>
);
