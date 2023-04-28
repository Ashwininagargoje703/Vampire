// import { useState } from "react";
// import {
//   TextField,
//   Button,
//   Box,
//   Grid,
//   IconButton,
//   Typography,
// } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import useMakeCometChatProfile from "../../hooks/useMakeCometChatProfile";

// import axios from 'axios';

// function Login() {
//   const { enqueueSnackbar } = useSnackbar();
//   const [username, setUsername] = useState("");
//   // const [firstName, setFirstName] = useState("");
//   // const [lastName, setLastName] = useState("");
//   // const [avatar, setAvatar] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const { createCommetChatUser, loginCommetChatUser } =
//     useMakeCometChatProfile();

//   var showLoginSuccessSnack = (message, variant) => {
//     enqueueSnackbar(message, { variant });
//   };

//   const handleFormSubmit =async (e) => {
//     e.preventDefault();

//     const user = {
//       username,
//       // firstName,
//       // lastName,
//       // avatar,
//       password,
//     };

//     console.log(user)
//     // createCommetChatUser(user);
//     // loginCommetChatUser(user);
//     let userInfo =await axios.post("https://vampire.up.railway.app/admin/login",{userName:username, password:password})
//     if(userInfo.data.success && userInfo?.data?.data?.token){
//       showLoginSuccessSnack('login Successful', 'success')
//     }else{
//       showLoginSuccessSnack(userInfo?.data?.message ?? 'invalid inputs', 'error')
//     }
//     console.log(userInfo)

//   };

//   const handleTogglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
//       <Grid container spacing={2} justifyContent="center">
//         <Grid item xs={12} sm={8} md={6}>
//           <Typography fontSize={18} fontWeight={600}>
//             Login
//           </Typography>
//           <form onSubmit={handleFormSubmit}>
//             <TextField
//               fullWidth
//               label="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               variant="outlined"
//               margin="normal"
//             />
//             {/* <TextField
//               fullWidth
//               label="First Name"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               variant="outlined"
//               margin="normal"
//             /> */}
//             {/* <TextField
//               fullWidth
//               label="Last Name"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               variant="outlined"
//               margin="normal"
//             /> */}
//             {/* <TextField
//               fullWidth
//               label="Avatar URL"
//               value={avatar}
//               onChange={(e) => setAvatar(e.target.value)}
//               variant="outlined"
//               margin="normal"
//             /> */}
//             <TextField
//               fullWidth
//               label="Password"
//               type={showPassword ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               variant="outlined"
//               margin="normal"
//               InputProps={{
//                 endAdornment: (
//                   <IconButton
//                     onClick={handleTogglePasswordVisibility}
//                     edge="end"
//                   >
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 ),
//               }}
//             />
//             <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
//               <Button variant="contained" color="primary" type="submit" onSubmit={handleFormSubmit}>
//                 Login
//               </Button>
//             </Box>
//           </form>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// export default Login;

import React, { useState } from "react";
// import "./styles.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);

  const responseGoogle = (response) => {
    console.log(response);
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
    setLoginStatus(true);
  };
  const logout = () => {
    console.log("logout");
    setLoginStatus(false);
  };
  return (
    <div className="App">
      <h1>Login with Google</h1>
      {!loginStatus && (
        <GoogleLogin
          clientId="587734718261-jne0domt7krb8i9f9vq7b55kloeevqol.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      )}
      {loginStatus && (
        <div>
          <h2>Welcome {name}</h2>
          <h2>Email: {email}</h2>
          <img src={url} alt={name} />
          <br />
          <GoogleLogout
            clientId="587734718261-jne0domt7krb8i9f9vq7b55kloeevqol.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
          />
        </div>
      )}
    </div>
  );
}
