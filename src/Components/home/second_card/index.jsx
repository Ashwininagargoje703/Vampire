import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
// import "./styles.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";

function SecondCardPage() {
  return (
    <Box
      sx={{
        background: "white",
        height: "500px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box textAlign={"center"}>
        <Typography fontSize={40}>Companies We've Helped</Typography>
        <Typography fontSize={20}>
          Some of the companies we've helped recruit excellent applicants over
          the years.
        </Typography>
      </Box>
    </Box>
  );
}

export default SecondCardPage;
