import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Snackbar,
  SnackbarContent,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { BsFillBagPlusFill } from "react-icons/bs";
import JobDetailsDialogs from "../Job-more-info/JobInfo";
import { doRequest, doRequests } from "../../../services/request";
import { backend_url } from "../../../http-backend";
import { Cookies, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { JobDataContext } from "../../../context/JobDataContext";

const JobPostCard = ({ searchResults, setSearchResults }) => {
  const [jobId, setJobId] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const { savedata, data } = useContext(JobDataContext);
  const [savedStatus, setSavedStatus] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const handleSnackbarOpen = () => {
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const cookie = new Cookies();
  const userId = cookie.get("userId");
  const navigate = useNavigate();

  const handleJobClick = (jobId) => {
    localStorage.setItem("jobId", jobId);
    setJobId(jobId);
  };

  const handleSubmit = async (data) => {
    if (!userId) {
      navigate("/login");
      return;
    }
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
        setIsSaved(true);
        handleSnackbarOpen();
      })
      .catch((error) => {
        console.error("Error updating knowledge:", error);
      });
  };

  const checkedIfSavedPostExists = () => {
    const _id = data._id;
    console.log("Checking if job is saved with jobId:", _id);
    console.log("Saved jobs data:", savedata);

    let exists = false;
    savedata?.forEach((item) => {
      if (item._id === _id) {
        exists = true;
        return;
      }
    });

    console.log("Job saved status:", exists);
    return exists;
  };

  function timeAgoFromMongoData(mongoTimestamp) {
    try {
      // Parse the MongoDB timestamp string into a Date object
      const mongoTime = new Date(mongoTimestamp);

      // Get the current time
      const currentTime = new Date();

      // Calculate the time difference in milliseconds
      const timeDifference = currentTime - mongoTime;

      // Define time intervals
      const intervals = [
        { label: "year", seconds: 31536000 }, // 365 days
        { label: "month", seconds: 2592000 }, // 30 days
        { label: "day", seconds: 86400 }, // 24 hours
        { label: "hour", seconds: 3600 }, // 60 minutes
        { label: "minute", seconds: 60 }, // 60 seconds
      ];

      // Find the appropriate interval
      for (const interval of intervals) {
        const intervalValue = Math.floor(
          timeDifference / (interval.seconds * 1000)
        );
        if (intervalValue >= 1) {
          return intervalValue === 1
            ? `1 ${interval.label} ago`
            : `${intervalValue} ${interval.label}s ago`;
        }
      }

      // If the time difference is less than a minute, return "just now"
      return "just now";
    } catch (error) {
      return error.toString(); // Handle parsing errors or other exceptions as needed
    }
  }
  // const checkedIfSavedPostExists = ( jobId) => {
  //   let exists = false;
  //   savedPosts?.forEach((item) => {
  //     if (item._id ==  jobId) {
  //       exists = true;
  //       return;
  //     }
  //   });
  //   return exists;
  // };
  const isMobile = useMediaQuery("(max-width: 600px)");

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
          backgroundColor: "#004c3d" /* Set color of scrollbar thumb */,
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
              width: isMobile ? "100%" : "960px",
              flexDirection: "column",
            }}
            key={searchResults?._id}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography fontSize={18} fontWeight={600}>
                {data?.title}
              </Typography>
              <Typography fontSize={18} fontWeight={600}>
                {timeAgoFromMongoData(data?.createdAt)}
              </Typography>
            </Box>
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
                {data.responsibilities.length > 3 && (
                  <li>
                    + {data.responsibilities.length - 3} more responsibilities
                  </li>
                )}
              </ul>
            )}
            {checkedIfSavedPostExists() ? (
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "#004c3d",
                  textTransform: "none",
                  ":hover": {
                    color: "white",
                    backgroundColor: "#004c3d",
                    textTransform: "none",
                  },
                }}
                disabled={savedStatus[data._id]} // Disable the button if the job is saved
                onClick={() => handleSubmit(data)}
              >
                Saved
              </Button>
            ) : (
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "#004c3d",
                  textTransform: "none",
                  ":hover": {
                    color: "white",
                    backgroundColor: "#004c3d",
                    textTransform: "none",
                  },
                }}
                onClick={() => handleSubmit(data)}
              >
                Save Job
              </Button>
            )}

            <Button onClick={() => handleJobClick(data?._id)}>
              <JobDetailsDialogs title={data?.title} />
            </Button>
          </Card>
        ))}
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000} // Adjust the duration as needed
        onClose={handleSnackbarClose}
      >
        <SnackbarContent
          style={{ backgroundColor: "#004c3d" }} // Adjust the background color here
          message="Job saved successfully"
        />
      </Snackbar>
    </Box>
  );
};

export default JobPostCard;
