import React from "react";
import { Box } from "@mui/material";
import NavbarApp from "../../Components/navbar";
import CompanyReviews from "../../Components/company-reviews";

function ReviewsPage() {
  return (
    <>
      <Box sx={{ position: "fixed", top: 0, zIndex: "99", width: "100%" }}>
        <NavbarApp />
      </Box>
      <br />
      <CompanyReviews />
    </>
  );
}

export default ReviewsPage;
