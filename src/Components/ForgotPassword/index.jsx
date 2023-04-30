import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import logo from "./../../Components/assest/logo.png";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useNavigate } from "react-router-dom";
export default function ForgotPassword() {
  const navigate = useNavigate();

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

        <Box
          component="form"
          // onSubmit={handleSubmit}
          display={"grid"}
          gap={3}
        >
          <Box display={"flex"} gap={2}>
            <TextField
              id="outlined-multiline-flexible"
              label="User name"
              sx={{ width: "69%" }}
            />

            <Button
              sx={{
                backgroundColor: "yellowgreen",
                borderRadius: "4px",
                color: "white",
                p: 1.2,
                pr: 4,
                pl: 4,
                fontWeight: 600,

                "&:hover": {
                  p: 1.2,
                  pr: 4,
                  fontWeight: 600,
                  pl: 4,
                  backgroundColor: "white",
                  border: "1px solid yellowgreen",
                  color: "yellowgreen",
                  borderRadius: "4px",
                },
              }}
            >
              Send OTP
            </Button>
          </Box>

          <TextField id="outlined-textarea" label="Password" />
          <TextField id="outlined-textarea" label=" Confirm Password" />
        </Box>

        <Box>
          <Button
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
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}
