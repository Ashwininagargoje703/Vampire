import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawerItems = (
    <List>
      <ListItem button>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="About" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Services" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Contact" />
      </ListItem>
    </List>
  );

  const desktopNavbar = (
    <Toolbar>
      <Button
        color="inherit"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Home
      </Button>
      <Button
        color="inherit"
        onClick={() => {
          window.location.href = "/chat";
        }}
      >
        Chat
      </Button>

      <Button
        color="inherit"
        onClick={() => {
          window.location.href = "/uplode-image";
        }}
      >
        Image Upload
      </Button>
      <Button
        color="inherit"
        onClick={() => {
          window.location.href = "/login";
        }}
      >
        Login
      </Button>
    </Toolbar>
  );

  const mobileNavbar = (
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleDrawerOpen}
      >
        <MenuIcon />
      </IconButton>
    </Toolbar>
  );

  return (
    <div>
      <AppBar position="static">
        {isMobile ? mobileNavbar : desktopNavbar}
      </AppBar>
      <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
        {drawerItems}
      </Drawer>
    </div>
  );
}

export default Navbar;
