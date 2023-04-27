import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
// import "./styles.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";

function ThirdCardPage() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${"https://jobify-demos.astoundify.com/classic/wp-content/uploads/sites/2/2022/01/hero-image-text-right-darker.jpg"})`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "right",
        alignItems: "center",
      }}
    >
      <Box textAlign={"left"} p={4} width={600} mr={15}>
        <Typography fontSize={40} color={"white"}>
          Make Recruiting Your Competitive Advantage
        </Typography>
        <Typography fontSize={16} align="justify" color={"white"} mt={2}>
          Talent is a top priority for all startup founders and executives.
          Jobify offers a way to completely optimize your entire recruiting
          process. Find better candidates, conduct more focused interviews, and
          make data-driven hiring decisions.
        </Typography>

        <Button
          sx={{
            border: " 1px solid white",
            mt: 2,
            borderRadius: "4px",
            color: "black",
            fontWeight: 600,
            textTransform: "none",
            backgroundColor: "white",
            pl: 5,
            pr: 5,
          }}
        >
          Get Start
        </Button>
      </Box>
    </Box>
  );
}

export default ThirdCardPage;
