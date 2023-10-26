import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import logo from "./../../Components/assest/LogoNew.png";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import SwipeableTextMobileStepper from "../slider";
import { backend_url } from "../../http-backend";
import { useCookies } from "react-cookie";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["user"]);

  // console.log(userName)
  const handleSubmit = async () => {
    console.log("get hit here");
    let loginData = {
      userName,
      password,
    };

    let userData = await axios.post(`${backend_url}/admin/login`, loginData);
    console.log(userData.data.data);

    if (userData) {
      console.log("hit here only");
      setCookie("serviceToken", userData.data.data.token);
      setCookie("userId", userData.data.data.userId);
      setCookie("role", userData.data.data.role);
      setCookie("userName", userData.data.data.phoneNumber);
      setCookie("name", userData.data.data.name);
      setCookie("isLoggedIn", "true");
    }

    navigate("/");
  };

  const isMobile = useMediaQuery("(max-width: 600px)");

  return isMobile ? (
    <Box
      sx={{
        backgroundColor: "white",
        width: "100%",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link to="/home">
        {" "}
        <img
          src={logo}
          alt="logo"
          style={{ height: "200px", cursor: "pointer" }}
        />
      </Link>
      <Box display={"flex"} mb={3} gap={1} pl={2}>
        <PersonOutlineIcon style={{ fontSize: 30, color: "#004c3d" }} />
        <Typography fontSize={18}>Sign In</Typography>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        display={"grid"}
        gap={3}
        p={2}
      >
        <TextField
          id="outlined-multiline-flexible"
          sx={{
            "&.Mui-focused .MuiInputLabel-root": {
              color: "green",
            },
          }}
          label="User Name"
          multiline
          maxRows={4}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          id="outlined-textarea"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          multiline
        />
      </Box>
      <Box>
        <Button
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#004c3d",
            border: "0.1px solid #004c3d",
            borderRadius: "4px",
            color: "white",
            mt: 4,
            p: 1.2,
            pr: 8,
            pl: 8,
            fontWeight: 600,

            "&:hover": {
              backgroundColor: "white",
              border: "0.1px solid #004c3d",
              color: "#004c3d",
            },
          }}
        >
          Login
        </Button>
      </Box>
      <Box display={"grid"} mt={2}>
        <Link
          to={"/register"}
          style={{
            textDecoration: "none",
          }}
        >
          <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
            {" "}
            Don't have an account? Register
          </Typography>
        </Link>
        <br />
        <Link mt={2} style={{ textDecoration: "none" }} to={"/forgot-password"}>
          <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
            Forgot Password?
          </Typography>{" "}
        </Link>
      </Box>
    </Box>
  ) : (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        backgroundImage:
          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPx6pqf2yUuWJvEkpuJ2oSxYNNalUgTrTA2qzBN08V&s)",
      }}
    >
      <Box>
        <SwipeableTextMobileStepper />
      </Box>
      <Box
        sx={{
          maxWidth: 500,
          backgroundColor: "white",
          boxShadow: "1.05975px 4.23898px 7.97545px 4.43081px rgb(0 0 0 / 10%)",
          border: "1.05975px solid rgba(9, 54, 121, 0.1)",
          p: 4,
          mr: 13,
          width: "100%",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/home">
          {" "}
          <img
            src={logo}
            alt="logo"
            style={{ height: "100px", cursor: "pointer" }}
          />
        </Link>
        <br />
        <Box display={"flex"} mb={3} gap={1}>
          <PersonOutlineIcon style={{ fontSize: 30, color: "#004c3d" }} />
          <Typography fontSize={18}>Sign In</Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit} display={"grid"} gap={3}>
          <TextField
            id="outlined-multiline-flexible"
            sx={{
              "&.Mui-focused .MuiInputLabel-root": {
                color: "green",
              },
            }}
            label="User Name"
            multiline
            maxRows={4}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            id="outlined-textarea"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            multiline
          />
        </Box>

        <Box>
          <Button
            onClick={handleSubmit}
            sx={{
              backgroundColor: "#004c3d",
              border: "0.1px solid #004c3d",
              borderRadius: "4px",
              color: "white",
              mt: 4,
              p: 1.2,
              pr: 8,
              pl: 8,
              fontWeight: 600,

              "&:hover": {
                backgroundColor: "white",
                border: "0.1px solid #004c3d",
                color: "#004c3d",
              },
            }}
          >
            Login
          </Button>
        </Box>
        <Box display={"grid"} mt={2}>
          <Link
            to={"/register"}
            style={{
              textDecoration: "none",
            }}
          >
            <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
              {" "}
              Don't have an account? Register
            </Typography>
          </Link>
          <br />
          <Link
            mt={2}
            style={{ textDecoration: "none" }}
            to={"/forgot-password"}
          >
            <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
              Forgot Password?
            </Typography>{" "}
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
