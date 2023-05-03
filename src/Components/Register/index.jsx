import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import logo from "./../../Components/assest/logo.png";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Link, useNavigate } from "react-router-dom";
export default function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "right",
        alignItems: "center",
        height: "100vh",
        backgroundImage:
          "url('https://www.shutterstock.com/image-vector/abstract-watercolor-design-wash-aqua-260nw-2254158479.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
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

        <Box
          component="form"
          // onSubmit={handleSubmit}
          display={"grid"}
          gap={3}
        >
          <Box display={"flex"} gap={2}>
            <TextField
              id="outlined-multiline-flexible"
              label="Full Name"
              sx={{ width: 250 }}
            />
            <TextField
              id="outlined-textarea"
              label="Phone Number / email"
              sx={{ width: 250 }}
            />
          </Box>

          <TextField id="outlined-textarea" label="Password" />
          <TextField id="outlined-textarea" label=" Confirm Password" />
        </Box>

        <Box>
          <Button
            // onClick={handleSubmit}
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
        <br />
        <Link style={{ textDecoration: "none" }} to={"/forgot-password"}>
          <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
            Forgot Password?
          </Typography>{" "}
        </Link>
      </Box>
    </Box>
  );
}
