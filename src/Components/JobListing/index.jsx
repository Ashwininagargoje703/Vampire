import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getRequest } from "../../services/request";
import JobListingCard from "./Job_listing_cards";
import { backend_url } from "../../http-backend";

function JobListing() {
  const [data, setData] = useState([]);

  function fetchData() {
    getRequest({
      url: `${backend_url}/post/getAllPublicPost`,
    })
      .then((res) => {
        setData(res?.data?.data);
        console.log("hello res", res.data);
      })
      .catch((e) => {
        setData([]);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Grid container spacing={5}>
      {data?.map((data, idx) => (
        <Grid item xs={12} md={4} lg={4} xl={4} key={data.id}>
          <JobListingCard {...data} />
        </Grid>
      ))}
    </Grid>
  );
}

export default JobListing;
