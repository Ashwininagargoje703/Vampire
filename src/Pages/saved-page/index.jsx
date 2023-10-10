import React from "react";
import { Box } from "@mui/material";
import NavbarApp from "../../Components/before-login-home/navbar";
import SavedPost from "../../Components/Saved_Post";

function SavedPage() {
  return (
    <>
      <Box sx={{ position: "fixed", top: 0, zIndex: "99", width: "100%" }}>
        <NavbarApp />
      </Box>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <SavedPost />
    </>
  );
}

export default SavedPage;
