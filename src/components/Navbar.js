import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { DeleteContext } from "./context/ContextProvider";
import Alert from "react-bootstrap/Alert";

const Navbar = () => {
  const { dlttask, setDlttask } = useContext(DeleteContext);
  console.log(dlttask);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "#232f3e" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ textAlign: "center" }}
            >
              Redux To-Do app
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      {dlttask ? (
        <Alert variant="danger" onClose={() => setDlttask(false)} dismissible>
          <Alert.Heading>할 일이 삭제되었습니다</Alert.Heading>
        </Alert>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
