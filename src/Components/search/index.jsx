import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { getRequest } from "../../services/request";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import FindJob from "../Find-Job";
import { backend_url } from "../../http-backend";
import { useMediaQuery } from "@mui/material";

const JobSearch = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = () => {
    getRequest({
      url: `${backend_url}/post/searchJobs/?title=${title}&location=${location}`,
    })
      .then((res) => {
        setSearchResults(res?.data?.data);
        console.log("search data", res?.data?.data);
      })
      .catch((e) => {
        setSearchResults([]);
      });
  };

  useEffect(() => {
    handleSearch();
  }, []);
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <>
      <Box
        sx={{
          display: isMobile ? "grid" : "flex",
          gap: 5,
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 0,
        }}
      >
        <Box className="search_input">
          <TextField
            fullWidth
            placeholder="What Job title, keywords, or company"
            onChange={handleTitleChange}
            value={title}
            sx={{
              width: isMobile ? "100%" : 400,
              border: "1px solid #004c3d",
              borderRadius: "4px",
            }}
            InputProps={{
              endAdornment: (
                <IconButton onClick={handleSearch} edge="end">
                  <SearchIcon sx={{ fontSize: 17 }} />
                </IconButton>
              ),
            }}
          />
        </Box>
        <Box className="search_input">
          <TextField
            fullWidth
            placeholder="Where city, state or pin code"
            value={location}
            sx={{
              width: isMobile ? "100%" : 400,

              border: "1px solid #004c3d",
              borderRadius: "4px",
              "& .MuiInputBase-input:focus": {
                // Define styles for focused state
                color: "#004c3d", // Change color to blue for focused state
              },
            }}
            onChange={handleLocationChange}
            InputProps={{
              endAdornment: (
                <IconButton edge="end">
                  <LocationOnIcon sx={{ fontSize: 17 }} />
                </IconButton>
              ),
            }}
          />
        </Box>
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
          onClick={handleSearch}
        >
          Find Job
        </Button>
      </Box>

      <Box mt={2}>
        <FindJob
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        />
      </Box>
    </>
  );
};

export default JobSearch;
