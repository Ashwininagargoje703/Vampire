import * as React from "react";
import { styled, useTheme, withStyles } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
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
const CustomDot = styled("span")({
  backgroundColor: "red", // Change the dot color here
  width: 12, // Change the dot size here
  height: 12,
  borderRadius: "50%",
  display: "inline-block",
});

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        flexGrow: 1,
        pl: 4,
        mt: -34,
      }}
    >
      <AutoPlaySwipeableViews
        style={{
          transition: "500ms", // Adjust the transition speed here
        }}
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={2000} // Adjust the interval speed (in milliseconds) here
      >
        {images.map((step, index) => (
          <div key={index} style={{ bgcolor: "transparent" }}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box p={2}>
                <Typography sx={{ fontSize: 32, color: "white" }}>
                  {step.label}
                </Typography>
                <Typography sx={{ color: "whitesmoke" }}>
                  {step.imgPath}
                </Typography>
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
