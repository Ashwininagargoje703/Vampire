import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import logo from "./../../Components/assest/logo.png";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent form submission
    // handle form submission here (e.g. send data to backend)
    console.log("Username:", username);
    console.log("Password:", password);
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
            value={username}
            onChange={handleUsernameChange}
          />
          <TextField
            id="outlined-textarea"
            label="Password"
            multiline
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button
            type="submit"
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

        <Typography mt={2}>Forgot Password?</Typography>
      </Box>
    </>
  );
}
