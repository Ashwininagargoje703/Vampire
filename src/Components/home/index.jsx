import { Box, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import FirstCardPage from "./first_card";
import SecondCardPage from "./second_card";
import ThirdCardPage from "./third_card";
import FourCardPage from "./four_card";
import SixCardPage from "./six_card";
import Footer from "../Footer";
import NavbarApp from "../navbar";

function HomePage() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Box
      sx={{
        height: "100vh",
      }}
    >
      <Box>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: isMobile ? "" : 9999,
          }}
        >
          <NavbarApp />
        </Box>
        <FirstCardPage />
        <SecondCardPage />
        <ThirdCardPage />
        <FourCardPage />
        <SixCardPage />
      </Box>
      <Footer />
    </Box>
  );
}

export default HomePage;
