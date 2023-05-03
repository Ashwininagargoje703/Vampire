import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Precision-led payroll system",
    imgPath:
      "Automated payroll system that gets you to precisely calculate and disburse salary and compensation without a downtime glitch.",
  },
  {
    label: "Smooth talent acquisition and recruitment",
    imgPath:
      "Powerful way to carry out the process of recruitment. Allowing smooth handling of everything from applicant tracking to on-boarding.",
  },
  {
    label: "Key to high workforce performance",
    imgPath:
      "Set out the criteria to measure employee performance. Track, measure, and compare results. Set rewards and keep them motivated at work.",
  },
  {
    label: "Smooth talent acquisition and recruitment",
    imgPath:
      "Powerful way to carry out the process of recruitment. Allowing smooth handling of everything from applicant tracking to on-boarding.",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 600, flexGrow: 1, pl: 4, mt: -34 }}>
      <AutoPlaySwipeableViews
        bgcolor="transparent"
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div style={{ bgcolor: "transparent" }}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box p={2}>
                <Typography sx={{ fontSize: 32 }}>{step.label}</Typography>
                <Typography>{step.imgPath}</Typography>
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        style={{
          backgroundColor: "transparent",
          pl: 5,
          fontSize: 20,
        }}
        DotProps={{
          style: { width: 12, height: 12 },
        }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
