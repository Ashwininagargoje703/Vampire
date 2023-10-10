import React, { useEffect, useState } from "react";
import { Box, Button, Card, Typography } from "@mui/material";
import { BsFillBagPlusFill } from "react-icons/bs";
import { getRequest } from "../../../services/request";

const JobListingCard = ({
  _id,
  title,
  relatedTo,
  location,
  totalExp,
  responsibilities,
  createdAt,
}) => {
  const [jobId, setJobId] = useState(0);

  const handleJobClick = (jobId) => {
    // Store jobId in localStorage
    localStorage.setItem("jobId", jobId);
    // Set jobId in state
    setJobId(jobId);
    // Perform any other action with jobId as needed
  };

  return (
    <Box
      sx={{
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          width: "0.3em" /* Set width of scrollbar */,
          background: "#F5F5F5" /* Set background color of scrollbar */,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "yellowgreen" /* Set color of scrollbar thumb */,
        },
      }}
    >
      <Card
        sx={{ p: 2, border: "1px solid #d4d2d0" }}
        key={_id}
        onClick={() => handleJobClick(_id)}
      >
        <Typography fontSize={18} fontWeight={600}>
          {title}
        </Typography>
        <Typography>{relatedTo}</Typography>
        <Typography>{location}</Typography>
        <Typography fontWeight={600}>
          <BsFillBagPlusFill /> {"  "}
          {totalExp}
        </Typography>
        {/* {responsibilities && (
          <ul style={{ listStyleType: "circle" }}>
            {responsibilities?.slice(0, 3).map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        )} */}

        <Box justifyContent={"space-between"} display={"flex"}>
          <Button variant="outlined" color="primary">
            Save Job
          </Button>
          <Typography>{new Date(createdAt).toDateString()}</Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default JobListingCard;
