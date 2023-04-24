import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import useMakeCometChatProfile from "../../hooks/useMakeCometChatProfile";

import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';
import axios from 'axios';

function Login() {
  const { enqueueSnackbar } = useSnackbar();
  const [username, setUsername] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { createCommetChatUser, loginCommetChatUser } =
    useMakeCometChatProfile();

  var showLoginSuccessSnack = (message, variant) => {
    enqueueSnackbar(message, { variant });
  };

  const handleFormSubmit =async (e) => {
    e.preventDefault();

    const user = {
      username,
      // firstName,
      // lastName,
      // avatar,
      password,
    };

    console.log(user)
    // createCommetChatUser(user);
    // loginCommetChatUser(user);
    let userInfo =await axios.post("https://vampire.up.railway.app/admin/login",{userName:username, password:password})
    if(userInfo.data.success && userInfo?.data?.data?.token){
      showLoginSuccessSnack('login Successful', 'success')
    }else{
      showLoginSuccessSnack(userInfo?.data?.message ?? 'invalid inputs', 'error')
    }
    console.log(userInfo)

  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <Typography fontSize={18} fontWeight={600}>
            Login
          </Typography>
          <form onSubmit={handleFormSubmit}>
            <TextField
              fullWidth
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              variant="outlined"
              margin="normal"
            />
            {/* <TextField
              fullWidth
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              variant="outlined"
              margin="normal"
            /> */}
            {/* <TextField
              fullWidth
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              variant="outlined"
              margin="normal"
            /> */}
            {/* <TextField
              fullWidth
              label="Avatar URL"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              variant="outlined"
              margin="normal"
            /> */}
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              margin="normal"
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
            <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
              <Button variant="contained" color="primary" type="submit" onSubmit={handleFormSubmit}>
                Login
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
