import React, { useEffect, useState } from "react";
import { Box, Button, Card, Typography } from "@mui/material";
import { BsFillBagPlusFill } from "react-icons/bs";
import { getRequest } from "../../../services/request";

const JobPostCard = ({ searchResults, setSearchResults }) => {
  const [data, setData] = useState([]);

  function fetchData() {
    getRequest({
      url: `https://vampire.up.railway.app/post/getAllPublicPost`,
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
        height: "100vh",
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
      {searchResults?.map((data, idx) => (
        <Card
          sx={{ p: 2, mb: 2, border: "1px solid #d4d2d0" }}
          key={searchResults?._id}
          onClick={() => handleJobClick(data?._id)}
        >
          <Typography fontSize={18} fontWeight={600}>
            {data?.title}
          </Typography>
          <Typography>{data?.relatedTo}</Typography>
          <Typography>{data?.location}</Typography>
          <Typography fontWeight={600}>
            <BsFillBagPlusFill /> {"  "}
            {data?.totalExp}
          </Typography>
          {data?.responsibilities && (
            <ul style={{ listStyleType: "circle" }}>
              {data.responsibilities
                .slice(0, 3)
                .map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
            </ul>
          )}
          <Button variant="outlined" color="primary">
            Save Job
          </Button>
        </Card>
      ))}
    </Box>
  );
};

export default JobPostCard;
