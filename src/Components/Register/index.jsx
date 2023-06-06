import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import logo from "./../../Components/assest/logo.png";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SwipeableTextMobileStepper from "../slider";
export default function Register() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName);
    let createObj = {
      name,
      userName,
      password,
      userType: 1,
    };
    axios
      .post("http://localhost:4000/admin/register", createObj)
      .then((res) => {
        console.log(res.data);
        if (res.data.data.token) {
          axios
            .post("http://localhost:4000/admin/login", { userName, password })
            .then((item) => {
              if (item.data.data.token) {
                console.log("hit here only");
                localStorage.setItem("serviceToken", item.data.data.token);
                localStorage.setItem("role", item.data.data.role);
                localStorage.setItem("userName", item.data.data.phoneNumber);
                localStorage.setItem("name", item.data.data.name);
                localStorage.setItem("isLoggedIn", "true");
                navigate("/");
              }
            });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        background:
          "linear-gradient(rgba(154, 205, 50, 0.7), rgba(154, 205, 50, 0.7))",
      }}
    >
      <Box>
        <SwipeableTextMobileStepper />
      </Box>
      <Box
        sx={{
          maxWidth: 500,
          backgroundColor: "white",
          boxShadow: "1.05975px 4.23898px 7.97545px 4.43081px rgb(0 0 0 / 10%)",
          border: "1.05975px solid rgba(9, 54, 121, 0.1)",
          p: 4,
          mr: 13,
          width: "100%",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="logo" style={{ marginTop: "-20px" }} />
        <Box display={"flex"} mb={3} gap={1}>
          <PersonOutlineIcon style={{ fontSize: 30, color: "yellowgreen" }} />
          <Typography fontSize={18}>Register</Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit} display={"grid"} gap={3}>
          <Box display={"flex"} gap={2}>
            <TextField
              onChange={(e) => setName(e.target.value)}
              required
              id="outlined-multiline-flexible"
              label="Full Name"
              sx={{ width: 250 }}
            />
            <TextField
              onChange={(e) => setUserName(e.target.value)}
              required
              id="outlined-textarea"
              label="Phone Number / email"
              sx={{ width: 250 }}
            />
          </Box>

          <TextField
            onChange={(e) => setPassword(e.target.value)}
            required
            id="outlined-textarea"
            label="Password"
          />
          <TextField
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            id="outlined-textarea"
            label="Confirm Password"
          />
          <Box>
            <Button
              type="submit"
              disabled={
                !password.length ||
                !confirmPassword.length ||
                password != confirmPassword
              }
              sx={{
                backgroundColor: "yellowgreen",
                borderRadius: "4px",
                border: "1px solid yellowgreen",
                color: "white",
                mt: 4,
                p: 1.2,
                pr: 8,
                pl: 8,
                fontWeight: 600,

                "&:hover": {
                  mt: 4,
                  p: 1.2,
                  pr: 8,
                  fontWeight: 600,
                  pl: 8,
                  backgroundColor: "white",
                  border: "1px solid yellowgreen",
                  color: "yellowgreen",
                  borderRadius: "4px",
                },
              }}
            >
              Register
            </Button>
          </Box>
        </Box>

        <br />
        <Link style={{ textDecoration: "none" }} to={"/login"}>
          <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
            Already have an account <i>Login</i>?
          </Typography>{" "}
        </Link>
      </Box>
    </Box>
  );
}
