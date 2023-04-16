// import React from "react";
// import { useState } from "react"
// const HomePage = () => {
//   const [image, setImage] = useState("");
//   const [url, setUrl] = useState("");
//   const uploadImage = () => {
//     const data = new FormData();
//     data.append("file", image);
//     data.append("upload_preset", "i7en5oh0");
//     data.append("cloud_name", "vampire-coders");
//     fetch("https://api.cloudinary.com/v1_1/vampire-coders/image/upload", {
//       method: "post",
//       body: data
//     })
//       .then((resp) => resp.json())
//       .then((data) => {
//         setUrl(data.url);
//         console.log(data.url);
//       })
//       .catch((err) => console.log(err));
//   };
//   console.log(window.location.hostname);
//   return (
//     <div>
//       <div>
//         <input
//           type="file"
//           onChange={(e) => setImage(e.target.files[0])}
//         ></input>
//         <button onClick={uploadImage}>Upload</button>
//       </div>
//       <div>
//         <h1>Uploaded image will be displayed here</h1>
//         <img src={url} alt='img'/>
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";
// import "./styles.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";

function HomePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);

  const responseGoogle = response => {
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
          clientId="671348139606-906f7lcl8vk6l26hivc1ka0hk2teuvb1.apps.googleusercontent.com"
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
            clientId="671348139606-906f7lcl8vk6l26hivc1ka0hk2teuvb1.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
          />
        </div>
      )}
    </div>
  );
}


export default HomePage;
