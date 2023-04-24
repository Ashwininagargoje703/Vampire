import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { getRequest } from "../../services/request";

const JobSearch = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = () => {
    getRequest({
      url: `https://vampire.up.railway.app/post/searchJobs/?title=${title}&location=${location}`,
    })
      .then((res) => {
        setSearchResults(res?.data?.data);
        console.log("hello res", res.data);
      })
      .catch((e) => {
        setSearchResults([]);
      });
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 5,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box className="search_input">
        <TextField
          fullWidth
          placeholder="Where city, state or pin code"
          value={location}
          onChange={handleLocationChange}
          sx={{ Width: "150px" }}
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleSearch} edge="end">
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </Box>
      <Box className="search_input">
        <TextField
          fullWidth
          placeholder="What Job title, keywords, or company"
          value={title}
          onChange={handleTitleChange}
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleSearch} edge="end">
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </Box>
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
        onClick={handleSearch}
      >
        Find Job
      </Button>
      {showResults && searchResults && (
        <Box mt={2}>
          <h3>Search Results:</h3>
          {searchResults.map((result, index) => (
            <div key={index}>
              <p>Title: {result.title}</p>
              <p>Location: {result.location}</p>
            </div>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default JobSearch;
