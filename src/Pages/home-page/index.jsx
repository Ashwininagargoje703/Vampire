import React from "react";
import { Box } from "@mui/material";
import NavbarApp from "../../Components/before-login-home/navbar";
import SearchBox from "../../Components/search";
import FindJob from "../../Components/Find-Job";
import Footer from "../../Components/before-login-home/footer";
import JobSearch from "../../Components/search";

function HomeMainPage() {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          overflowY: "auto", // Add overflowY to enable scrolling
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Box sx={{ position: "fixed", top: 0, zIndex: 99999, width: "100%" }}>
          <NavbarApp />
        </Box>

        {/* Fix NavbarApp at the top */}
        <br />
        <Box sx={{ pt: "64px" }}>
          {" "}
          {/* Add padding top to push content below the fixed NavbarApp */}
          <JobSearch />
          <br />
        </Box>
        {/* <Footer /> */}
      </Box>
    </>
  );
}

export default HomeMainPage;
