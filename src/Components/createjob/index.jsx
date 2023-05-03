import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Typography, Box } from "@mui/material";

const Createjob = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [relatedTo, setRelatedTo] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [tags, setTags] = useState("");
  const [salaryStart, setSalaryStart] = useState("");
  const [salaryEnd, setSalaryEnd] = useState("");
  const [salaryType, setSalaryType] = useState("");
  const [shift, setShift] = useState("");
  const [requirements, setRequirements] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = {
      title,
      location,
      description,
      relatedTo,
      imageUrl,
      responsibilities,
      tags,
      salaryStart,
      salaryEnd,
      salaryType,
      shift,
      requirements,
    };
    await axios.post(
      "https://vampire.up.railway.app/post/createPostWithTitle",
      post
    );
    // Reset form
    setTitle("");
    setLocation("");
    setDescription("");
    setRelatedTo("");
    setImageUrl("");
    setResponsibilities("");
    setTags("");
    setSalaryStart("");
    setSalaryEnd("");
    setSalaryType("");
    setShift("");
    setRequirements("");
  };

  return (
    <Box
      textAlign={"center"}
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
    >
      <Box component="form" onSubmit={handleSubmit} maxWidth={400}>
        <Typography variant="h5" component="h2">
          Create Post
        </Typography>
        <TextField
          required
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
          fullWidth
        />
        <TextField
          required
          label="Location"
          variant="outlined"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          margin="normal"
          fullWidth
        />
        <TextField
          required
          label="Description"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
          fullWidth
          multiline
          rows={4}
        />
        <TextField
          label="Related To"
          variant="outlined"
          value={relatedTo}
          onChange={(e) => setRelatedTo(e.target.value)}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Image URL"
          variant="outlined"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Responsibilities"
          variant="outlined"
          value={responsibilities}
          onChange={(e) => setResponsibilities(e.target.value)}
          margin="normal"
          fullWidth
          multiline
          rows={4}
        />
        <TextField
          label="Tags"
          variant="outlined"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Salary Start"
          variant="outlined"
          value={salaryStart}
          onChange={(e) => setSalaryStart(e.target.value)}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Salary End"
          variant="outlined"
          value={salaryEnd}
          onChange={(e) => setSalaryEnd(e.target.value)}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Salary Type"
          variant="outlined"
          value={salaryEnd}
          onChange={(e) => setSalaryType(e.target.value)}
          margin="normal"
          fullWidth
        />{" "}
        <TextField
          label="shift"
          variant="outlined"
          value={shift}
          onChange={(e) => setShift(e.target.value)}
          margin="normal"
          fullWidth
        />
        <TextField
          label="requirements"
          variant="outlined"
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          margin="normal"
          fullWidth
        />
        <Button
          sx={{
            backgroundColor: "yellowgreen",
            borderRadius: "4px",
            border: "1px solid yellowgreen",
            color: "white",
            mt: 4,
            p: 1.2,
            pr: 8,
            pl: 8,
            fontWeight: 600,

            "&:hover": {
              mt: 4,
              p: 1.2,
              pr: 8,
              fontWeight: 600,
              pl: 8,
              backgroundColor: "white",
              border: "1px solid yellowgreen",
              color: "yellowgreen",
              borderRadius: "4px",
            },
          }}
          type="submit"
        >
          Create Post
        </Button>
      </Box>
    </Box>
  );
};

export default Createjob;
