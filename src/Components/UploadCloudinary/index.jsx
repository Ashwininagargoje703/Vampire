import React from "react";
import { useState } from "react";
const FileUploadOnCloudinary = () => {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "i7en5oh0");
    data.append("cloud_name", "vampire-coders");
    fetch("https://api.cloudinary.com/v1_1/vampire-coders/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
        console.log(data.url);
      })
      .catch((err) => console.log(err));
  };
  console.log(window.location.hostname);
  return (
    <div>
      <div>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        ></input>
        <button onClick={uploadImage}>Upload</button>
      </div>
      <div>
        <h1>Uploaded image will be displayed here</h1>
        <img src={url} alt="img" />
      </div>
    </div>
  );
};

export default FileUploadOnCloudinary;
