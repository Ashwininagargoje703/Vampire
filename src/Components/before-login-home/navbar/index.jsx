import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import logo from "../../../Components/assest/logo.png";
export default function NavbarApp() {
  return (
    <Box
      sx={{
        borderBottom: "1px solid #e4e2e0",
        height: "50px",
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
            height: "100px",
            marginTop: "-25px",
          }}
          src={logo}
          alt="logo"
        />

        <Box
          sx={{
            mt: 1,
            "&:hover": {
              borderBottom: "0.125rem solid transparent",
              borderBottomColor: "#2557a7",
            },
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Find jobs{" "}
          </Link>{" "}
        </Box>
        <Box
          sx={{
            mt: 1,
            "&:hover": {
              borderBottom: "0.125rem solid transparent",
              borderBottomColor: "#2557a7",
            },
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Company reviews{" "}
          </Link>{" "}
        </Box>
        <Box
          sx={{
            mt: 1,
            "&:hover": {
              borderBottom: "0.125rem solid transparent",
              borderBottomColor: "#2557a7",
            },
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
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
            mt: 1,
            "&:hover": {
              borderBottom: "0.125rem solid transparent",
              borderBottomColor: "#2557a7",
            },
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Post your resume
          </Link>
        </Box>
        <Box
          sx={{
            fontSize: "1rem!important",
            color: "#2557a7",
            fontWeight: "700",
            mt: 1,
          }}
        >
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Sign In
          </Link>
        </Box>

        <Box
          sx={{
            mt: 1,
            "&:hover": {
              borderBottom: "0.125rem solid transparent",
              borderBottomColor: "#2557a7",
            },
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Employers/Post job{" "}
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
