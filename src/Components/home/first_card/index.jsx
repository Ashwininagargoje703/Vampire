import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
// import "./styles.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";

function FirstCardPage() {
  const handleChange = () => {
    window.location.href = "/jobsearch";
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${"https://jobify-demos.astoundify.com/classic/wp-content/uploads/sites/2/2022/01/widget-search-background.jpg"})`,
        backgroundColor: "white",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box textAlign={"center"}>
        <Typography fontSize={40} fontWeight={600}>
          The Easiest Way to Get Your New Job
        </Typography>
        <Typography fontSize={20}>
          Find jobs, create trackable resumes and enrich your applications.
        </Typography>

        <Box mt={2}>
          <Button
            onClick={handleChange}
            sx={{
              backgroundColor: "yellowgreen",
              color: "white",
              width: 800,
              p: 1.2,
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "yellowgreen",
                color: "white",
              },
            }}
          >
            SEARCH JOBS
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default FirstCardPage;
