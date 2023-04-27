import { Box } from "@mui/material";
import React, { useState } from "react";
import FirstCardPage from "./first_card";
import SecondCardPage from "./second_card";
import ThirdCardPage from "./third_card";
import FourCardPage from "./four_card";
import SixCardPage from "./six_card";

function HomePage() {
  return (
    <Box
      sx={{
        height: "100vh",
      }}
    >
      <Box zIndex={"999999"}>
        <FirstCardPage />
        <SecondCardPage />
        <ThirdCardPage />
        <FourCardPage />
        <SixCardPage />
      </Box>
    </Box>
  );
}

export default HomePage;
