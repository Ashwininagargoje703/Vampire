import React from "react";
import JobSearch from "../../Components/search";
import { Box } from "@mui/material";
import NavbarApp from "../../Components/before-login-home/navbar";

function JobDetailsPage() {
  return (
    <>
      <Box sx={{ position: "fixed", top: 0, width: "100%" }}>
        <NavbarApp />
      </Box>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <JobSearch />
    </>
  );
}

export default JobDetailsPage;
