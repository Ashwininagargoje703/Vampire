import React from "react";
import { Box } from "@mui/material";
import NavbarApp from "../../Components/navbar";
import Quiz from "../../Components/Quize";

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
      <Quiz />
    </>
  );
}

export default QuizePage;
