import React, { useEffect, useState } from "react";
import { Box, Button, Card, Typography } from "@mui/material";
import { BsFillBagPlusFill } from "react-icons/bs";
import { getRequest } from "../../../services/request";

const JobPostCard = () => {
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
    <Box sx={{ height: "100vh", overflowY: "scroll" }}>
      {data?.map((data, idx) => (
        <Card
          sx={{ p: 2, mb: 2, border: "1px solid gray" }}
          key={data?._id}
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
