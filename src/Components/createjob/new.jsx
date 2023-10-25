import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { doRequest } from "../../services/request";

const Createjob = () => {
  const [activeStep, setActiveStep] = useState(0);
  // Step 1 State
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [discription, setDiscription] = useState("");
  const [relatedTo, setRelatedTo] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // Step 2 State
  const [responsibilities, setResponsibilities] = useState("");
  const [tags, setTags] = useState("");
  const [salaryStart, setSalaryStart] = useState("");
  const [salaryEnd, setSalaryEnd] = useState("");
  const [shift, setShift] = useState("");

  // Step 3 State
  const [requirements, setRequirements] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [language, setLanguage] = useState("");

  // Step 4 State
  const [noticePeriod, setNoticePeriod] = useState("");
  const [jobType, setJobType] = useState("");
  const [totalExp, setTotalExp] = useState("");

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

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

  return (
    <Box>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <img
          src="https://careercartz.com/wp-content/uploads/2022/10/Government-Jobs-After-B.Com-and-Salary-The-Complete-List-2022.jpg"
          alt="img"
          style={{ width: 700, height: 200 }}
        />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        {activeStep === 0 && (
          <Box component="form" onSubmit={handleNext} maxWidth={500}>
            <Typography variant="h5" component="h2">
              Add job basics - Step 1
            </Typography>
            <Box display={"flex"} gap={5}>
              <TextField
                required
                label=" Job Title"
                variant="outlined"
                placeholder="Ex. Software Engg."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                margin="normal"
                fullWidth
              />
              <TextField
                required
                label="Location"
                placeholder="Ex. Pune"
                variant="outlined"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                margin="normal"
                fullWidth
              />
            </Box>
            <TextField
              label="Description"
              variant="outlined"
              value={discription}
              onChange={(e) => setDiscription(e.target.value)}
              margin="normal"
              fullWidth
              multiline
              rows={3}
            />
            <TextField
              label="Related To"
              placeholder="ex: Infosys"
              variant="outlined"
              value={relatedTo}
              onChange={(e) => setRelatedTo(e.target.value)}
              margin="normal"
              required
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
            <Button
              type="submit"
              sx={{
                mt: 4,
                backgroundColor: "#004c3d",
                color: "white",
                textTransform: "none",
                ":hover": {
                  backgroundColor: "#004c3d",
                  color: "white",
                },
              }}
            >
              Next
            </Button>
          </Box>
        )}

        {activeStep === 1 && (
          <Box component="form" onSubmit={handleNext} maxWidth={500}>
            <Typography variant="h5" component="h2">
              Add job basics - Step 2
            </Typography>
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
              placeholder="Ex. Node, Html"
              variant="outlined"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              margin="normal"
              fullWidth
            />
            <Box sx={{ display: "flex", gap: 5 }}>
              <TextField
                label="Salary Start"
                placeholder="Ex.5lpa"
                variant="outlined"
                value={salaryStart}
                onChange={(e) => setSalaryStart(e.target.value)}
                margin="normal"
                fullWidth
              />
              <TextField
                label="Salary End"
                placeholder="Ex. 10lpa"
                variant="outlined"
                value={salaryEnd}
                onChange={(e) => setSalaryEnd(e.target.value)}
                margin="normal"
                fullWidth
              />
            </Box>
            <TextField
              label="Shift"
              placeholder="Ex. Morning"
              variant="outlined"
              value={shift}
              onChange={(e) => setShift(e.target.value)}
              margin="normal"
              fullWidth
            />

            <Button
              onClick={handleBack}
              sx={{
                mt: 4,
                mb: 4,
                backgroundColor: "#004c3d",
                color: "white",
                textTransform: "none",
                ml: 4,
                ":hover": {
                  backgroundColor: "#004c3d",
                  color: "white",
                },
              }}
            >
              Back
            </Button>

            <Button
              type="submit"
              sx={{
                mt: 4,
                backgroundColor: "#004c3d",
                color: "white",
                mb: 4,
                textTransform: "none",
                ":hover": {
                  backgroundColor: "#004c3d",
                  color: "white",
                },
              }}
            >
              Next
            </Button>
          </Box>
        )}

        {activeStep === 2 && (
          <Box component="form" onSubmit={handleNext} maxWidth={600}>
            <Typography variant="h5" component="h2">
              Add job basics - Step 3
            </Typography>
            <TextField
              label="Requirements"
              required
              variant="outlined"
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              margin="normal"
              fullWidth
              multiline
              rows={3}
            />
            <Box sx={{ display: "flex", gap: 5 }}>
              <TextField
                label="Qualifications"
                placeholder="Ex. Js, Python experince"
                variant="outlined"
                value={qualifications}
                onChange={(e) => setQualifications(e.target.value)}
                margin="normal"
                fullWidth
              />
              <TextField
                label="Education"
                placeholder="Ex. Btech"
                variant="outlined"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                margin="normal"
                fullWidth
              />
            </Box>
            <TextField
              label="Experience"
              variant="outlined"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              margin="normal"
              fullWidth
            />
            <TextField
              label="Language"
              placeholder="Ex. English"
              variant="outlined"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              margin="normal"
              fullWidth
            />

            <Button
              onClick={handleBack}
              sx={{
                mt: 4,
                mb: 4,
                backgroundColor: "#004c3d",
                color: "white",
                textTransform: "none",
                ml: 4,
                ":hover": {
                  backgroundColor: "#004c3d",
                  color: "white",
                },
              }}
            >
              Back
            </Button>
            <Button
              type="submit"
              sx={{
                mt: 4,
                mb: 4,
                backgroundColor: "#004c3d",
                color: "white",
                textTransform: "none",
                ":hover": {
                  backgroundColor: "#004c3d",
                  color: "white",
                },
              }}
            >
              Next
            </Button>
          </Box>
        )}

        {activeStep === 3 && (
          <Box component="form" onSubmit={handleSubmit} maxWidth={600}>
            <Typography variant="h5" component="h2">
              Add job basics - Step 4
            </Typography>
            <TextField
              label="Notice Period"
              required
              variant="outlined"
              value={noticePeriod}
              onChange={(e) => setNoticePeriod(e.target.value)}
              margin="normal"
              fullWidth
            />
            <TextField
              label="Job Type"
              placeholder="Ex. Remote"
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
            <Button
              type="submit"
              sx={{
                mt: 4,
                mb: 4,
                backgroundColor: "#004c3d",
                color: "white",
                textTransform: "none",
                ":hover": {
                  backgroundColor: "#004c3d",
                  color: "white",
                },
              }}
            >
              Create Post
            </Button>
            <Button
              onClick={handleBack}
              sx={{
                mt: 4,
                mb: 4,
                backgroundColor: "#004c3d",
                color: "white",
                textTransform: "none",
                ml: 4,
                ":hover": {
                  backgroundColor: "#004c3d",
                  color: "white",
                },
              }}
            >
              Back
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Createjob;
