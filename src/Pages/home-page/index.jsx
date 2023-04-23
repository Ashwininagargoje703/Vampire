import React from "react";
import HomePage from "../../Components/home";
import { Box } from "@mui/material";
import NavbarApp from "../../Components/before-login-home/navbar";
import SearchBox from "../../Components/search";
import Footer from "../../Components/before-login-home/footer";
import MobileMessageIcon from "../../Components/ChatIcon";
import JobPostCard from "../../Components/Find-Job/job-post-card";
import RecipeReviewCard from "../../Components/Find-Job/Job-more-info";
import JobMoreInfoCard from "../../Components/Find-Job/Job-more-info";
import FindJob from "../../Components/Find-Job";

function HomeMainPage() {
  return (
    <>
      <Box sx={{ width: "100vw", height: "100vh" }}>
        <NavbarApp />
        <br />
        <br />
        <br />
        <br />

        <SearchBox />
        <br />
        <br />
        {/* <Box
          sx={{
            height: "0",
            position: "fixed",
            zIndex: "1000",
            bottom: "0",
            right: "0",
            overflow: "visible",
            display: "flex",
            flexDirection: "row-reverse",
            flexWrap: "nowrap",
            alignItems: "flex-end",
            width: "100%",
            cursor: "pointer",
          }}
        >
          <MobileMessageIcon />
        </Box> */}
        {/* <JobPostCard /> */}
        <FindJob />

        <Box sx={{ bottom: 0, position: "fixed" }}>
          <hr />
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default HomeMainPage;
