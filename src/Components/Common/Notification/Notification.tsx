import { FC } from "react";
import { Snackbar } from "@mui/material";
import { addMessage } from "src/Store/notification-slice";

export const Notification: FC<{ message: string }> = ({ message }) => {
  return (
    <Snackbar
      open={!!message}
      onClose={() => addMessage("")}
      message={message}
      autoHideDuration={3000}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
    />
  );
};
