import React, { createRef, useContext, useEffect, useState } from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "0.5rem",
  backgroundColor: "white",
  border: "1px solid gray",
  marginRight: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  color: "#a0a0a6",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5, 1, 1.5, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    fontSize: "2rem",

    [theme.breakpoints.up("sm")]: {
      width: "110ch",
    },
    [theme.breakpoints.up("xs")]: {
      width: "42ch",
      fontSize: "1rem",
    },

    "@media (max-width:290px)": {
      fontSize: "0.5rem",
      width: "35ch",
    },
    "@media (max-width:400px)": {
      fontSize: "0.6rem",
      width: "40ch",
    },
  },
}));

const JobTitleSearch = () => {
  return (
    <Box className="search_input">
      <Search component="form">
        <SearchIconWrapper>
          <SearchIcon
            style={{
              marginLeft: "2px",
              color: "rgb(112, 112, 123)",
              height: 18,
            }}
          />
        </SearchIconWrapper>
        <StyledInputBase
          // sx={{"& .MuiInputBase-input":{
          //   width:'200px'
          // }}}
          placeholder="Where city, state or pin code"
        />
      </Search>
    </Box>
  );
};

export default JobTitleSearch;
