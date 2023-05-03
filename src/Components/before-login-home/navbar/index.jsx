import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Box, Typography } from "@mui/material";
import logo from "../../../Components/assest/logo.png";
import ProfileMenu from "./profile-dropdown";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
export default function NavbarApp() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <Box
      sx={{
        borderBottom: "1px solid #e4e2e0",
        height: "90px",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "yellowgreen",
      }}
    >
      <Box
        sx={{
          marginLeft: "15px",
          display: "flex",
          cursor: "pointer",
          gap: 3,
        }}
      >
        <img
          style={{
            width: "200px",
            height: "120px",
            marginTop: "-15px",
          }}
          src={logo}
          alt="logo"
        />

        <Box
          sx={{
            mt: 4,
            "&:hover": {
              borderBottom: "0.255rem solid transparent",
              borderBottomColor: "#2557a7",
            },
          }}
        >
          <Link
            to="/jobsearch"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "600",
              fontSize: 20,
            }}
          >
            Find jobs{" "}
          </Link>{" "}
        </Box>
        <Box
          sx={{
            mt: 4,
            "&:hover": {
              borderBottom: "0.255rem solid transparent",
              borderBottomColor: "#2557a7",
            },
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "600",
              fontSize: 20,
            }}
          >
            Company reviews{" "}
          </Link>{" "}
        </Box>
        <Box
          sx={{
            mt: 4,
            "&:hover": {
              borderBottom: "0.255rem solid transparent",
              borderBottomColor: "#2557a7",
            },
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "600",
              fontSize: 20,
            }}
          >
            Find salaries{" "}
          </Link>{" "}
        </Box>
      </Box>

      <Box
        sx={{
          marginLeft: "15px",
          display: "flex",
          cursor: "pointer",
          gap: 5,
          mr: 3,
        }}
      >
        <Box
          sx={{
            mt: 4,
            "&:hover": {
              borderBottom: "0.255rem solid transparent",
              borderBottomColor: "#2557a7",
            },
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "600",
              fontSize: 20,
            }}
          >
            Post your resume
          </Link>
        </Box>

        <Box
          sx={{
            mt: 4,
            "&:hover": {
              borderBottom: "0.255rem solid transparent",
              borderBottomColor: "#2557a7",
            },
          }}
        >
          <Link
            to="/joblisting"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "600",
              fontSize: 20,
            }}
          >
            Post job{" "}
          </Link>
        </Box>

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
          <Box
            sx={{
              fontSize: "1rem!important",
              color: "#2557a7",
              fontWeight: "700",
              mt: 4,
            }}
          >
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "white",
                display: "flex",
              }}
            >
              <PermIdentityIcon />{" "}
              <Typography fontWeight={600} fontSize={20}>
                LogIn
              </Typography>
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
}
