import React, { useState } from "react";

import { Box, Button, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box width={"100vw"} height={"250px"}>
      <Box
        sx={{
          display: "flex",
          gap: 5,
          p: 2,
          //   textATypographygn: "center",
          //   justifyContent: "center",
          //   aTypographygnItems: "center",
        }}
      >
        <Typography>Career Advice</Typography>
        <Typography>Browse Jobs</Typography>
        <Typography>Browse Companies</Typography>
        <Typography>Salaries</Typography>
        <Typography>Indeed Events</Typography>
        <Typography>Work at Indeed</Typography>
        <Typography>Countries</Typography>
        <Typography>About</Typography>
        <Typography>Help Center</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 5,
          p: 2,

          mt: 1,
        }}
      >
        <Typography>© 2021 Indeed </Typography>
        <Typography>AccessibiTypographyty at Indeed </Typography>
        <Typography>Privacy Center </Typography>
        <Typography>Cookies </Typography>
        <Typography>Privacy </Typography>
        <Typography>Terms</Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          textAlign: "center",
          justifyContent: "center",
          mt: 3,
        }}
      >
        <Typography fontSize={18} fontWeight={600}>
          {" "}
          Let employers find you
        </Typography>
        <Button
          sx={{
            backgroundColor: "#2557a7",
            color: "white",
            fontWeight: 600,
            borderRadius: "8px",
            textTransform: "none",
            mt: 2,
            p: 1.5,
            "&:hover": {
              backgroundColor: "#2557a7",
              color: "white",
            },
          }}
        >
          Upload your resume
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
