import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

function SixCardPage() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${"https://jobify-demos.astoundify.com/classic/wp-content/uploads/sites/2/2022/01/hero-image-text-left-darker.jpg"})`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
      }}
    >
      <Box textAlign={"left"} p={4} width={600} ml={3}>
        <Typography fontSize={40} color={"white"}>
          Join Thousands of Companies That Rely on Jobify
        </Typography>
        <Typography fontSize={16} align="justify" color={"white"} mt={2}>
          bify offers a way to completely optimize your entire recruiting
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

export default SixCardPage;
