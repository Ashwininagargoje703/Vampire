import { Box, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { JobDataContext } from "../../context/JobDataContext";
import JobListingCard from "../JobListing/Job_listing_cards";
import { Cookies } from "react-cookie";
import { Link } from "react-router-dom";

function SavedPost() {
  const { savedata, userLoggedIn } = useContext(JobDataContext);
  const cookie = new Cookies();
  const isLoggedIn = cookie.get("isLoggedIn");

  return (
    <Grid container spacing={5}>
      {isLoggedIn ? (
        savedata?.map((data, idx) => (
          <Grid item xs={12} md={4} lg={4} xl={4} key={data.id}>
            <JobListingCard {...data} />
          </Grid>
        ))
      ) : (
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          xl={12}
          style={{ textAlign: "center", justifyContent: "center" }}
        >
          <Typography variant="h5">Please log in to save posts</Typography>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 20,
              color: "#004c3d",
              cursor: "pointer",
              textDecoration: "none",
            }}
            component={Link}
            to="/login"
          >
            Login
          </Typography>
          <Box>
            <img
              src="https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif"
              alt="gif"
              style={{ height: 400 }}
            />
          </Box>
        </Grid>
      )}
    </Grid>
  );
}

export default SavedPost;
