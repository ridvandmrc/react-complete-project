import { FC, ReactNode, useRef, useState } from "react";
import {
  IconButton,
  Menu,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {  useNavigate } from "react-router";

const MenuItem: FC<{
  children: ReactNode;
  inMenu?: boolean;
  onClick?: () => void;
}> = ({ children, inMenu = false, onClick }) => {
  return (
    <Typography
      onClick={onClick}
      variant="h6"
      sx={{
        marginRight: !inMenu ? 3 : 0,
        color: "primary.main",
        whiteSpace: "nowrap",
        cursor: "pointer",
        padding: inMenu ? "1rem" : 0,
        borderBottom: inMenu ? "1px solid lightgray" : "none",
      }}
    >
      {children}
    </Typography>
  );
};



export const Navbar = () => {
  const matches = useMediaQuery((theme) =>
    (theme as any).breakpoints.down("lg")
  );
  const menuRef = useRef(null);
  const [menuVisibility, setMenuVisibility] = useState(false);
  const navigate = useNavigate();

  const MenuList: FC<{ inMenu?: boolean }> = ({ inMenu }) => (
    <>
      <MenuItem inMenu={inMenu} onClick={()=> navigate('./home')}>Home</MenuItem>
      <MenuItem inMenu={inMenu} onClick={()=> navigate('./service')}>Service</MenuItem>
      <MenuItem inMenu={inMenu} /* onClick={()=> navigate()} */>Tour Package</MenuItem>
      <MenuItem inMenu={inMenu} /* onClick={()=> navigate()} */>Tour Package</MenuItem>
      <MenuItem inMenu={inMenu} /* onClick={()=> navigate()} */>Pages</MenuItem>
      <MenuItem inMenu={inMenu} /* onClick={()=> navigate()} */>Contact Us</MenuItem>
    </>
  );

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        margin: "0 auto",
        marginBottom: "-30px",
        backgroundColor: "background.paper",
        zIndex: 2,
        padding: "1rem",
        overflow: "hidden",
        boxSizing: "border-box",
        width: matches ? "100%" : "initial",
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontSize: "calc(2rem + 1vw)", color: "secondary.main" }}
      >
        <span style={{ color: "#212121" }}>TRAVELL</span>ER
      </Typography>
      {!matches ? (
        <Stack direction="row" sx={{ marginLeft: "2rem" }}>
          <MenuList />
        </Stack>
      ) : (
        <>
          <IconButton
            onClick={() => setMenuVisibility(!menuVisibility)}
            ref={menuRef}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            open={menuVisibility}
            anchorEl={menuRef.current}
            onClose={() => setMenuVisibility(false)}
          >
            <MenuList inMenu />
          </Menu>
        </>
      )}
    </Stack>
  );
};
