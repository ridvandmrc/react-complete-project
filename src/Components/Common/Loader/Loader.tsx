import { FC } from "react";
import { CircularProgress, Stack } from "@mui/material";

interface ILoaderProps {
  show: boolean;
}

export const Loader: FC<ILoaderProps> = ({ show }) => {
  return show ? (
    <Stack
      sx={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        zIndex: 1000,
      }}
    >
      <CircularProgress sx={{ margin: "auto" }} color="primary" />
    </Stack>
  ) : null;
};
