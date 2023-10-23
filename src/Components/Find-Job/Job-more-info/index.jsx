import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Chip,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { BsFillBagPlusFill } from "react-icons/bs";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { getRequest } from "../../../services/request";
import { backend_url } from "../../../http-backend";

const JobPostMoreInfoCard = () => {
  const [data, setData] = useState([]);
  let id = localStorage.getItem("jobId");

  useEffect(() => {
    function fetchData() {
      getRequest({
        url: `${backend_url}/post/getPostDetails/${id}`,
      })
        .then((res) => {
          setData(res?.data?.data);
          console.log("hello response", res.data);
        })
        .catch((e) => {
          setData([]);
        });
    }
    fetchData();
  }, [id]);
  return (
    <Box sx={{ height: "100vh" }}>
      {data.length > 0 && (
        <Card
          sx={{
            p: 2,
            height: "100vh",
            border: "1px solid #d4d2d0",
          }}
        >
          <Box p={2} mb={1}>
            <Typography fontSize={18} fontWeight={600}>
              {data[0]?.title}
            </Typography>
            <Typography>{data[0]?.relatedTo}</Typography>
            <Typography>{data[0].location}</Typography>
            <Typography>
              You must create an Indeed account before continuing to the company
              website to apply
            </Typography>
            <Box mt={1} gap={4} display={"flex"}>
              <Button
                sx={{
                  backgroundColor: "#004c3d",
                  color: "white",
                  fontWeight: 600,
                  borderRadius: "8px",
                  textTransform: "none",
                  p: 1.5,
                  "&:hover": {
                    backgroundColor: "#004c3d",
                    color: "white",
                  },
                }}
              >
                Apply on Company site
              </Button>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </Box>
          </Box>
          <Divider />

          <Box
            p={2}
            sx={{
              overflowY: "scroll",
              "&::-webkit-scrollbar": {
                width: "0.3em" /* Set width of scrollbar */,
                background: "#F5F5F5" /* Set background color of scrollbar */,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#004c3d" /* Set color of scrollbar thumb */,
              },
              height: "70vh",
            }}
          >
            <Typography fontSize={18} fontWeight={600}>
              Job details
            </Typography>
            <br />
            <Typography fontWeight={600}>
              <BsFillBagPlusFill /> {"  "} Job type
            </Typography>
            <Box display="flex" gap={3} mt={1} mb={2}>
              <Chip label="Fresher" />
              <Chip label="Frelance" />
            </Box>
            <Typography fontWeight={600} mb={2}>
              Salary: {data[0]?.salaryStart}-{data[0].salaryEnd} LPA{" "}
              {data[0]?.salaryType}
            </Typography>
            <Typography fontWeight={600} mb={2}>
              Shift and schedule: {data[0]?.shift}
            </Typography>
            <Typography fontWeight={600}>Qualification</Typography>
            {data[0]?.qualifications && (
              <ul style={{ listStyleType: "circle" }}>
                {data[0]?.qualifications.map((qualifications, index) => (
                  <li key={index}>{qualifications}</li>
                ))}
              </ul>
            )}

            <Typography fontWeight={600} mb={2}>
              {" "}
              Job Discription
            </Typography>
            {data[0]?.discription}
            <Typography fontWeight={600}>Responsibilities:</Typography>
            {data[0]?.responsibilities && (
              <ul style={{ listStyleType: "circle" }}>
                {data[0]?.responsibilities.map((responsibilities, index) => (
                  <li key={index}>{responsibilities}</li>
                ))}
              </ul>
            )}
          </Box>
        </Card>
      )}
    </Box>
  );
};

export default JobPostMoreInfoCard;
