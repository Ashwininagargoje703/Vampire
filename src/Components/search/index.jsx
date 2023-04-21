import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import JobTitleSearch from "./job-title";
import JobLoactionSearch from "./job-location";
import { Box, Button } from "@mui/material";

const SearchBox = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 5,
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <JobTitleSearch />
        <JobLoactionSearch />
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
          Find Job
        </Button>
      </Box>
    </>
  );
};

export default SearchBox;
