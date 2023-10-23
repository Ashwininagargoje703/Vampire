import {
  Box,
  Button,
  Card,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { getRequest } from "../../../services/request";
import { backend_url } from "../../../http-backend";

function FourCardPage() {
  const [data, setData] = useState([]);

  function fetchData() {
    getRequest({
      url: `${backend_url}/post/getAllPublicPost`,
    })
      .then((res) => {
        setData(res?.data?.data);
        console.log("hello res", res.data);
      })
      .catch((e) => {
        setData([]);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  const handleLoadMore = () => {
    window.location.href = "/joblisting";
  };

  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Box
      sx={{
        background: "white",
        height: isMobile ? "" : "500px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: isMobile ? 4 : 4,
        p: 2,
      }}
    >
      <Box textAlign={"center"}>
        <Typography fontSize={40}>
          Hundreds of Jobs From All Over the Globe
        </Typography>
        {data?.slice(0, 3).map((data, idx) => (
          <Card sx={{ p: 4, mb: 2 }}>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Box textAlign={"left"}>
                <Typography>{data?.title}</Typography>
                <Typography fontWeight={600} fontSize={12}>
                  {data?.relatedTo}
                </Typography>
              </Box>
              <Typography display={"flex"} gap={2}>
                <LocationOnIcon /> {data?.location}
              </Typography>
            </Stack>
          </Card>
        ))}

        <Button
          onClick={handleLoadMore}
          sx={{
            backgroundColor: "white",
            border: "1px solid #004c3d",
            borderRadius: "4px",
            color: "#004c3d",
            mt: 2,
            mb: 2,
            p: 1.2,
            zIndex: 9,
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#004c3d",
              color: "white",
            },
          }}
        >
          LOAD MORE LISTING
        </Button>
      </Box>
    </Box>
  );
}

export default FourCardPage;
