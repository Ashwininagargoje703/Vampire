import React, { useEffect, useState } from "react";
import { Box, Button, Card, Typography } from "@mui/material";
import { BsFillBagPlusFill } from "react-icons/bs";
import JobDetailsDialogs from "../Job-more-info/JobInfo";
import { doRequest, getRequest } from "../../../services/request";
import { backend_url } from "../../../http-backend";
import { Cookies, useCookies } from "react-cookie";

const JobPostCard = ({ searchResults, setSearchResults }) => {
  const [jobId, setJobId] = useState(0);
  const [savedJobs, setSavedJobs] = useState([]);
  const [savedStatus, setSavedStatus] = useState({});

  const cookie = new Cookies();
  const userId = cookie.get("userId");

  const checkSavedJob = async (userId, jobId) => {
    try {
      const response = await fetch(
        `${backend_url}/post/checkSavedJob?userId=${userId}&jobId=${jobId}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const data = await response.json();
        setSavedStatus((prevStatus) => ({
          ...prevStatus,
          [jobId]: data.saved,
        }));
      } else {
        console.error("Error checking saved job:", response.status);
      }
    } catch (error) {
      console.error("Error checking saved job:", error);
    }
  };

  useEffect(() => {
    const userId = "643af11e006b181021e17c26";
    searchResults?.forEach((data) => {
      checkSavedJob(userId, data._id);
    });
  }, [searchResults]);

  const handleJobClick = (jobId) => {
    // Store jobId in localStorage
    localStorage.setItem("jobId", jobId);
    // Set jobId in state
    setJobId(jobId);
    // Perform any other action with jobId as needed
  };

  const handleSubmit = async (data) => {
    const post = {
      userId: userId,
      jobId: data?._id,
      title: data?.title,
      imageUrl: data?.imageUrl,
    };
    console.log("knowledge", post);

    let payload = JSON.stringify(post);
    doRequest({
      url: `${backend_url}/post/saveJob`,
      body: payload,
      method: "POST",
    })
      .then((response) => {
        console.log("Data successfully posted:", post);
        // You can do something here after a successful POST request.
      })
      .catch((error) => {
        console.error("Error updating knowledge:", error);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {searchResults?.map((data, idx) => (
          <Card
            sx={{
              p: 2,
              mb: 2,
              border: "1px solid #d4d2d0",
              maxWidth: 900,
              flexDirection: "column",
            }}
            key={searchResults?._id}
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
                  ?.slice(0, 3)
                  ?.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
              </ul>
            )}
            {savedStatus[data._id] ? (
              <Button variant="outlined" color="primary" disabled>
                Saved
              </Button>
            ) : (
              <Button
                variant="outlined"
                color="primary"
                onClick={() => handleSubmit(data)}
              >
                Save Job
              </Button>
            )}

            <Button onClick={() => handleJobClick(data?._id)}>
              <JobDetailsDialogs Title={data?.title} />
            </Button>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default JobPostCard;
