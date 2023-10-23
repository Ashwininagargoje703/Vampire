// CompanyCard.js
import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating - fullStars >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={i}>&#9733;</span>); // Full star
  }
  if (halfStars === 1) {
    stars.push(<span key="half">&#9734;&#9733;</span>); // Half star
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<span key={`empty${i}`}>&#9734;</span>); // Empty star
  }

  return <div>{stars}</div>;
};

const CompanyCard = ({ company }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ p: 2 }}>
        <Box display={"flex"}>
          <img
            src={company.img}
            alt={company.name}
            style={{
              width: "70px",
              height: "70px",
            }}
          />

          <Box ml={2}>
            <h4>{company.name}</h4>

            <Box display={"flex"} mt={-2}>
              {company.rating ? <StarRating rating={company.rating} /> : "N/A"}
              <Typography fontSize={12} ml={2} mt={0.5}>
                {company.reviews} Reviews
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} mt={2}>
          <p>{company.salaries}</p>
          <p>{company.questions}</p>
          <p>{company.openJobs}</p>
        </Box>
      </Card>
    </Grid>
  );
};

export default CompanyCard;
