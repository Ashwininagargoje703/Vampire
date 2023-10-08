import { Box } from "@mui/material";
import React, { useState } from "react";
import FirstCardPage from "./first_card";
import SecondCardPage from "./second_card";
import ThirdCardPage from "./third_card";
import FourCardPage from "./four_card";
import SixCardPage from "./six_card";
import NavbarApp from "../before-login-home/navbar";
import Footer from "../Footer";

function HomePage() {
  return (
    <Box
      sx={{
        height: "100vh",
      }}
    >
      <Box>
        <Box sx={{ position: "fixed", top: 0, width: "100%" }}>
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
