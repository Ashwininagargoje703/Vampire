import React from "react";
import { Box } from "@mui/material";
import NavbarApp from "../../Components/navbar";
import Quiz from "../../Components/Quize";
import MainList from "../../Components/Quize/mainlist";

function QuizePage() {
  return (
    <>
      <Box sx={{ position: "fixed", top: 0, zIndex: 99999, width: "100%" }}>
        <NavbarApp />
      </Box>
      <br />
      <br />
      <br />
      <br />
      <MainList />
    </>
  );
}

export default QuizePage;
