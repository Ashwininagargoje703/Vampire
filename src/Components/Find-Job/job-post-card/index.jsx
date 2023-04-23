import React, { useEffect, useState } from "react";
import { Box, Button, Card, Typography } from "@mui/material";
import { BsFillBagPlusFill } from "react-icons/bs";
import { getRequest } from "../../../services/request";

const JobPostCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    function fetchData() {
      getRequest({
        url: `https://vampire.up.railway.app/post/getAllPublicPost`,
      })
        .then((res) => {
          setData(res?.data?.data);
          console.log("hello res", res.data);
        })
        .catch((e) => {
          setData([]);
        });
    }
    fetchData();
  }, []);
  return (
    <>
      {data?.map((data, idx) => (
        <Card sx={{ p: 2, border: "1px solid gary" }}>
          <Typography fontSize={18} fontWeight={600}>
            {data?.title}
          </Typography>
          <Typography>{data?.relatedTo}</Typography>
          <Typography>{data?.location}</Typography>
          <Typography fontWeight={600}>
            <BsFillBagPlusFill /> {"  "}
            {data?.totalExp}
          </Typography>
          {data?.responsibilities && (
            <ul style={{ listStyleType: "circle" }}>
              {data.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          )}
        </Card>
      ))}
    </>
  );
};

export default JobPostCard;
