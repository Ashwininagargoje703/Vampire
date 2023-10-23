import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { doRequest } from "../../services/request";

const Createjob = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [discription, setDiscription] = useState("");
  const [relatedTo, setRelatedTo] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [tags, setTags] = useState("");
  const [salaryStart, setSalaryStart] = useState("");
  const [salaryEnd, setSalaryEnd] = useState("");
  const [shift, setShift] = useState("");
  const [requirements, setRequirements] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("");
  const [jobType, setJobType] = useState("");
  const [totalExp, setTotalExp] = useState("");
  const [language, setLanguage] = useState("");

  const handleSubmit = async (e) => {
    const parseCommaSeparatedString = (str) => {
      return str.split(",").map((item) => item.trim());
    };
    const parseCommaSeparatedStringTags = (str) => {
      return str.split(",").map((item) => ({ name: item.trim() }));
    };
    const responsibilitiesArray = parseCommaSeparatedString(responsibilities);
    const requirementsArray = parseCommaSeparatedString(requirements);
    const tagsArray = parseCommaSeparatedStringTags(tags);
    const startSalary = parseFloat(salaryStart);
    const endSalary = parseFloat(salaryEnd);

    const qualificationsArray = parseCommaSeparatedString(qualifications);
    const educationArray = parseCommaSeparatedString(education);
    const experienceArray = parseCommaSeparatedString(experience);
    const languageArray = parseCommaSeparatedString(language);
    e.preventDefault();
    const post = {
      title,
      location,
      discription,
      relatedTo,
      imageUrl,
      responsibilities: responsibilitiesArray,
      tags: tagsArray,
      salaryStart: !isNaN(startSalary) ? startSalary : null,
      salaryEnd: !isNaN(endSalary) ? endSalary : null,
      shift,
      requirements: requirementsArray,
      qualifications: qualificationsArray,
      education: educationArray,
      experience: experienceArray,
      language: languageArray,
      noticePeriod,
      jobType,
      totalExp,
    };
    let payload = JSON.stringify(post);
    doRequest({
      url: "/post/createPostWithTitle",
      body: payload,
      method: "POST",
    })
      .then((response) => {
        console.log("knowledge", post);
        setTitle("");
        setLocation("");
        setDiscription("");
        setRelatedTo("");
        setImageUrl("");
        setResponsibilities("");
        setTags("");
        setSalaryStart("");
        setSalaryEnd("");
        setShift("");
        setRequirements("");
      })
      .catch((error) => {
        console.error("Error updating knowledge:", error);
      });
  };

  return (
    <Box
      textAlign={"center"}
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      p={2}
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
        <Box display={"flex"} gap={5}>
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
            label="Related To"
            variant="outlined"
            value={relatedTo}
            onChange={(e) => setRelatedTo(e.target.value)}
            margin="normal"
            fullWidth
          />
        </Box>
        <TextField
          required
          label="Description"
          variant="outlined"
          value={discription}
          onChange={(e) => setDiscription(e.target.value)}
          margin="normal"
          fullWidth
          multiline
          rows={4}
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
          value={
            Array.isArray(responsibilities)
              ? responsibilities.map((item) => item.name).join(", ")
              : responsibilities
          }
          onChange={(e) => setResponsibilities(e.target.value)}
          margin="normal"
          fullWidth
          multiline
          rows={4}
        />
        <TextField
          label="Tags"
          variant="outlined"
          value={
            Array.isArray(tags)
              ? tags.map((item) => item.name).join(", ")
              : tags
          }
          onChange={(e) => setTags(e.target.value)}
          margin="normal"
          fullWidth
        />
        <Box display={"flex"} gap={5}>
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
        </Box>

        <TextField
          label="Requirements"
          variant="outlined"
          value={
            Array.isArray(requirements)
              ? requirements.map((item) => item.name).join(", ")
              : requirements
          }
          onChange={(e) => setRequirements(e.target.value)}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Qualifications"
          variant="outlined"
          value={
            Array.isArray(qualifications)
              ? qualifications.map((item) => item.name).join(", ")
              : qualifications
          }
          onChange={(e) => setQualifications(e.target.value)}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Education"
          variant="outlined"
          value={
            Array.isArray(education)
              ? education.map((item) => item.name).join(", ")
              : education
          }
          onChange={(e) => setEducation(e.target.value)}
          margin="normal"
          fullWidth
        />
        <Box display={"flex"} gap={5}>
          <TextField
            label="shift"
            variant="outlined"
            value={shift}
            onChange={(e) => setShift(e.target.value)}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Language"
            variant="outlined"
            value={
              Array.isArray(language)
                ? language.map((item) => item.name).join(", ")
                : language
            }
            onChange={(e) => setLanguage(e.target.value)}
            margin="normal"
            fullWidth
          />
        </Box>
        <Box display={"flex"} gap={5}>
          <TextField
            label="Experience"
            variant="outlined"
            value={
              Array.isArray(experience)
                ? experience.map((item) => item.name).join(", ")
                : experience
            }
            onChange={(e) => setExperience(e.target.value)}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Notice Period"
            variant="outlined"
            value={noticePeriod}
            onChange={(e) => setNoticePeriod(e.target.value)}
            margin="normal"
            fullWidth
          />
        </Box>
        <Box display={"flex"} gap={5}>
          <TextField
            label="Job Type"
            variant="outlined"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Total Experience"
            variant="outlined"
            value={totalExp}
            onChange={(e) => setTotalExp(e.target.value)}
            margin="normal"
            fullWidth
          />
        </Box>

        <Button
          onSubmit={handleSubmit}
          sx={{
            backgroundColor: "#004c3d",
            borderRadius: "4px",
            border: "1px solid #004c3d",
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
              border: "1px solid #004c3d",
              color: "#004c3d",
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
