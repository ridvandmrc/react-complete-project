import { FC } from "react";
import { Alert, AlertColor, Snackbar } from "@mui/material";
import { addMessage } from "src/Store/notification-slice";

export const Notification: FC<{ message: string; severity: AlertColor }> = ({
  message,
  severity = "info",
}) => {
  return (
    <Snackbar
      open={!!message}
      onClose={() => addMessage("")}
      message={message}
      autoHideDuration={3000}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
    >
      <Alert variant="filled" severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};
