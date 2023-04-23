import "./App.css";
import { useState } from "react";
import { CometChatUI } from "./cometchat-pro-react-ui-kit/CometChatWorkspace/src";
import useMakeCometChatProfile from "./hooks/useMakeCometChatProfile";
import AppRoutes from "./app-routes";
import ROUTES from "./Pages/routes";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import NavbarApp from "./Components/before-login-home/navbar";
import JobLocationSearch from "./Components/search/job-location";
import JobLoactionSearch from "./Components/search/job-location";
import SearchBox from "./Components/search";
import BeforeLogin from "./Components/before-login-home";
import HomeMainPage from "./Pages/home-page";
import Footer from "./Components/before-login-home/footer";

function App({ isAuthenticate, setAuth }) {
  const [Name, setName] = useState(String);
  const [Mobile, setMobile] = useState(Number);
  const [cMobile, setcMobile] = useState(Number);
  const [getOtp, setGetotp] = useState("");
  const navigate = useNavigate();
  const [showerr, setShowerr] = useState(false);
  const [otpEnter, setEnter] = useState(true);

  const [otploading, setOtploading] = useState(false);

  const [dis, setDis] = useState(false);
  const handleOtp = () => {
    // console.log(Name,'moj',Mobile);
    setDis(true);
    if (Mobile.toString().length === 10 || cMobile.toString().length === 10) {
      if (Mobile === cMobile) {
        setOtploading(true);
        const api_key =
          "EPBBGGhzN7H00yRcYQdAMksCSbamLEyj0rmHeDgLRSfUWMQ8JM5I5jouxI8q";
        let genOtp = Math.floor(Math.random() * (9999 - 1000)) + 1000;
        sessionStorage.setItem("otp", genOtp + 1);
        axios
          .get(
            `https://www.fast2sms.com/dev/bulkV2?authorization=${api_key}&variables_values=${genOtp}&route=otp&numbers=${Mobile}`
          )
          .then((res) => {
            setOtploading(false);
            alert(`otp send to ${Mobile}`);
            // setEnter(false);
          });
      } else alert("Mobile Number not Match");
    } else {
      alert("Please provide a valid number");
    }
  };

  const handleLogin = () => {
    let otp = sessionStorage.getItem("otp");
    if (otp - 1 == +getOtp) {
      alert(`Welcome ${Name} Congratulation Login Suceesfull 🤓`);

      navigate("/");
      setShowerr(false);
      // setAuth(true);
    } else {
      setShowerr(true);
      alert(`otp not match`);
    }
  };
  return (
    <>
      {/* <Box>
        <h1 className="h0">Login With OTP 😍</h1>
        <img
          style={{ height: 80, width: 80 }}
          src="https://play-lh.googleusercontent.com/n0GFhdliUbbaijnLZU7CpMOaOhujy55jtaMUUy_sHSR9AF_YDYEEPi5up1toFd3mTg=w240-h480-rw"
          alt=""
        />
        <Box sx={{ display: "flex", flexDirection: "column", width: 400 }}>
          <TextField
            className="int"
            label="Enter Your name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <hr />
          <hr />
          <TextField
            className="int"
            label="Enter Your mobile no.(enter only 10 digit no)"
            value={Mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <hr />
          <hr />
          <TextField
            className="int"
            label="Confirm mobile no."
            value={cMobile}
            onChange={(e) => setcMobile(e.target.value)}
          />
          <hr />
          <hr />
          {cMobile.toString().length === 10 ? (
            Mobile === cMobile ? (
              <span className="mobileCheck">Matched!</span>
            ) : (
              <span className="mobileCheck" style={{ color: "red" }}>
                Not Matched!
              </span>
            )
          ) : (
            ""
          )}
          <Button
            className="int"
            variant="contained"
            color="primary"
            disabled={Mobile !== cMobile}
            onClick={handleOtp}
          >
            Send OTP
          </Button>
          mkiu97u97
          <hr />
          <TextField
            className="int"
            label="Enter OTP"
            value={getOtp}
            onChange={(e) => setGetotp(e.target.value)}
          />
          <hr />
          <hr />
          ``
          <Button
            className="int"
            variant="contained"
            color="secondary"
            disabled={getOtp === ""}
            onClick={handleLogin}
            style={{ backgroundColor: "black", color: "white" }}
          >
            Login
          </Button>
          {otploading ? (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <CircularProgress />
            </Box>
          ) : (
            ""
          )}
        </Box>
      </Box> */}
      <HomeMainPage />
    </>
  );
}

export default App;
