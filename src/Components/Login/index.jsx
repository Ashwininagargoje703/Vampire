import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import logo from "./../../Components/assest/logo.png";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import axios from "axios";
// import { useNavigate } from "react-router";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // console.log(userName)
  const handleSubmit = async () => {
    console.log("get hit here");
    let loginData = {
      userName,
      password,
    };

    let userData = await axios.post(
      "https://vampire.up.railway.app/admin/login",
      loginData
    );
    console.log(userData.data.data);

    if (userData) {
      console.log("hit here only");
      localStorage.setItem("serviceToken", userData.data.data.token);
      localStorage.setItem("role", userData.data.data.role);
      localStorage.setItem("userName", userData.data.data.phoneNumber);
      localStorage.setItem("name", userData.data.data.name);
      localStorage.setItem("isLoggedIn", "true");
    }

    navigate("/");
  };
  return (
    <>
      <Box
        sx={{
          maxWidth: 500,
          backgroundColor: "white",
          boxShadow: "1.05975px 4.23898px 7.97545px 4.43081px rgb(0 0 0 / 10%)",
          border: "1.05975px solid rgba(9, 54, 121, 0.1)",
          p: 4,
          width: "100%",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="logo" />
        <Box display={"flex"} mb={3} gap={1}>
          <PersonOutlineIcon style={{ fontSize: 30, color: "yellowgreen" }} />
          <Typography fontSize={18}>Sign In</Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit} display={"grid"} gap={3}>
          <TextField
            id="outlined-multiline-flexible"
            label="User Name"
            multiline
            maxRows={4}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            id="outlined-textarea"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            multiline
          />
        </Box>

        <Box>
          <Button
            onClick={handleSubmit}
            sx={{
              backgroundColor: "yellowgreen",
              borderRadius: "4px",
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
            Login
          </Button>
        </Box>

        <Link mt={2} onClick={navigate('/forgot-password')}>Forgot Password?</Link>
      </Box>
    </>
  );
}
