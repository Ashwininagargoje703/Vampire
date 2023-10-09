import React from "react";
import Login from "../../Components/Login";
import JobPostMoreInfoCard from "../../Components/Find-Job/Job-more-info";
import JobPostCard from "../../Components/Find-Job/job-post-card";
import JobListing from "../../Components/JobListing";
import JobSearch from "../../Components/search";
import { Box } from "@mui/material";
import NavbarApp from "../../Components/before-login-home/navbar";

function JobDetailsPage() {
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

      <JobSearch />
    </>
  );
}

export default JobDetailsPage;
