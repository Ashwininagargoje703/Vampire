import { Grid } from "@mui/material";
import React, { useContext } from "react";
import { JobDataContext } from "../../context/JobDataContext";
import JobListingCard from "../JobListing/Job_listing_cards";

function SavedPost() {
  const { savedata } = useContext(JobDataContext);

  return (
    <Grid container spacing={5}>
      {savedata?.map((data, idx) => (
        <Grid item xs={12} md={4} lg={4} xl={4} key={data.id}>
          <JobListingCard {...data} />
        </Grid>
      ))}
    </Grid>
  );
}

export default SavedPost;
