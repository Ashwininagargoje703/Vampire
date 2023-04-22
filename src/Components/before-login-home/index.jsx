import React, { useState } from "react";

import { Box, Button } from "@mui/material";
import SearchBox from "../search";

const BeforeLogin = () => {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <SearchBox />
      </Box>
    </>
  );
};

export default BeforeLogin;
