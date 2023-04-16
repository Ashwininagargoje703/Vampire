import React, { useState } from "react";
import { Cloudinary } from "@cloudinary/base";
import { CloudinaryContext, Image } from "@cloudinary/react";
import { FileInput } from "react-cloudinary-upload-widget";

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: "dkvw47hkq",
    apiKey: "523388568394272",
  },
});

function FileUploadOnCloudinary() {
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

  const handleUploadSuccess = (response) => {
    setUploadedImageUrl(response.secure_url);
  };

  const handleUploadFailure = (error) => {
    console.error(error);
  };

  return (
    <CloudinaryContext cloudinary={cloudinary}>
      {uploadedImageUrl && <Image src={uploadedImageUrl} />}
      <FileInput
        cloudName="<your_cloud_name>"
        uploadPreset="<your_upload_preset>"
        onSuccess={handleUploadSuccess}
        onFailure={handleUploadFailure}
        resourceType="image"
        type="upload"
      />
    </CloudinaryContext>
  );
}

export default FileUploadOnCloudinary;
