import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const steps = [
  "Contact Information",
  "Education and Experience",
  "Upload Resume",
];

export default function ApplyForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const [formData, setFormData] = React.useState({
    contactInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      city: "",
      county: "",
    },
    educationExperience: {
      education: "",
      experience: "",
    },
    resume: null,
  });

  const handleFormChange = (step, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [step]: {
        ...prevData[step],
        [field]: value,
      },
    }));
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      resume: event.target.files[0],
    });
  };

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div
            style={{
              display: "grid",
              maxWidth: 600,
              gap: 20,
              mt: 2,
            }}
          >
            <Typography
              sx={{
                justifyContent: "center",
                textAlign: "center",
                alignContent: "center",
                alignItems: "center",
                display: "flex",
                mt: 5,
              }}
              variant="h5"
              fontWeight={600}
            >
              Add your contact information
            </Typography>
            <TextField
              label="First Name"
              value={formData.contactInfo.firstName}
              onChange={(e) =>
                handleFormChange("contactInfo", "firstName", e.target.value)
              }
              size="small"
            />
            <TextField
              label="Last Name"
              value={formData.contactInfo.lastName}
              onChange={(e) =>
                handleFormChange("contactInfo", "lastName", e.target.value)
              }
              size="small"
            />
            <TextField
              label="Email"
              value={formData.contactInfo.email}
              onChange={(e) =>
                handleFormChange("contactInfo", "email", e.target.value)
              }
              size="small"
            />
            <TextField
              label="Phone Number"
              value={formData.contactInfo.phoneNumber}
              onChange={(e) =>
                handleFormChange("contactInfo", "phoneNumber", e.target.value)
              }
              size="small"
            />
            <TextField
              label="City (Optional)"
              value={formData.contactInfo.city}
              onChange={(e) =>
                handleFormChange("contactInfo", "city", e.target.value)
              }
              size="small"
            />
            <TextField
              label="County (Optional)"
              value={formData.contactInfo.county}
              onChange={(e) =>
                handleFormChange("contactInfo", "county", e.target.value)
              }
              size="small"
            />
          </div>
        );
      case 1:
        return (
          <div
            style={{
              display: "grid",
              maxWidth: 700,
              gap: 20,
              marginLeft: "20px",
            }}
          >
            <br />
            <Typography
              sx={{
                justifyContent: "center",
                textAlign: "center",
                alignContent: "center",
                alignItems: "center",
                display: "flex",
                mt: 5,
              }}
              variant="h5"
              fontWeight={600}
            >
              Answer these questions from the employer
            </Typography>
            <TextField
              label="Current CTC"
              value={formData.educationExperience.education}
              onChange={(e) =>
                handleFormChange(
                  "educationExperience",
                  "education",
                  e.target.value
                )
              }
              size="small"
            />

            <TextField
              label="Expected CTC"
              value={formData.educationExperience.education}
              onChange={(e) =>
                handleFormChange(
                  "educationExperience",
                  "education",
                  e.target.value
                )
              }
              size="small"
            />
            <TextField
              label="Experience"
              value={formData.educationExperience.experience}
              onChange={(e) =>
                handleFormChange(
                  "educationExperience",
                  "experience",
                  e.target.value
                )
              }
              size="small"
            />

            <TextField
              label="Notice Period"
              value={formData.educationExperience.education}
              onChange={(e) =>
                handleFormChange(
                  "educationExperience",
                  "education",
                  e.target.value
                )
              }
              size="small"
            />
          </div>
        );
      case 2:
        return (
          <div>
            <br />

            <Typography
              sx={{
                justifyContent: "center",
                textAlign: "center",
                alignContent: "center",
                alignItems: "center",
                display: "flex",
              }}
              variant="h5"
              fontWeight={600}
            >
              Add a CV for the employer
            </Typography>

            <Box
              sx={{
                border: "1px solid #004c3d",
                width: 400,
                p: 2,
                borderRadius: "4px",
                mt: 6,
              }}
            >
              <input type="file" onChange={handleFileChange} />
            </Box>
            {formData.resume && (
              <Box
                sx={{
                  marginTop: 2,
                }}
              >
                <img
                  src={URL.createObjectURL(formData.resume)}
                  alt="Uploaded CV"
                  width="200"
                  height="400"
                />
              </Box>
            )}
          </div>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <Box
      sx={{
        width: "80%",
        p: 5,
        pl: 20,
        pt: 0,
      }}
    >
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton sx={{ color: "#004c3d" }} onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <></>
        )}
      </div>

      <Box
        sx={{
          justifyContent: "center",
          textAlign: "center",
          alignContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        {/* */}
        {getStepContent(activeStep)}
      </Box>

      <React.Fragment>
        <Box sx={{ display: "flex", flexDirection: "row", mt: 5 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{
              color: "white",
              backgroundColor: "#004c3d",
              textTransform: "none",
              ":hover": {
                color: "white",
                backgroundColor: "#004c3d",
                textTransform: "none",
              },
            }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          <Button
            onClick={handleNext}
            sx={{
              color: "white",
              backgroundColor: "#004c3d",
              textTransform: "none",
              ":hover": {
                color: "white",
                backgroundColor: "#004c3d",
                textTransform: "none",
              },
            }}
          >
            Next
          </Button>
          {activeStep !== steps.length &&
            (completed[activeStep] ? (
              <Typography
                variant="caption"
                sx={{
                  display: "inline-block",
                  color: "white",
                  backgroundColor: "#004c3d",
                  textTransform: "none",
                }}
              >
                Step {activeStep + 1} already completed
              </Typography>
            ) : (
              <Button
                onClick={handleComplete}
                sx={{
                  color: "white",
                  backgroundColor: "#004c3d",
                  textTransform: "none",
                  ml: 4,
                }}
              >
                {completedSteps() === totalSteps() - 1
                  ? "Finish"
                  : "Complete Step"}
              </Button>
            ))}
        </Box>
      </React.Fragment>
    </Box>
  );
}
