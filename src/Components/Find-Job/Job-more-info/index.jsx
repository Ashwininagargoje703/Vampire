import React, { useState } from "react";
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
const JobPostMoreInfoCard = () => {
  return (
    <>
      <Card sx={{ p: 2, border: "1px solid gary", height: "80vh" }}>
        <Box>
          <Typography fontSize={18} fontWeight={600}>
            Web Designer
          </Typography>
          <Typography>Brand Provoke Consultants</Typography>
          <Typography>Delhi, Delhi</Typography>
          <Typography>
            You must create an Indeed account before continuing to the company
            website to apply
          </Typography>
          <Box>
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

        <Box sx={{ overflow: "scroll" }}>
          <Typography fontSize={18} fontWeight={600}>
            Job details
          </Typography>
          <Typography fontWeight={600}>
            <BsFillBagPlusFill /> {"  "} Job type
          </Typography>
          <Box display="flex" gap={3}>
            <Chip label="Fresher" />
            <Chip label="Frelance" />
          </Box>
          <Typography fontWeight={600}>Job Role</Typography>
          <ul>
            <li>Strong knowledge of JavaScript and React JS</li>
            <li>Working knowledge of Node.js and Express</li>
            <li>
              Portfolio of work required. Include examples of all areas of
              frontend development
            </li>
          </ul>

          <Typography fontWeight={600}>What you bring with you:</Typography>
          <ul>
            <li>Strong knowledge of JavaScript and React JS</li>
            <li>Working knowledge of Node.js and Express</li>
            <li>
              Portfolio of work required. Include examples of all areas of
              frontend development
            </li>
          </ul>
          <Typography fontWeight={600}>Duties & Responsibilities:</Typography>
          <ul>
            <li>Strong knowledge of JavaScript and React JS</li>
            <li>Working knowledge of Node.js and Express</li>
            <li>
              Portfolio of work required. Include examples of all areas of
              frontend development
            </li>
          </ul>

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
    </>
  );
};

export default JobPostMoreInfoCard;
