import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { backend_url } from "../../http-backend";
import { getRequest } from "../../services/request";

const MainList = () => {
  const [data, setData] = useState([]);

  function fetchData() {
    getRequest({
      url: `${backend_url}/quiz/getQuizCategories`,
    })
      .then((res) => {
        setData(res?.data?.data);
        console.log("Data from the server:", res.data);
      })
      .catch((e) => {
        setData([]);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Typography
        variant="h6"
        fontWeight={600}
        display={"flex"}
        justifyContent={"center"}
      >
        Available Quizzes
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        display={"flex"}
        mt={4}
      >
        {data.map((item, index) => (
          <Grid item xs={2} key={index}>
            <Paper style={{ height: 200, textAlign: "center" }}>
              <img
                src={item.imageUrl}
                alt={item.name}
                style={{ width: "100px", height: "100px" }}
              />
              <Typography variant="subtitle1" style={{ marginTop: 10 }}>
                {item.name}
              </Typography>
              <Typography variant="subtitle1" style={{ marginTop: 10 }}>
                {item.totalQuizes}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MainList;
