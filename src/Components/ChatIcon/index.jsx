import React, { useState } from "react";
import { BsFillChatTextFill } from "react-icons/bs";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Chat from "../comet-chat";

const MobileMessageIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleclose = () => {
    setIsOpen(false);
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!isOpen && (
        <Box onClick={handleClick} mb={1} mr={1}>
          <BsFillChatTextFill fontSize={30} />
        </Box>
      )}
      {isOpen && (
        <div style={{ width: "100vw" }}>
          <Typography onClose={handleclose} sx={{ width: "100%" }}>
            <CloseIcon
              sx={{
                color: "black",
                fontSize: 16,
                ml: 46,
              }}
            />
          </Typography>
          <Chat onClose={handleClick} handleclose={handleclose} />
        </div>
      )}
    </>
  );
};

export default MobileMessageIcon;
