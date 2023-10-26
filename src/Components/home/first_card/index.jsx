import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";

function FirstCardPage() {
  const handleChange = () => {
    window.location.href = "/jobsearch";
  };
  const isMobile = useMediaQuery("(max-width: 600px)");

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
        p: 2,
      }}
    >
      <Box textAlign={"center"}>
        <Typewriter
          options={{
            strings: [
              `<span style="font-size:28px"; "font-Weight:600">The Easiest Way to Get Your New Job</span>`,
              `<span style="font-size:28px"; "font-Weight:600">The Easiest Way to Save Money and Achieve Financial Goals</span>`,
              `<span style="font-size:28px"; "font-Weight:600">The Easiest Way to Find Your Dream Home</span>`,
            ],

            autoStart: true,
            loop: true,
          }}
        />
        <Typography fontSize={20}>
          Find jobs, create trackable resumes and enrich your applications.
        </Typography>

        <Box mt={2}>
          <Button
            onClick={handleChange}
            sx={{
              backgroundColor: "#004c3d",
              color: "white",
              width: isMobile ? "100%" : 800,
              p: 1.2,
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#004c3d",
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
