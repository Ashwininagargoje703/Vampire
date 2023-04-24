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

const JobPostMoreInfoCard = () => {
  const [data, setData] = useState([]);
  let id = localStorage.getItem("jobId");
  useEffect(() => {
    function fetchData() {
      getRequest({
        url: `https://vampire.up.railway.app/post/getPostDetails/${id}`,
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
        <Card sx={{ p: 2, border: "1px solid gary", height: "100vh" }}>
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
                  backgroundColor: "#2557a7",
                  color: "white",
                  fontWeight: 600,
                  borderRadius: "8px",
                  textTransform: "none",
                  p: 1.5,
                  "&:hover": {
                    backgroundColor: "#2557a7",
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
          <Divider color={"black"} />

          <Box sx={{ overflowY: "scroll", height: "60vh" }}>
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
            <Typography fontWeight={600} mb={1}>
              Salary:{data[0]?.salaryStart} -{data[0].salaryEnd}Lpa
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
            <Typography fontWeight={600}>
              Required Education, Skills and Qualifications:
            </Typography>
            <ul>
              <li>Strong knowledge of JavaScript and React JS</li>
              <li>Working knowledge of Node.js and Express</li>
              <li>
                Portfolio of work required. Include examples of all areas of
                frontend development
              </li>
            </ul>
            <Typography fontWeight={600}> Our Stack</Typography>
            <ul>
              <li>Strong knowledge of JavaScript and React JS</li>
              <li>Working knowledge of Node.js and Express</li>
              <li>
                Portfolio of work required. Include examples of all areas of
                frontend development
              </li>
            </ul>
          </Box>
        </Card>
      )}
    </Box>
  );
};

export default JobPostMoreInfoCard;
