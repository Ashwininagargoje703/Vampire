import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../../Components/assest/logo2.png";
import { Link as RouterLink } from "react-router-dom";
import { Cookies } from "react-cookie";

import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ProfileMenu from "./profile-dropdown";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const cookie = new Cookies();
  const isLoggedIn = cookie.get("isLoggedIn");
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img
          style={{
            width: "80px",
            height: "40px",
          }}
          src="https://i.ibb.co/6Dq6gdQ/Whats-App-Image-2023-10-10-at-5-17-12-PM-removebg-preview.png"
          alt="logo"
        />
      </Typography>
      <Divider />
      <List>
        <Box
          display={"grid"}
          gap={2}
          textAlign={"left"}
          sx={{ textAlign: "left !important" }}
        >
          <Button
            sx={{ textTransform: "none", fontSize: 16, color: "black" }}
            component={RouterLink}
            to="/jobsearch"
          >
            Find jobs
          </Button>

          <Button
            sx={{ textTransform: "none", fontSize: 16, color: "black" }}
            component={RouterLink}
            to="/"
          >
            Company reviews
          </Button>

          <Button
            sx={{ textTransform: "none", fontSize: 16, color: "black" }}
            component={RouterLink}
            to="/"
          >
            Find salaries
          </Button>

          <Button
            sx={{ textTransform: "none", fontSize: 16, color: "black" }}
            component={RouterLink}
            to="/saved"
          >
            Saved
          </Button>

          <Button
            sx={{ textTransform: "none", fontSize: 16, color: "black" }}
            component={RouterLink}
            to="/"
          >
            Post your resume
          </Button>

          <Button
            sx={{ textTransform: "none", fontSize: 16, color: "black" }}
            component={RouterLink}
            to="/joblisting"
          >
            Post job
          </Button>

          {isLoggedIn ? (
            <Box
              sx={{
                mt: 4,
                "&:hover": {
                  borderBottom: "0.255rem solid transparent",
                  borderBottomColor: "#2557a7",
                },
              }}
            >
              <ProfileMenu />
            </Box>
          ) : (
            <Button
              sx={{ textTransform: "none", fontSize: 16, color: "black" }}
              component={RouterLink}
              to="/login"
            >
              <PermIdentityIcon /> LogIn
            </Button>
          )}
        </Box>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", backgroundColor: "#9acd32" }}>
      <CssBaseline />
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          <img
            style={{
              width: "100px",
              height: "50px",
            }}
            src="https://i.ibb.co/6Dq6gdQ/Whats-App-Image-2023-10-10-at-5-17-12-PM-removebg-preview.png"
            alt="logo"
          />
        </Typography>
        <Box
          sx={{
            justifyContent: "space-between",
            width: "88vw",
            display: { xs: "none", sm: "block", lg: "flex" },
          }}
        >
          <Box>
            <Button
              sx={{ color: "#fff", textTransform: "none", fontSize: 16, ml: 4 }}
              component={RouterLink}
              to="/jobsearch"
            >
              Find jobs
            </Button>

            <Button
              sx={{ color: "#fff", textTransform: "none", fontSize: 16, ml: 4 }}
              component={RouterLink}
              to="/"
            >
              Company reviews
            </Button>

            <Button
              sx={{ color: "#fff", textTransform: "none", fontSize: 16, ml: 4 }}
              component={RouterLink}
              to="/"
            >
              Find salaries
            </Button>

            <Button
              sx={{ color: "#fff", textTransform: "none", fontSize: 16, ml: 4 }}
              component={RouterLink}
              to="/saved"
            >
              Saved
            </Button>

            <Button
              sx={{ color: "#fff", textTransform: "none", fontSize: 16, ml: 4 }}
              component={RouterLink}
              to="/"
            >
              Post your resume
            </Button>

            <Button
              sx={{ color: "#fff", textTransform: "none", fontSize: 16, ml: 4 }}
              component={RouterLink}
              to="/joblisting"
            >
              Post job
            </Button>
          </Box>

          <Box>
            {isLoggedIn ? (
              <Box
                sx={{
                  mt: 4,
                  "&:hover": {
                    borderBottom: "0.255rem solid transparent",
                    borderBottomColor: "#2557a7",
                  },
                }}
              >
                <ProfileMenu />
              </Box>
            ) : (
              <Button
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  fontSize: 16,
                  ml: 4,
                }}
                component={RouterLink}
                to="/login"
              >
                <PermIdentityIcon /> LogIn
              </Button>
            )}
          </Box>
        </Box>
      </Toolbar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
